import ts from "typescript";

import { createTypeNode } from "./typedef";
import {
  type AccessLevel,
  type FunctionParameter,
  toAccessLevelModifiers,
  toExpression,
  toParameterDeclarations,
} from "./types";
import type { Comments } from "./utils";
import { addLeadingJSDocComment, isType } from "./utils";

/**
 * Create a class constructor declaration.
 * @param accessLevel - the access level of the constructor.
 * @param comment - comment to add to function.
 * @param multiLine - if it should be multi line.
 * @param parameters - parameters for the constructor.
 * @param statements - statements to put in the contructor body.
 * @returns ts.ConstructorDeclaration
 */
export const createConstructorDeclaration = ({
  accessLevel,
  comment,
  multiLine = true,
  parameters = [],
  statements = [],
}: {
  accessLevel?: AccessLevel;
  comment?: Comments;
  multiLine?: boolean;
  parameters?: FunctionParameter[];
  statements?: ts.Statement[];
}) => {
  const node = ts.factory.createConstructorDeclaration(
    toAccessLevelModifiers(accessLevel),
    toParameterDeclarations(parameters),
    ts.factory.createBlock(statements, multiLine)
  );
  if (comment?.length) {
    addLeadingJSDocComment(node, comment);
  }
  return node;
};

/**
 * Create a class method declaration.
 * @param accessLevel - the access level of the method.
 * @param comment - comment to add to function.
 * @param isStatic - if the function is static.
 * @param multiLine - if it should be multi line.
 * @param name - name of the method.
 * @param parameters - parameters for the method.
 * @param returnType - the return type of the method.
 * @param statements - statements to put in the contructor body.
 * @returns ts.MethodDeclaration
 */
export const createMethodDeclaration = ({
  accessLevel,
  comment,
  isStatic = false,
  multiLine = true,
  name,
  parameters = [],
  returnType,
  statements = [],
}: {
  accessLevel?: AccessLevel;
  comment?: Comments;
  isStatic?: boolean;
  multiLine?: boolean;
  name: string;
  parameters?: FunctionParameter[];
  returnType?: string | ts.TypeNode;
  statements?: ts.Statement[];
}) => {
  const modifiers = toAccessLevelModifiers(accessLevel);
  if (isStatic) {
    modifiers.push(ts.factory.createModifier(ts.SyntaxKind.StaticKeyword));
  }
  const node = ts.factory.createMethodDeclaration(
    modifiers,
    undefined,
    ts.factory.createIdentifier(name),
    undefined,
    [],
    toParameterDeclarations(parameters),
    returnType ? createTypeNode(returnType) : undefined,
    ts.factory.createBlock(statements, multiLine)
  );
  if (comment) {
    addLeadingJSDocComment(node, comment);
  }
  return node;
};

type ClassDecorator = {
  name: string;
  args: any[];
};

/**
 * Create a class declaration.
 * @param decorator - the class decorator
 * @param members - elements in the class.
 * @param name - name of the class.
 * @returns ts.ClassDeclaration
 */
export const createClassDeclaration = ({
  decorator,
  members = [],
  name,
}: {
  decorator?: ClassDecorator;
  members?: ts.ClassElement[];
  name: string;
}) => {
  const modifiers: ts.ModifierLike[] = [
    ts.factory.createModifier(ts.SyntaxKind.ExportKeyword),
  ];
  if (decorator) {
    modifiers.unshift(
      ts.factory.createDecorator(
        ts.factory.createCallExpression(
          ts.factory.createIdentifier(decorator.name),
          undefined,
          decorator.args
            .map((arg) => toExpression({ value: arg }))
            .filter(isType<ts.Expression>)
        )
      )
    );
  }
  // Add newline between each class member.
  const m: ts.ClassElement[] = [];
  members.forEach((member) => {
    m.push(member);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    m.push(ts.factory.createIdentifier("\n"));
  });
  return ts.factory.createClassDeclaration(
    modifiers,
    ts.factory.createIdentifier(name),
    [],
    [],
    m
  );
};
