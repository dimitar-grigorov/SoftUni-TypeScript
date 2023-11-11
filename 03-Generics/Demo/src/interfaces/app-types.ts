// cd "$(git rev-parse --show-toplevel)/03-Generics/Demo"
// tsc && node dist/interfaces/app-types.js

type Mammal = {
    legsCount: number;
    furColor: string;
  };
  
  type Animal = {
    eat: () => void;
  };
  
  type Dog = Mammal &
    Animal & {
      name: string;
    };
  
  interface DogOnwer {
    dogs: Dog[];
  }
  
  type PersonTest = {
    dogOwner: DogOnwer;
  };
  
  function getMammal(): Dog {
    const dog: Dog = {
      name: "Johny",
      legsCount: 4,
      furColor: "brown",
      eat: () => console.log("Dog is eating"),
    };
  
    return dog;
  }
  
  // class Dog implements Mammal {
  //   legsCount: number;
  //   furColor: string;
  
  //   /**
  //    *
  //    */
  //   constructor() {
  //     this.legsCount = 4;
  //     this.furColor = "yellow";
  //   }
  // }
  
  // const dog1 = new Dog();