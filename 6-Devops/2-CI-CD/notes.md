### **1. What is a GitHub Actions Workflow?**

A GitHub Actions **workflow** is a set of instructions you define to automatically perform tasks like testing code, building applications, or deploying to servers. Each workflow is defined in a **YAML file** inside the `.github/workflows` folder of your repository.

### **2. Basic Structure of a Workflow**

Here’s a basic example, and below we’ll explain each part:

```yaml
name: CI Workflow

on:
  push:
    branches:
      - main

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Set up Node.js
        uses: actions/setup-node@v3
        with:
          node-version: "16"
      - name: Install dependencies
        run: npm install
      - name: Run tests
        run: npm test
```

Let’s go over each piece.

---

### **3. Workflow Parts Explained**

#### a. **name**: Naming the Workflow

- This is the name you give to the workflow. It’s for display in the GitHub Actions dashboard.

  ```yaml
  name: CI Workflow
  ```

#### b. **on**: When to Run the Workflow

- The `on` keyword specifies when this workflow should run.
- In this example, we set it to run on every `push` to the `main` branch.

  ```yaml
  on:
    push:
      branches:
        - main

        on:
          pull_request:
            branches:
             - master
  ```

````

#### c. **jobs**: What Tasks to Run

- A workflow is made up of one or more **jobs**.
- Each job is a series of **steps** that run in a specified environment.

#### d. **runs-on**: The Environment for Jobs

- This tells GitHub Actions which system to use to run the job (like Ubuntu or Windows).
- Here, `ubuntu-latest` means it’ll run on the latest version of Ubuntu.

```yaml
  runs-on: ubuntu-latest
````

---

### **4. Understanding Steps in a Job**

Steps are the individual tasks in a job. Each step can run commands or use **actions** (predefined tasks). Here’s a breakdown of the steps in our example:

#### Step 1: **Check Out Code**

This action fetches the code from your repository, so it’s available to the other steps.

```yaml
- uses: actions/checkout@v3
```

#### Step 2: **Set Up Node.js**

This sets up Node.js (a JavaScript environment). You specify the version you want to use, like `16` here.

```yaml
- name: Set up Node.js
  uses: actions/setup-node@v3
  with:
    node-version: "16"
```

#### Step 3: **Install Dependencies**

This command installs your project’s dependencies (like libraries or packages) by running `npm install`.

```yaml
- name: Install dependencies
  run: npm install
```

#### Step 4: **Run Tests**

Here, `npm test` runs any tests you’ve written to ensure your code works as expected.

```yaml
- name: Run tests
  run: npm test
```

---

### **5. Adding More Triggers and Jobs**

You can run workflows on other triggers, like `pull_request`, or add more jobs for tasks like **deploying code**.

#### Example: Adding `pull_request` Trigger

To run the workflow when a pull request is opened to the `main` branch, add this to the `on` section:

```yaml
on:
  push:
    branches:
      - main
  pull_request:
    branches:
      - main
```

---

### **6. Deployment Example: Deploy to GitHub Pages**

Here’s a simple workflow to **deploy a website** to GitHub Pages:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Set up Node.js
        uses: actions/setup-node@v3
        with:
          node-version: "16"
      - run: npm install
      - run: npm run build
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./build
```

- **Explanation**: This workflow will build your site and publish it to GitHub Pages each time you push to `main`.

---

### **7. Summary of Important Parts**

- **`on`**: Defines when the workflow will start.
- **`jobs`**: Contains the tasks to run.
- **`runs-on`**: Sets the environment.
- **Steps**: Define each action or command:
  - **`uses`**: Runs a pre-defined GitHub Action.
  - **`run`**: Runs a command in the specified environment.

---

### **Final Tips**

1. **Use Actions Library**: GitHub’s actions library has many pre-built actions, like `checkout` or `setup-node`.
2. **Secrets for Security**: Store sensitive data (like tokens) in GitHub Secrets for security.
3. **Read Workflow Logs**: Logs can help you troubleshoot if something fails.

---

2. Example: Triggering on Push and Pull Requests
   To trigger the workflow on both push and pull_request events for the main branch:

```yaml
Copy code
on:
 push:
  branches:
  - main
 pull_request:
  branches:
  - main
This runs the workflow for both code pushes to main and any pull requests targeting main.
```
