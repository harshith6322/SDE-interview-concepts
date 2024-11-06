In JavaScript, **Promises** are used for handling **asynchronous operations**. They are a modern way of managing async tasks like fetching data from an API, reading files, or executing any task that takes time and shouldn't block the execution of the rest of the code. They allow you to work with asynchronous operations in a more structured and readable way compared to **callbacks**.

### 1. What is a Promise?

A **Promise** is an object that represents the eventual **completion (or failure)** of an asynchronous operation and its resulting value. It can be in one of the following states:

- **Pending**: Initial state, neither fulfilled nor rejected.
- **Fulfilled**: The operation completed successfully.
- **Rejected**: The operation failed.

### 2. Creating a Promise

To create a Promise, you use the `new Promise` constructor. The constructor takes a **function** (known as the **executor**) that has two parameters: `resolve` and `reject`.

```javascript
const myPromise = new Promise((resolve, reject) => {
  // Simulating an asynchronous operation using setTimeout
  setTimeout(() => {
    const success = true; // Change to false to simulate a failure
    if (success) {
      resolve("Operation was successful!"); // Fulfilled state
    } else {
      reject("Operation failed!"); // Rejected state
    }
  }, 2000); // Simulates a 2-second delay
});
```

In this example:

- The `resolve` function is called when the async operation is successful, moving the Promise to the **fulfilled** state.
- The `reject` function is called when the async operation fails, moving the Promise to the **rejected** state.

### 3. Using a Promise

Once you have a Promise, you can handle its outcome using the **`.then()`** and **`.catch()`** methods:

- **`.then()`** is used to handle the result when the Promise is **fulfilled**.
- **`.catch()`** is used to handle the error when the Promise is **rejected**.

```javascript
myPromise
  .then((result) => {
    console.log(result); // Logs: "Operation was successful!" if resolved
  })
  .catch((error) => {
    console.error(error); // Logs: "Operation failed!" if rejected
  })
  .finally(() => {
    console.log("Promise is settled (fulfilled or rejected)."); // Executes in either case
  });
```

### Output:

After 2 seconds, depending on the `success` variable:

- If `success` is `true`, it logs:
  ```
  Operation was successful!
  Promise is settled (fulfilled or rejected).
  ```
- If `success` is `false`, it logs:
  ```
  Operation failed!
  Promise is settled (fulfilled or rejected).
  ```

### 4. Where to Use Promises?

**Promises** are used whenever you need to perform an asynchronous task, such as:

- **Fetching data from APIs**:

  ```javascript
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error("Error:", error));
  ```

  In this example, `fetch` returns a Promise that resolves with the response data if successful or rejects if there is an error.

- **Reading files** in Node.js:

  ```javascript
  const fs = require("fs").promises;

  fs.readFile("example.txt", "utf-8")
    .then((data) => {
      console.log("File content:", data);
    })
    .catch((error) => {
      console.error("Error reading file:", error);
    });
  ```

- **Database queries**:
  In database libraries like MongoDB, queries often return Promises, allowing you to handle the result once the query completes.

### 5. Example: Chaining Promises

You can **chain multiple `.then()` calls** to perform a series of async operations in sequence:

```javascript
const fetchData = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Data fetched");
  }, 1000);
});

fetchData
  .then((result) => {
    console.log(result); // Logs: "Data fetched"
    return new Promise((resolve) => {
      setTimeout(() => resolve("Processed data"), 1000);
    });
  })
  .then((processedData) => {
    console.log(processedData); // Logs: "Processed data"
  })
  .catch((error) => {
    console.error("Error:", error);
  });
```

### 6. Example: Using `Promise.all`

If you have multiple Promises and want to execute them in **parallel**, you can use **`Promise.all()`**:

```javascript
const promise1 = Promise.resolve("First promise resolved");
const promise2 = new Promise((resolve) =>
  setTimeout(resolve, 2000, "Second promise resolved")
);
const promise3 = new Promise((resolve) =>
  setTimeout(resolve, 1000, "Third promise resolved")
);

Promise.all([promise1, promise2, promise3])
  .then((results) => {
    console.log(results);
    // Logs after 2 seconds: ["First promise resolved", "Second promise resolved", "Third promise resolved"]
  })
  .catch((error) => {
    console.error("One of the promises failed:", error);
  });
```

