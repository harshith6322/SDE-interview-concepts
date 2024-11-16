YAML (YAML Ain't Markup Language) syntax is straightforward but has specific rules to follow. Here’s a summary of YAML syntax basics:

### 1. **Key-Value Pairs**

YAML is essentially a key-value structure. The simplest form is a single key and its value:

```yaml
name: John Doe
age: 30
```

### 2. **Indentation and Nesting**

- **Indentation** is crucial in YAML and is typically done with **two spaces**. Indentation defines the nesting and hierarchy of data, so each nested level should be indented consistently.
- **Tabs** are not allowed in YAML.

Example with nested structures:

```yaml
person:
  name: John Doe
  age: 30
  address:
    street: 123 Main St
    city: Anytown
```

### 3. **Lists**

Lists (arrays) in YAML are created with dashes (`-`). Each item in the list should be at the same indentation level.

```yaml
fruits:
  - apple
  - banana
  - orange
```

### 4. **Comments**

Comments in YAML start with a `#` and can be added above or beside a key-value pair.

```yaml
# This is a comment
name: John Doe # Name of the person
```

### 5. **Multi-line Strings**

YAML has several ways to handle multi-line strings:

- **Block style with `|`**: Preserves line breaks.
- **Folded style with `>`**: Collapses newlines into spaces.

```yaml
description: |
  This is a multi-line description
  that preserves line breaks.

note: >
  This is a folded
  multi-line string that will
  collapse into a single line.
```

### 6. **Booleans and Nulls**

Boolean values are written as `true` or `false` (lowercase). Null values are represented by `null`, `~`, or just leaving the value empty.

```yaml
is_active: true
has_children: false
parent: null
```

### 7. **YAML File Example**

Here’s a complete YAML example demonstrating different features:

```yaml
# Basic information
name: John Doe
age: 30
is_active: true

# Contact info with nested structure
contact:
  email: john.doe@example.com
  phone: 123-456-7890

# List of hobbies
hobbies:
  - hiking
  - reading
  - cooking

# Multi-line text
bio: |
  John is a software developer with
  a passion for open-source projects
  and technical writing.

# Null value example
spouse: null
```

Following these guidelines will help you create valid and readable YAML files!
