# TypeScript Course Notes

[Course Link](https://softuni.bg/trainings/4343/typescript-october-2023)
[Instructor's repository](https://github.com/tsvetis/TypeScript-OCT-2023)

## 01. Type System

**Install TypeScript**
`npm install -g typescript`
**Create the tsconfig.json file**
`tsc --init`

**Example tsconfig.json file**

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "commonjs",
    "rootDir": "./src",
    "outDir": "./dist",
    "strict": true,
    "sourceMap": true, // for debugging
  }
}
```

**Check files**
`tsc --noEmit`
**Run the app**
`tsc && node dist/app.js`