**When to use `Promise.all()`?**

- When you need **all** Promises to complete before proceeding (e.g., fetching data from multiple sources).
- It will **reject** if any of the Promises fail.

### 7. Example: Using `Promise.race`

`Promise.race()` returns a Promise that resolves or rejects as soon as **the first** Promise settles (regardless of whether it resolves or rejects):

```javascript
const slowPromise = new Promise((resolve) =>
  setTimeout(resolve, 3000, "Slow promise")
);
const fastPromise = new Promise((resolve) =>
  setTimeout(resolve, 1000, "Fast promise")
);

Promise.race([slowPromise, fastPromise])
  .then((result) => {
    console.log(result); // Logs: "Fast promise" after 1 second
  })
  .catch((error) => {
    console.error("Error:", error);
  });
```

**When to use `Promise.race()`?**

- When you only care about the **first result** (e.g., first response from multiple servers).

### Summary:

- **Creating a Promise**: `new Promise((resolve, reject) => { ... })`
- **Handling a Promise**: `.then()`, `.catch()`, `.finally()`
- **Use Promises** for:
  - Network requests (`fetch`)
  - Reading files in Node.js
  - Database queries
  - Chaining multiple asynchronous operations
  - Handling multiple async tasks with `Promise.all` or `Promise.race`

**Promises** make asynchronous code more readable and manageable, especially compared to the old way of using **callback functions**, and they help to avoid **callback hell**.

Correct! Both the **rest** and **spread** operators in JavaScript work in ways that do not modify the original array or object. Instead, they create new arrays or objects that can then be modified separately, preserving the immutability of the original data.

### Spread Operator (`...`)

The spread operator is used to unpack elements of an array or properties of an object into a new array or object. It doesn’t modify the original array or object; instead, it creates a shallow copy.

#### Example: Spread with Arrays

```javascript
const originalArray = [1, 2, 3];
const newArray = [...originalArray, 4, 5];

console.log(originalArray); // Output: [1, 2, 3] (original array remains unchanged)
console.log(newArray); // Output: [1, 2, 3, 4, 5] (new array with additional elements)
```

#### Example: Spread with Objects

```javascript
const originalObject = { a: 1, b: 2 };
const newObject = { ...originalObject, c: 3 };

console.log(originalObject); // Output: { a: 1, b: 2 } (original object remains unchanged)
console.log(newObject); // Output: { a: 1, b: 2, c: 3 } (new object with additional property)
```

In both cases, `originalArray` and `originalObject` are left unchanged, and any modifications are applied to `newArray` and `newObject` only.

### Rest Parameter (`...`)

The **rest** parameter allows us to collect multiple elements into an array or remaining properties into an object. Using rest also does not modify the original data; it simply gathers values into a new array or object.

#### Example: Rest with Arrays

```javascript
function collectArgs(...args) {
  console.log(args); // Output: [1, 2, 3, 4]
}

collectArgs(1, 2, 3, 4); // Original arguments are gathered into a new array `args`
```

#### Example: Rest with Object Destructuring

```javascript
const person = { name: "Alice", age: 25, city: "Paris" };
const { name, ...details } = person;

console.log(name); // Output: Alice
console.log(details); // Output: { age: 25, city: "Paris" }
console.log(person); // Output: { name: "Alice", age: 25, city: "Paris" } (original object remains unchanged)
```

### Key Points

- **Spread** creates shallow copies and does not alter the original array or object.
- **Rest** gathers values into a new array or object without changing the original data.
- Both are useful in creating **immutable** patterns, where the original data remains unchanged.

No, destructuring itself does not modify the original array or object. Instead, it extracts values from arrays or properties from objects and assigns them to new variables. The original array or object remains unchanged during the process of destructuring.

### Destructuring with Arrays

Destructuring an array simply assigns values from the original array to new variables, without modifying the original array.

