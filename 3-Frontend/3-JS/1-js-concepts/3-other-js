### about controller

### event bubbling and event

To prevent **duplicate requests** when a user clicks a button multiple times, you can use **`AbortController`** to cancel any previous ongoing request before making a new one. This ensures that only the **latest** request is processed, avoiding duplicate or unnecessary requests.

### Example: Using `AbortController` to Prevent Duplicate Requests

In this example, we'll have a button that the user can click to initiate a fetch request. If the user clicks the button multiple times quickly, the previous fetch requests will be canceled, and only the latest one will proceed.

```javascript
// Declare a variable to hold the current AbortController
let controller;

const fetchUserData = async () => {
  // If there's an existing controller, abort the previous request
  if (controller) {
    controller.abort();
  }

  // Create a new AbortController for the current request
  controller = new AbortController();
  const signal = controller.signal;

  try {
    console.log("Fetching user data...");
    const response = await fetch("https://jsonplaceholder.typicode.com/users", {
      signal,
    });
    const data = await response.json();
    console.log("User data:", data);
  } catch (error) {
    if (error.name === "AbortError") {
      console.log("Previous request aborted");
    } else {
      console.error("Fetch error:", error);
    }
  }
};

// Add event listener to the button to start fetching data
document.querySelector("#fetchButton").addEventListener("click", fetchUserData);
```

### Explanation:

1. **Variable to Store Controller**:

   - `let controller;` keeps track of the current `AbortController`.

2. **Abort Previous Request**:
   - Before making a new request, we check if there's an existing `controller`. If it exists, we call `controller.abort()` to cancel any ongoing request.
3. **Create New `AbortController`**:
   - A new `AbortController` is created for the latest request, ensuring that only the most recent one is in progress.
4. **Pass the `signal` to `fetch`**:

   - The `signal` from the new controller is passed to the `fetch` call.

5. **Handle the Abort**:
   - If the previous request is aborted, it will be caught in the `catch` block, logging `'Previous request aborted'`.

### Example HTML for the Button:

Include a button in your HTML that will trigger the `fetchUserData` function when clicked:

```html
<button id="fetchButton">Fetch User Data</button>
```

### How It Works:

- When the user clicks the "Fetch User Data" button, `fetchUserData` is triggered.
- If the user clicks the button again **before the current request completes**, the existing request is aborted and a new one is initiated.
- This way, only the **latest** request is processed, and all previous requests are canceled.

### Output Example:

If the user clicks the button multiple times quickly, the console might log something like:

```
Fetching user data...
Previous request aborted
Fetching user data...
Previous request aborted
Fetching user data...
User data: [ ... ]
```

This output shows that the previous requests were aborted, ensuring only the final request fetched the user data successfully.

This approach is especially useful for situations like **search input fields**, **autocomplete suggestions**, or **any action** where multiple quick user interactions might otherwise overwhelm the server with duplicate requests.

In JavaScript, **event bubbling** and **event capturing** (also known as **event trickling**) are two phases of the **event propagation** process when an event occurs on a nested element. Understanding these phases is crucial when you work with **event listeners** and need precise control over how events are handled in nested elements.

### Event Propagation Phases:

1. **Event Capturing** (Trickling):
   - The event starts from the **outermost** element (like `window`) and propagates **down** to the target element.
   - It captures the event as it moves down through the hierarchy.
2. **Event Bubbling**:
   - After the event reaches the **target element**, it then **bubbles up** from the target element back up to the **outer elements**.
   - Event listeners during this phase will catch the event as it moves back up through the DOM tree.

### Example: Event Bubbling

In **event bubbling**, the event moves **upwards** from the target element to its parents. Here's an example to illustrate it:

