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

---

### `async` and `await`

- **`async` function**: Declares a function that will always return a promise.

  - If the function returns a value, JavaScript wraps it in a resolved promise.
  - If it throws an error, JavaScript wraps it in a rejected promise.

  ```javascript
  async function fetchData() {
    return "Hello, world!";
  }

  fetchData().then(console.log); // Output: "Hello, world!"
  ```

- **`await` keyword**: Pauses execution in an `async` function until a promise is resolved or rejected.

  - Only works inside `async` functions.
  - It “waits” for the promise to settle, then returns the result if resolved or throws the error if rejected.

  ```javascript
  async function getUser() {
    const user = await fetchUserFromAPI(); // waits for fetchUserFromAPI() to complete
    console.log(user);
  }
  ```

### Key Points

- **Error handling**: Use `try...catch` for errors in `async` functions.
- **Readability**: `async` and `await` make code with asynchronous actions (like API calls) look and behave more like synchronous code, making it easier to read and maintain.

### Example

```javascript
async function fetchUserData() {
  try {
    const response = await fetch("https://api.example.com/user");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
```

### Callback Functions in JavaScript

A **callback function** is a function passed as an argument to another function. It is then **called back** (executed) inside that function to complete a task or produce a result. Callbacks are commonly used for asynchronous operations, like API requests, timers, or event listeners.

### Basic Example

Here’s a simple example where a callback is used to display a message after a delay:

```javascript
function greet(name, callback) {
  console.log(`Hello, ${name}!`);
  callback();
}

function logDone() {
  console.log("Greeting has been logged.");
}

greet("Alice", logDone); // Output: "Hello, Alice!" followed by "Greeting has been logged."
```

### Asynchronous Example

Callbacks are often used to handle asynchronous tasks, like fetching data from an API:

```javascript
function fetchData(callback) {
  setTimeout(() => {
    console.log("Data fetched!");
    callback("Fetched data");
  }, 1000);
}

function handleData(data) {
  console.log("Processing:", data);
}

fetchData(handleData); // Output: "Data fetched!" then "Processing: Fetched data" after 1 second
```

### Key Points

- **Asynchronous Control**: Callbacks help manage asynchronous code by specifying what to do once an operation completes.
- **Callback Hell**: Nesting many callbacks can lead to difficult-to-read code, known as "callback hell" (or "pyramid of doom"). This is partly why promises and `async`/`await` were introduced.

### Usage

Callbacks are widely used in:

- **Event handling**: `button.addEventListener('click', callback)`.
- **APIs**: Passing a callback to handle the result of an API request.
- **Timers**: `setTimeout(callback, delay)` or `setInterval(callback, interval)`.