```javascript
const originalArray = [1, 2, 3];
const [first, second] = originalArray;

console.log(first); // Output: 1
console.log(second); // Output: 2
console.log(originalArray); // Output: [1, 2, 3] (original array remains unchanged)
```

Here, `first` and `second` get the values `1` and `2` from `originalArray`, but `originalArray` itself is not altered.

### Destructuring with Objects

Similarly, destructuring an object creates new variables for the extracted properties, without modifying the original object.

```javascript
const originalObject = { name: "Alice", age: 25 };
const { name, age } = originalObject;

console.log(name); // Output: Alice
console.log(age); // Output: 25
console.log(originalObject); // Output: { name: "Alice", age: 25 } (original object remains unchanged)
```

### Can You Modify the Original Array/Object Using Destructured Variables?

If you assign destructured variables or properties to new variables, those variables act independently of the original array or object. However, if the destructured variable holds a **reference** to a mutable object (like an array or nested object within the original object), modifying this reference will affect the original data.

#### Example: Modifying a Nested Object

```javascript
const originalObject = { name: "Alice", details: { age: 25 } };
const { details } = originalObject;

// Modifying the nested object through the destructured variable
details.age = 30;

console.log(originalObject.details.age); // Output: 30 (original nested object is affected)
```

In this case, `details` is a reference to the nested object inside `originalObject`, so modifying `details` affects `originalObject`.

### Summary

- **Destructuring alone** does not modify the original array or object.
- **Directly modifying destructured variables** does not affect the original array or object.
- **Modifying a reference to a nested object or array** within the destructured variable will affect the original object, as both references point to the same underlying data.

Here's a neatly formatted markdown note comparing **Map** and **Set** in JavaScript:

---

# JavaScript Collections: Map vs Set

## Map

- **Definition**: A collection of key-value pairs.
- **Structure**: Two-dimensional (key-value pairs).
- **Example**:

  ```javascript
  let data = new Map();
  data.set("name", "saikrishna");
  data.set("id", "1");

  for (let item of data) {
    console.log(item);
  }
  // Output:
  // ["name", "saikrishna"]
  // ["id", "1"]
  ```

### Map Methods

| Method                | Description                                                                                       |
| --------------------- | ------------------------------------------------------------------------------------------------- |
| `new Map([iterable])` | Creates a new map, optionally initialized with an iterable (e.g., array of `[key, value]` pairs). |
| `map.set(key, value)` | Stores the value by the key, returns the map itself.                                              |
| `map.get(key)`        | Returns the value associated with the key, or `undefined` if the key does not exist.              |
| `map.has(key)`        | Returns `true` if the key exists, otherwise `false`.                                              |
| `map.delete(key)`     | Removes the element by the key, returns `true` if the key existed, otherwise `false`.             |
| `map.clear()`         | Removes all elements from the map.                                                                |
| `map.size`            | Returns the count of key-value pairs in the map.                                                  |

---

## Set

- **Definition**: A collection of unique values (no duplicates).
- **Structure**: One-dimensional (values only).
- **Example**:

  ```javascript
  let data = new Set();
  data.add(1);
  data.add("saikrishna");

  for (let item of data) {
    console.log(item);
  }
  // Output:
  // 1
  // saikrishna
  ```

### Set Methods

| Method                | Description                                                                                |
| --------------------- | ------------------------------------------------------------------------------------------ |
| `new Set([iterable])` | Creates a new set, optionally initialized with values from an iterable (usually an array). |
| `set.add(value)`      | Adds a value to the set, returns the set itself.                                           |
| `set.delete(value)`   | Removes the value from the set, returns `true` if the value existed, otherwise `false`.    |
| `set.has(value)`      | Returns `true` if the value exists in the set, otherwise `false`.                          |
| `set.clear()`         | Removes all values from the set.                                                           |
| `set.size`            | Returns the count of values in the set.                                                    |

---

## Key Differences

- **Map** is a collection of **key-value pairs**, while **Set** is a collection of **unique values**.
- **Map** is **two-dimensional** (keys and values), whereas **Set** is **one-dimensional** (values only).
- Both `Map` and `Set` preserve the insertion order of elements.
