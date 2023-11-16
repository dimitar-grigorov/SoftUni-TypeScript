//tsc && node app-class-demo.js

@withEmploymentDateonPrototype
@withEmploymentDate
class Manager {
  task: string = "Simple task";
  project: string = "Simple project";

  constructor() {
    console.log("Manager class has initialized");
  }
}

const manager = new Manager();
console.log(manager); // we dont see the withEmploymentDateonPrototype property
console.log(manager.constructor.prototype); // we see the withEmploymentDateonPrototype property

function withEmploymentDateonPrototype(
  value: Function,
  context: ClassDecoratorContext
) {
  value.prototype.withEmploymentDateonPrototype = new Date().toISOString();
}

type Args = { new (...args: any[]): {} };
function withEmploymentDate<T extends Args>(
  baseClass: T,
  context: ClassDecoratorContext
) {
  return class extends baseClass {
    employmentDate = new Date().toISOString();

    constructor(...args: any[]) {
      super(...args);

      console.log("Adding employment date to " + context.name);
    }
  };
}

function printDecoratorData(
  value: Function,
  context: ClassDecoratorContext
): void {
  console.log({ value });
  console.log({ context });
  context.addInitializer(() => {
    console.log("Class initialized " + context.name);
  });
}

function seal(constructor: Function, context: ClassDecoratorContext) {
  Object.seal(constructor);
  Object.seal(constructor.prototype);
}
