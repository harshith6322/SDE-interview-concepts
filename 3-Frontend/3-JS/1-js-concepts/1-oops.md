Object-Oriented Programming (OOP) in JavaScript involves using objects to represent and structure code in a way that's more organized, reusable, and easier to maintain. Let's break down OOP concepts in JavaScript in simple terms with examples that even kids can understand:

### 1. **Objects**

Objects are like boxes that hold related information. They can have **properties** (data) and **methods** (functions).

#### Example:

```javascript
let dog = {
  name: "Buddy",
  breed: "Golden Retriever",
  bark: function() {
    console.log("Woof! Woof!");
  }
};

console.log(dog.name);   // Accessing property (Output: Buddy)
dog.bark();              // Calling method (Output: Woof! Woof!)
dog.name or dog["name"]
```

### 1.2 **Old class**

Constructor Functions and the new Operator

### Example:

```javascript
const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never to this!
  // this.calcAge = function () {
  //   console.log(2037 - this.birthYear);
  // };
};

const jonas = new Person("Jonas", 1991);
console.log(jonas);

console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

jonas.calcAge();
matilda.calcAge();

console.log(jonas.__proto__);
console.log(jonas.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(jonas));
console.log(Person.prototype.isPrototypeOf(matilda));
console.log(Person.prototype.isPrototypeOf(Person));
```

### 2. **Classes**

A class is like a blueprint to create objects. It tells you how the object should be structured. You can create many objects (instances) using a class.

#### Example:

```javascript
class Dog {
  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
  }

  bark() {
    console.log(this.name + " says Woof! Woof!");
  }
}

let myDog = new Dog("Buddy", "Golden Retriever");
myDog.bark(); // Output: Buddy says Woof! Woof!
```

- **`constructor`** is a special method that helps create and initialize objects from the class.
- **`new Dog()`** creates a new "dog" object using the **Dog** class.

### 3. **Encapsulation**

Encapsulation is about bundling related data and methods together and controlling access to them. It hides the details and shows only what’s necessary.

#### Example:

```javascript
class BankAccount {
  constructor(balance) {
    let _balance = balance; // Private variable

    this.getBalance = function () {
      return _balance; // Getter method
    };

    this.deposit = function (amount) {
      _balance += amount; // Adding money
    };
  }
}

let myAccount = new BankAccount(100);
console.log(myAccount.getBalance()); // Output: 100
myAccount.deposit(50);
console.log(myAccount.getBalance()); // Output: 150
```

- **Private variables** like `_balance` can only be accessed using special methods (`getBalance` and `deposit`), not directly.

### 4. **Inheritance**

Inheritance means creating a new class based on an existing class. The new class **inherits** properties and methods from the original class and can also have its own.

#### Example:

```javascript
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(this.name + " makes a sound.");
  }
}

class Dog extends Animal {
  // Dog inherits from Animal
  speak() {
    console.log(this.name + " barks.");
  }
}

let myDog = new Dog("Buddy");
myDog.speak(); // Output: Buddy barks.
```

- **`extends`** creates a new class (e.g., `Dog`) that inherits from another class (e.g., `Animal`).
- The `Dog` class can override the `speak()` method of the `Animal` class to have its own behavior.

### 5. **Polymorphism**

Polymorphism means "many forms." In simple terms, it allows different classes to define their own versions of the same method.

#### Example:

```javascript
class Animal {
  speak() {
    console.log("The animal makes a sound.");
  }
}

class Cat extends Animal {
  speak() {
    console.log("The cat meows.");
  }
}

class Dog extends Animal {
  speak() {
    console.log("The dog barks.");
  }
}

let animals = [new Dog(), new Cat(), new Animal()];
animals.forEach((animal) => animal.speak());

// Output:
// The dog barks.
// The cat meows.
// The animal makes a sound.
```

- Even though each class has a method called `speak()`, the result is different based on the class (dog, cat, or generic animal).

### 6. **Abstraction**

Abstraction means showing only the important details and hiding the complex inner workings.

In JavaScript, abstraction is often done by exposing methods for important actions and hiding details.

#### Example:

#--this is used to delcare pvt properties or methods

```javascript
class Car {
  start() {
    this._checkEngine();
    this._fuelUp();
    console.log("The car starts.");
  }

  _checkEngine() {
    console.log("Checking the engine...");
  }

  _fuelUp() {
    console.log("Filling up fuel...");
  }
}

let myCar = new Car();
myCar.start();
// Output:
// Checking the engine...
// Filling up fuel...
// The car starts.
```

- The user of the `Car` class only needs to call `start()`. They don’t need to worry about how the engine is checked or how the fuel is filled, which are internal details (abstraction).

### 7. **Prototype-based Inheritance**

JavaScript uses prototype-based inheritance. Every object in JavaScript has a prototype, and objects inherit properties and methods from their prototype.

#### Example:

```javascript
function Person(name) {
  this.name = name;
}

Person.prototype.greet = function () {
  console.log("Hello, my name is " + this.name);
};

let john = new Person("John");
john.greet(); // Output: Hello, my name is John

//using class
class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log("Hello, my name is " + this.name);
  }
}

let john = new Person("John");
john.greet(); // Output: Hello, my name is John
```

- The method `greet()` is defined on the `Person.prototype`, and all objects created using `Person` inherit this method.

### Summary of OOP Concepts in JavaScript:

- **Objects**: Group data and functions.
- **Classes**: Blueprints for creating objects.
- **Encapsulation**: Hide the details, and expose only what's necessary.
- **Inheritance**: Create a new class based on an existing one.
- **Polymorphism**: Different classes can have their own version of the same method.
- **Abstraction**: Hide complex details and show only the important parts.
- **Prototype-based Inheritance**: Objects inherit from prototypes in JavaScript.

This is a simplified overview of OOP concepts in JavaScript. Let me know if you'd like to dive deeper into any specific concept!
