```javascript
import React from "react";

export default class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 5 };
    this.handleDown = this.handleDown.bind(this);
    this.handleUp = this.handleUp.bind(this);
  }
  handleDown() {
    this.setState((currstate) => {
      return { count: currstate.count - 1 };
    });
  }
  handleUp() {
    this.setState((currstate) => {
      return { count: currstate.count + 1 };
    });
  }
  render() {
    return (
      <div>
        <button onClick={this.handleDown}>-</button>
        <h2>{this.state.count}</h2>
        <button onClick={this.handleUp}>+</button>
      </div>
    );
  }
}
```

In React class components, lifecycle methods are used to hook into the different phases of a component's existence. These phases include:

1. **Mounting** (when a component is added to the DOM),
2. **Updating** (when a component’s state or props change), and
3. **Unmounting** (when a component is removed from the DOM).

Here’s a breakdown of the major lifecycle methods in each phase:

---

### 1. **Mounting Phase**

- **constructor(props)**: Initializes the component’s state and binds event handlers. This method is called before the component is mounted.

- **static getDerivedStateFromProps(props, state)**: Syncs state with props. Called just before `render`, but does not have access to `this`. It’s typically used to update state based on props changes.

- **render()**: Required method to return the component's JSX. It’s a pure function and should not modify state or interact with the DOM.

- **componentDidMount()**: Called immediately after the component is inserted into the DOM. It’s a good place to perform side effects, like API calls or setting up subscriptions.

---

### 2. **Updating Phase**

- **static getDerivedStateFromProps(props, state)**: Also called during updates to keep state in sync with props changes.

- **shouldComponentUpdate(nextProps, nextState)**: Determines if the component should re-render when props or state change. Returning `false` prevents re-rendering.

- **render()**: Called after the component's state or props change. Re-renders the component if there are updates.

- **getSnapshotBeforeUpdate(prevProps, prevState)**: Captures a snapshot of the DOM just before updates are applied. The return value is passed to `componentDidUpdate`.

- **componentDidUpdate(prevProps, prevState, snapshot)**: Runs after updates are flushed to the DOM. Useful for working with the DOM based on previous state or props.

---

### 3. **Unmounting Phase**

- **componentWillUnmount()**: Called just before a component is removed from the DOM. Used to clean up resources like event listeners or cancel API requests.

---

### Example with All Lifecycle Methods

Here’s a React class component that includes each of the main lifecycle methods:

```javascript
import React from "react";

class LifecycleDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    console.log("Constructor: Initializing state and binding methods.");
  }

  static getDerivedStateFromProps(props, state) {
    console.log(
      "getDerivedStateFromProps: Syncing state with props if needed."
    );
    return null; // return new state if required based on props
  }

  componentDidMount() {
    console.log(
      "componentDidMount: Component mounted. Performing side effects."
    );
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate: Checking if re-render is needed.");
    return true; // or false to prevent rendering
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log(
      "getSnapshotBeforeUpdate: Capturing DOM snapshot before update."
    );
    return null; // can return data to use in componentDidUpdate
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(
      "componentDidUpdate: Component updated. Handling post-update logic."
    );
  }

  componentWillUnmount() {
    console.log(
      "componentWillUnmount: Cleaning up before component is removed."
    );
  }

  handleClick = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  render() {
    console.log("Render: Rendering component to the DOM.");
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.handleClick}>Increment</button>
      </div>
    );
  }
}

export default LifecycleDemo;
```

### Lifecycle Method Flow

When this component is mounted and updated:

1. **Mounting** triggers `constructor`, `getDerivedStateFromProps`, `render`, and `componentDidMount`.
2. **Updating** triggers `getDerivedStateFromProps`, `shouldComponentUpdate`, `render`, `getSnapshotBeforeUpdate`, and `componentDidUpdate`.
3. **Unmounting** triggers `componentWillUnmount`.

This flow highlights when each method is called, so you can decide where to place data fetching, cleanup, or DOM-related operations.
