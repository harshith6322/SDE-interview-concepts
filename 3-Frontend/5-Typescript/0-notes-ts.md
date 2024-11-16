## TypeScript Basics

### What is TypeScript?

- **TypeScript** is a typed superset of JavaScript that compiles to plain JavaScript.
- It offers optional **static typing**, **interfaces**, and **type checking** at compile-time.
- TypeScript files have the `.ts` extension and require a compiler (e.g., `tsc`) to convert them to JavaScript (`.js` files).

### Key Benefits

- **Type Safety**: Catch type errors during development.
- **Better Code Quality**: IDEs can provide better auto-completion and error-checking.
- **Scalability**: Helps with larger projects where structure and strict types make maintenance easier.

---

## Setting Up TypeScript

1. Install TypeScript globally:
   ```bash
   npm install -g typescript
   ```
2. Initialize a TypeScript project:
   ```bash
   tsc --init
   ```
   This creates a `tsconfig.json` file, which you can use to configure TypeScript.

---

## Basic Types

### Type Annotations

In TypeScript, you specify the type of variables, parameters, and return values.

```typescript
let isDone: boolean = true;
let count: number = 42;
let name: string = "TypeScript";
```

### Types in TypeScript

1. **Primitive Types**:
   - `string`, `number`, `boolean`, `void`, `null`, `undefined`
2. **Array**:
   - `number[]` or `Array<number>`
   ```typescript
   let numbers: number[] = [1, 2, 3];
   ```
3. **Tuple**:

   - Fixed-length array with defined types for each position.

   ```typescript
   let person: [string, number] = ["John", 25];
   ```

4. **Enum**:

   - Enumeration for constant values.

   ```typescript
   enum Direction {
     Up,
     Down,
     Left,
     Right,
   }
   let move: Direction = Direction.Up;
   ```

### Any, Unknown, and Never

- **`any`**: Can be assigned any type. Avoid overuse as it bypasses type checking.
  ```typescript
  let data: any = 5;
  data = "hello";
  ```
- **`unknown`**: Similar to `any`, but safer because it requires type checking before use.
  ```typescript
  let input: unknown;
  input = "some string";
  ```
- **`never`**: Represents values that never occur, often used in error handling.
  ```typescript
  function throwError(message: string): never {
    throw new Error(message);
  }
  ```

---

## Functions

### Function Types and Annotations

- Use **parameter types** and **return type** annotations.

```typescript
function add(a: number, b: number): number {
  return a + b;
}
```

- **Optional Parameters**: Use `?` to make parameters optional.

  ```typescript
  function greet(name: string, age?: number): string {
    return `Hello, ${name}`;
  }
  ```

- **Default Parameters**:
  ```typescript
  function multiply(a: number, b: number = 10): number {
    return a * b;
  }
  ```

### Arrow Functions

Arrow functions work similarly to JavaScript but with TypeScript type support.

```typescript
const divide = (a: number, b: number): number => a / b;
```

---

## Interfaces

### Defining Interfaces

Interfaces define the structure of an object.

```typescript
interface Person {
  name: string;
  age: number;
}

let user: Person = {
  name: "Alice",
  age: 25,
};
```

### Optional and Readonly Properties

- Use `?` for optional properties.
- Use `readonly` for properties that shouldn’t change.

```typescript
interface Car {
  make: string;
  model: string;
  readonly year: number;
  owner?: string;
}
```

---

## Classes

### Creating Classes

TypeScript classes are similar to ES6 classes but with added type safety.

```typescript
class Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  speak(): void {
    console.log(`${this.name} makes a sound.`);
  }
}
```

### Access Modifiers

- **public**: Default, accessible from anywhere.
- **private**: Only accessible within the class.
- **protected**: Accessible within the class and subclasses.

```typescript
class Dog extends Animal {
  private breed: string;

  constructor(name: string, breed: string) {
    super(name);
    this.breed = breed;
  }

  displayBreed(): void {
    console.log(`${this.name} is a ${this.breed}`);
  }
}
```

### Getters and Setters

Define getter and setter methods for better encapsulation.

```typescript
class Circle {
  private _radius: number = 0;

  get radius(): number {
    return this._radius;
  }

  set radius(value: number) {
    if (value > 0) {
      this._radius = value;
    }
  }
}
```

---

## Advanced Types

### Union and Intersection Types

- **Union Types**: Allows a value to be one of multiple types.

  ```typescript
  let value: string | number = "hello";
  value = 42;
  ```

- **Intersection Types**: Combines multiple types.

  ```typescript
  interface Drivable {
    drive(): void;
  }

  interface Flyable {
    fly(): void;
  }

  type FlyingCar = Drivable & Flyable;
  ```

### Type Aliases

Define custom types using `type`.

```typescript
type ID = string | number;
let userId: ID = "123";
```

---

## Generics

Generics provide a way to make classes, functions, and interfaces work with different types while maintaining type safety.

### Generic Function

```typescript
function identity<T>(value: T): T {
  return value;
}
let result = identity<number>(42);
```

### Generic Classes

```typescript
class Box<T> {
  content: T;

  constructor(content: T) {
    this.content = content;
  }
}
let stringBox = new Box<string>("Hello");
```

---

## Modules

### Export and Import

Modules help organize code and can be imported/exported between files.

- **Exporting**: Use `export` to make variables, functions, or classes accessible outside.

  ```typescript
  export const greeting = "Hello, World!";
  export function greet(name: string): string {
    return `${greeting} ${name}`;
  }
  ```

- **Importing**:
  ```typescript
  import { greeting, greet } from "./path/to/module";
  ```

---

## Conclusion

TypeScript is a powerful language that helps to ensure code quality and robustness, especially in large applications. Practice each of these concepts individually, build small projects, and use TypeScript’s compiler options to explore its additional features and strictness levels.

---

Feel free to ask questions or request clarifications on any part of this outline!
