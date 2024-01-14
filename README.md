# TypeScript SoftUni Course Notes

[Course Link](https://softuni.bg/trainings/4343/typescript-october-2023)
[Instructor's repository](https://github.com/tsvetis/TypeScript-OCT-2023)

## Course Topics

- Type System: Dive into TypeScript's robust type system.
- OOP: Grasp Object-Oriented Programming principles.
- Generics: Understand the versatility of generic programming.
- Namespaces and Modules: Learn to organize code efficiently.
- Decorators: Extend the functionality of your code.
- Workshop: Build a real-world TypeScript application.
- Exam Preparation: Prepare for the TypeScript exam.

## Notes

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

## 04. Namespaces and Modules

### Namespaces vs Modules

- Namespaces are used to organize code into logical groups and prevent name collisions. They are executed when they are defined.
- Modules are used to organize code into logical groups and prevent name collisions. They are executed when they are imported.

### Namespaces

```bash
cd "$(git rev-parse --show-toplevel)/04-Namespaces-and-Modules/Demo/namespaces/"
tsc --init
```

### Modules

```bash
cd "$(git rev-parse --show-toplevel)/04-Namespaces-and-Modules/Demo/modules/"
tsc --init
npm init -y
npm i typescript -D
# create index.ts
npm run build
```

### Bundles (Webpack)

```bash
cd "$(git rev-parse --show-toplevel)/04-Namespaces-and-Modules/Demo/skeleton/"
tsc --init
npm init -y
npm i webpack webpack-cli webpack-dev-server typescript ts-loader -D
npm run build
npm run dev

# After the skeleton is created
npm i
npm run dev
```
