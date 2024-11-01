````markdown
### **_What is HTML?_**

- **HTML** stands for Hyper Text Markup Language.
- HTML is the standard markup language for creating Web pages.
- HTML describes the structure of a Web page.
- HTML elements tell the browser how to display the content.

- The `<!DOCTYPE html>` declaration defines that this document is an HTML5 document.
- The `<html>` element is the root element of an HTML page.
- The `<head>` element contains meta information about the HTML page.
- The `<title>` element specifies a title for the HTML page (which is shown in the browser's title bar or in the page's tab).
- The `<body>` element defines the document's body and is a container for all visible content, such as headings, paragraphs, images, hyperlinks, tables, lists, etc.
- The `<h1>` element defines a large heading.
- The `<p>` element defines a paragraph.

### **_What is an HTML Element?_**

An HTML element is defined by a start tag, some content, and an end tag:

```html
<tagname> Content goes here... </tagname>
```
````

The HTML element includes everything from the start tag to the end tag.

> **Note**: Some HTML elements have no content (like the `<br>` element). These elements are called **empty elements** and do not have an end tag.

### **_HTML Attributes_**

- All HTML elements can have **attributes**.
- Attributes provide additional information about elements.
- Attributes are always specified in the start tag.
- Attributes usually come in name/value pairs like: `name="value"`.

### **_Using CSS_**

CSS can be added to HTML documents in three ways:

1. **Inline** - by using the `style` attribute inside HTML elements.
2. **Internal** - by using a `<style>` element in the `<head>` section.
3. **External** - by using a `<link>` element to link to an external CSS file.

### **Class vs. ID in HTML**

#### **Class**

1. Classes are used to apply styling or behavior to multiple elements on a page.
2. Classes are defined with the `class` attribute and can be reused across different elements.
3. In CSS, classes are selected with a dot (`.`) followed by the class name (e.g., `.example`).

#### **ID**

1. IDs are unique to a single element on a page and should only be used once per page.
2. IDs are defined with the `id` attribute and typically serve unique purposes, like identifying specific components.
3. In CSS, IDs are selected with a hash (`#`) followed by the ID name (e.g., `#unique`).

---

### **_target Attribute_**

The `target` attribute specifies where to open the linked document. It can have one of the following values:

- `_self` - **Default**. Opens the document in the same window/tab as it was clicked.
- `_blank` - Opens the document in a **new window** or tab.
- `_parent` - Opens the document in the **parent frame**.
- `_top` - Opens the document in the **full body of the window**.

---

### **Basic HTML Questions**

1. **What is HTML?**

   - HTML stands for Hypertext Markup Language and is used to create the structure of web pages.

2. **What are the different types of HTML elements?**

   - HTML elements can be block-level (e.g., `<div>`, `<p>`, `<h1>`) or inline (e.g., `<span>`, `<a>`, `<img>`).

3. **What is the difference between HTML tags and elements?**

   - HTML tags are the syntax used to create elements, while elements are the structure that is created when a browser renders the HTML tags.

🟠In summary:
Tags are the markers used to create elements.
Elements are the combination of tags and the content they contain.

4. **What is the purpose of the `<!DOCTYPE html>` declaration?**

   - It informs the browser about the HTML version being used and ensures that the page is rendered correctly.

5. **Explain the difference between `<div>` and `<span>` elements.**
   - `<div>` is a block-level element used for structuring content, while `<span>` is an inline element used to style or group small pieces of content within a block.

🟠Key Differences:
Inline: No width, height, margin, or padding can be applied (except horizontal margin/padding).
Inline-block: Width, height, margin, and padding can be applied, while the element still flows inline with other elements.

### **Intermediate HTML Questions**

1. **What are semantic HTML elements? Give examples.**

   - Semantic HTML elements have meaningful names that convey the purpose of the element. Examples include `<header>`, `<footer>`, `<article>`, `<section>`, and `<nav>`.

2. **How do you create a hyperlink in HTML?**

   - You can create a hyperlink using the `<a>` tag, with the `href` attribute specifying the destination URL (e.g., `<a href="https://example.com">Link Text</a>`).

3. **What is the difference between `id` and `class` attributes in HTML?**

   - The `id` attribute is unique and used to identify a single element, while `class` can be applied to multiple elements for styling or JavaScript purposes.

4. **How do you embed an image in a web page?**

   - You use the `<img>` tag with the `src` attribute pointing to the image URL and the `alt` attribute providing alternative text (e.g., `<img src="image.jpg" alt="Description">`).

5. **What are data attributes in HTML? How are they used?**
   - Data attributes are custom attributes that start with `data-` and allow you to store extra information on HTML elements (e.g., `<div data-user-id="123">`). They are often used in JavaScript to store information related to the DOM elements.

### **Advanced HTML Questions**

1. **What are the differences between HTML4 and HTML5?**

   - HTML5 introduced new semantic elements, multimedia support (audio and video tags), form enhancements (e.g., `<input type="email">`), APIs (e.g., Web Storage, Canvas), and deprecations of some older elements.

2. **Explain the purpose of the `meta` tag in HTML.**

   - The `meta` tag provides metadata about the HTML document, such as character set, viewport settings for responsive design, and SEO-related information like keywords and descriptions.

3. **How do you make a web page mobile-friendly using HTML?**

   - Use the `<meta name="viewport" content="width=device-width, initial-scale=1.0">` tag to ensure the page scales correctly on mobile devices. Also, use responsive design principles, like flexible grids and media queries.

4. **How do you create a form in HTML? What elements are commonly used?**

   - A form is created using the `<form>` tag, and it commonly includes elements like `<input>`, `<textarea>`, `<select>`, `<button>`, and `<label>` to collect and submit user data.

5. **What is the purpose of the `canvas` element in HTML5?**
   - The `<canvas>` element provides a space in the document where you can draw graphics using JavaScript, such as shapes, charts, and animations.

These questions cover a range of topics, from basic HTML structure to more advanced features introduced in HTML5. Preparing answers for these will help you demonstrate your understanding of HTML during an SDE interview.
