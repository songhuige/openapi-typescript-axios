#### 配置文件，文件名可以是以下任意格式

- openapi-genrc`,
- openapi-genrc.yaml`,
- openapi-genrc.yml`,
- openapi-genrc.json`,
- openapi-genrc.js`,
- openapi-genrc.cjs`,
- openapi-gen.config.js`,
- openapi-gen.config.cjs`,
- openapi-genrc.ts`,
- openapi-genrc.cts`,
- openapi-gen.config.ts`,
- openapi-gen.config.cts`,

#### 配置例子

```typescript
const config = [{ name: "base", url: "http://localhost:3000/doc-json" }];

module.exports = config;
```

#### 生成命令

```
yarn gen-schema
```

````
npm run gen-schema
```

#### tsconfig.json 配置

需要在编译选项的types中加入"openapi-typescript-gen"
```
{
  "compilerOptions": {
    "types": [
      "openapi-typescript-gen"
    ],
  },
}
```
````