```html
<div id="parent" style="padding: 20px; background-color: lightblue;">
  Parent
  <div id="child" style="padding: 20px; background-color: lightcoral;">
    Child
    <button id="button" style="padding: 10px;">Click Me</button>
  </div>
</div>

<script>
  // Adding event listeners
  document.getElementById("parent").addEventListener("click", () => {
    console.log("Parent element clicked");
  });

  document.getElementById("child").addEventListener("click", () => {
    console.log("Child element clicked");
  });

  document.getElementById("button").addEventListener("click", () => {
    console.log("Button clicked");
  });
</script>
```

### Output:

If you click on the button, the console logs:

```
Button clicked
Child element clicked
Parent element clicked
```

### Explanation:

- In the example above, when you click the `button`:
  - The event first triggers the **button's** listener.
  - It then **bubbles up** to the **child div's** listener.
  - Finally, it **bubbles up** to the **parent div's** listener.
- The **event bubbles** through the DOM tree from the innermost element to the outer elements.

### Example: Event Capturing

To change the default behavior and use **event capturing** instead of **bubbling**, you can pass `{ capture: true }` as the third argument to `addEventListener()`:

```html
<div id="parent" style="padding: 20px; background-color: lightblue;">
  Parent
  <div id="child" style="padding: 20px; background-color: lightcoral;">
    Child
    <button id="button" style="padding: 10px;">Click Me</button>
  </div>
</div>

<script>
  // Adding event listeners with capturing phase
  document.getElementById("parent").addEventListener(
    "click",
    () => {
      console.log("Parent element clicked");
    },
    true
  ); // true enables capturing

  document.getElementById("child").addEventListener(
    "click",
    () => {
      console.log("Child element clicked");
    },
    true
  );

  document.getElementById("button").addEventListener(
    "click",
    () => {
      console.log("Button clicked");
    },
    true
  );
</script>
```

### Output:

If you click on the button, the console logs:

```
Parent element clicked
Child element clicked
Button clicked
```

### Explanation:

- With `{ capture: true }`, the event is handled during the **capturing phase**.
- The event starts at the **parent** (outermost) element and **captures down** to the **target** element.
- So, when you click on the button:
  - The **parent's** listener is triggered first.
  - Then the **child's** listener.
  - Finally, the **button's** listener.

### Example: Combining Bubbling and Capturing

You can mix both capturing and bubbling event listeners for different elements:

```html
<div id="parent" style="padding: 20px; background-color: lightblue;">
  Parent
  <div id="child" style="padding: 20px; background-color: lightcoral;">
    Child
    <button id="button" style="padding: 10px;">Click Me</button>
  </div>
</div>

<script>
  // Capture phase listener for parent
  document.getElementById("parent").addEventListener(
    "click",
    () => {
      console.log("Parent (capture phase)");
    },
    true
  );

  // Bubbling phase listener for child
  document.getElementById("child").addEventListener("click", () => {
    console.log("Child (bubble phase)");
  });

  // Bubbling phase listener for button
  document.getElementById("button").addEventListener("click", () => {
    console.log("Button (bubble phase)");
  });
</script>
```

### Output:

If you click the button, the console logs:

```
Parent (capture phase)
Button (bubble phase)
Child (bubble phase)
```

### Explanation:

- Here, the **parent** listens during the **capture phase**, so it logs first.
- After reaching the `button` target element, the event switches to the **bubbling phase**.
- The **button** listener executes next, followed by the **child** listener during the **bubbling phase**.

### Summary:

| **Property**         | **Event Bubbling**                                    | **Event Capturing**                                     |
| -------------------- | ----------------------------------------------------- | ------------------------------------------------------- |
| **Propagation**      | From **innermost** to **outermost** (up the DOM tree) | From **outermost** to **innermost** (down the DOM tree) |
| **Default Behavior** | Enabled by default in event listeners                 | Use `{ capture: true }` to enable                       |
| **Example Usage**    | Handle events after they reach their target           | Handle events before they reach their target            |

This understanding of event bubbling and capturing is especially useful when you want to manage **complex UI behaviors** in web applications, such as implementing **delegated event handling** or **intercepting events** before they reach their intended target.
