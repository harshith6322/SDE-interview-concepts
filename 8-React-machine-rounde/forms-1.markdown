```javascript
import { useState } from "react";

function App() {
  const [form, setform] = useState({
    firstname: "",
    lastname: "",
    number: "",
    password: "",
  });

  function handleform(e) {
    e.preventDefault();
  }
  function handlechange(e) {
    setform({
      ...form,
      [e.target.name]: [e.target.value],
    });
  }
  return (
    <>
      {JSON.stringify(form)}
      <div>
        <form onSubmit={handleform}>
          <label htmlFor="firstname">firstname</label>
          <input
            type="text"
            placeholder="firstname"
            name="firstname"
            onChange={handlechange}
          />
          <label htmlFor="lastname">lastname</label>
          <input
            type="text"
            placeholder="lastname"
            name="lastname"
            onChange={handlechange}
          />
          <label htmlFor="phone number">phone number</label>
          <input
            type="number"
            placeholder="number"
            name="number"
            onChange={handlechange}
          />
          <label htmlFor="password">password</label>
          <input
            type="password"
            placeholder="password"
            name="password"
            onChange={handlechange}
          />
          <button onSubmit={handleform}>submit</button>
        </form>
      </div>
    </>
  );
}
App();

import { useState } from "react";

function App2() {
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastaname] = useState("");
  const [number, setnumber] = useState();
  const [password, setpassword] = useState("");

  function handleform(e) {
    e.preventDefault();
    console.log(firstname, lastname, number, password);
  }
  return (
    <>
      <div>
        <form onSubmit={handleform}>
          <label htmlFor="firstname">firstname</label>
          <input
            type="text"
            placeholder="firstname"
            name="firstname"
            value={firstname}
            onChange={(e) => setfirstname(e.target.value)}
          />
          <label htmlFor="lastname">lastname</label>
          <input
            type="text"
            placeholder="lastname"
            name="lastname"
            value={lastname}
            onChange={(e) => setlastaname(e.target.value)}
          />
          <label htmlFor="phone number">phone number</label>
          <input
            type="number"
            placeholder="number"
            name="phone number"
            value={number}
            onChange={(e) => setnumber(e.target.value)}
          />
          <label htmlFor="password">password</label>
          <input
            type="password"
            placeholder="password"
            name="password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />
          <button onSubmit={handleform}>submit</button>
        </form>
      </div>
    </>
  );
}

export default App2;
```
