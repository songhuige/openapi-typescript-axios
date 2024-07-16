import type { PathLike } from "node:fs";
import { rmSync, writeFileSync } from "node:fs";
import path from "node:path";

import type ts from "typescript";

import * as classes from "./classes";
import * as convert from "./convert";
import * as functions from "./function";
import * as module from "./module";
import * as _return from "./return";
import * as transform from "./transform";
import * as typedef from "./typedef";
import * as types from "./types";
import { stringToTsNodes, tsNodeToString } from "./utils";

export type { Property } from "./typedef";
export type { FunctionParameter } from "./types";
export type { Comments } from "./utils";
export type { ClassElement, Node, TypeNode } from "typescript";

const splitNameAndExtension = (fileName: string) => {
  const match = fileName.match(/\.[0-9a-z]+$/i);
  const extension = match ? match[0].slice(1) : "";
  const name = fileName.slice(
    0,
    fileName.length - (extension ? extension.length + 1 : 0)
  );
  return { extension, name };
};

export class TypeScriptFile {
  private _headers: Array<string> = [];
  private _imports: Array<ts.Node> = [];
  private _items: Array<ts.Node | string> = [];
  private _name: string;
  private _path: PathLike;

  public constructor({
    dir,
    name,
    header = true,
  }: {
    dir: string;
    name: string;
    header?: boolean;
  }) {
    this._name = this._setName(name);
    this._path = path.resolve(dir, this.getName());

    if (header) {
      this._headers = [...this._headers];
    }
  }

  public add(...nodes: Array<ts.Node | string>) {
    this._items = [...this._items, ...nodes];
  }

  public addImport(...params: Parameters<typeof compiler.import.named>) {
    this._imports = [...this._imports, compiler.import.named(...params)];
  }

  public getName(withExtension = true) {
    if (withExtension) {
      return this._name;
    }

    const { name } = splitNameAndExtension(this._name);
    return name;
  }

  public isEmpty() {
    return !this._items.length;
  }

  public remove(options?: Parameters<typeof rmSync>[1]) {
    rmSync(this._path, options);
  }

  /**
   * Removes last node form the stack. Works as undo.
   */
  public removeNode() {
    this._items = this._items.slice(0, this._items.length - 1);
  }

  private _setName(fileName: string) {
    if (fileName.includes("index")) {
      return fileName;
    }

    const { extension, name } = splitNameAndExtension(fileName);
    return [name, "gen", extension].filter(Boolean).join(".");
  }

  public toString(seperator = "\n") {
    let output: string[] = [];
    if (this._headers.length) {
      output = [...output, this._headers.join("\n")];
    }
    if (this._imports.length) {
      output = [
        ...output,
        this._imports.map((node) => tsNodeToString({ node })).join("\n"),
      ];
    }
    output = [
      ...output,
      ...this._items.map((node) =>
        typeof node === "string"
          ? node
          : tsNodeToString({ node, unescape: true })
      ),
    ];
    return output.join(seperator);
  }

  public write(seperator = "\n") {
    if (this.isEmpty()) {
      this.remove({ force: true });
      return;
    }
    writeFileSync(this._path, this.toString(seperator));
  }
}

export const compiler = {
  class: {
    constructor: classes.createConstructorDeclaration,
    create: classes.createClassDeclaration,
    method: classes.createMethodDeclaration,
  },
  convert: {
    expressionToStatement: convert.convertExpressionToStatement,
  },
  export: {
    all: module.createExportAllDeclaration,
    const: module.createExportConstVariable,
    named: module.createNamedExportDeclarations,
  },
  function: {
    call: functions.createCallExpression,
  },
  import: {
    named: module.createNamedImportDeclarations,
  },
  logic: {
    access: transform.createAccessExpression,
    if: transform.createIfStatement,
    safeAccess: transform.createSafeAccessExpression,
  },
  return: {
    functionCall: _return.createReturnFunctionCall,
    statement: _return.createReturnStatement,
  },
  transform: {
    alias: transform.createAlias,
    arrayTransformMutation: transform.createArrayTransformMutation,
    dateTransformMutation: transform.createDateTransformMutation,
    mapArray: transform.createArrayMapTransform,
    newDate: transform.createDateTransformerExpression,
    responseArrayTransform: transform.createResponseArrayTransform,
    transformItem: transform.createFunctionTransformMutation,
  },
  typedef: {
    alias: typedef.createTypeAliasDeclaration,
    array: typedef.createTypeArrayNode,
    basic: typedef.createTypeNode,
    interface: typedef.createTypeInterfaceNode,
    intersect: typedef.createTypeIntersectNode,
    record: typedef.createTypeRecordNode,
    tuple: typedef.createTypeTupleNode,
    union: typedef.createTypeUnionNode,
  },
  types: {
    array: types.createArrayType,
    enum: types.createEnumDeclaration,
    function: types.createFunction,
    object: types.createObjectType,
  },
  utils: {
    toNode: stringToTsNodes,
    toString: tsNodeToString,
  },
};
