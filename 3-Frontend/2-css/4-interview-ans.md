# CSS Interview Prep Notes

## Basic CSS Questions

1. **What is the CSS Box Model?**
   The CSS Box Model consists of four parts: content, padding, border, and margin. These parts affect the layout and spacing of an element.

2. **What is the difference between `class` and `id` selectors in CSS?**

   - `class`: Used to select multiple elements and has lower specificity.
   - `id`: Unique to a single element and has higher specificity.

3. **What is the difference between `inline`, `block`, and `inline-block` elements?**

   - `inline`: Does not break the line and only takes up as much width as necessary.
   - `block`: Takes up the entire width and starts on a new line.
   - `inline-block`: Behaves like inline elements but respects width and height properties.

4. **How does CSS specificity work?**
   Specificity determines which CSS rule is applied when multiple rules target the same element, with `id` selectors being the most specific, followed by `class`, and finally element selectors.

5. **What is the difference between `absolute`, `relative`, `fixed`, and `sticky` positioning?**

   - `absolute`: Positioned relative to the nearest positioned ancestor.
   - `relative`: Positioned relative to its normal position.
   - `fixed`: Stays fixed to the viewport.
   - `sticky`: Toggles between relative and fixed based on the scroll position.

6. **What is the `z-index` in CSS, and how does it work?**
   `z-index` controls the stacking order of positioned elements on the z-axis, affecting which element appears on top.

7. **What are pseudo-classes and pseudo-elements in CSS?**

   - **Pseudo-classes**: Target elements in specific states (e.g., `:hover`).
   - **Pseudo-elements**: Target parts of an element (e.g., `::before`, `::after`).

8. **What are media queries, and how are they used in responsive design?**
   Media queries apply styles based on screen size or device type. Example:
   ```css
   @media (max-width: 600px) {
     body {
       font-size: 14px;
     }
   }
   ```

````

9. **What are the differences between `em`, `rem`, `px`, `vw`, and `vh` units in CSS?**

   - `em`: Relative to the font-size of the parent.
   - `rem`: Relative to the font-size of the root element.
   - `px`: Absolute pixels.
   - `vw`: 1% of the viewport width.
   - `vh`: 1% of the viewport height.

10. **What is the `float` property in CSS, and how does `clear` work with it?**
    - `float`: Allows elements to wrap around other elements.
    - `clear`: Prevents elements from wrapping around floated elements.

---

## Intermediate CSS Questions

11. **What is Flexbox, and how does it help in layout design?**
    Flexbox provides a flexible layout that is easy to align and distribute space. Key properties include `justify-content`, `align-items`, and `flex-direction`.

12. **Explain CSS Grid and how it differs from Flexbox.**
    CSS Grid is a two-dimensional layout system, perfect for complex grid layouts, while Flexbox is one-dimensional (row or column).

13. **What is the difference between `max-width` and `min-width`?**

    - `max-width`: Sets the maximum width an element can have.
    - `min-width`: Sets the minimum width an element should have.

14. **What is `box-sizing: border-box`, and how does it differ from the default box model?**

    - `border-box`: Includes padding and border within the element's width and height, preventing overflow.

15. **How do you create a CSS transition or animation?**

    ```css
    .example {
      transition: background-color 0.5s ease;
    }
    @keyframes slide {
      from {
        left: 0;
      }
      to {
        left: 100px;
      }
    }
    ```

16. **How does `position: sticky` work, and how is it different from `position: fixed`?**

    - `sticky`: Behaves like `relative` until it hits a threshold, then becomes fixed within its parent.

17. **Explain how `visibility: hidden` and `display: none` differ.**

    - `visibility: hidden`: Element remains in the layout but is invisible.
    - `display: none`: Removes the element from the layout.

18. **What are CSS variables (custom properties), and how do you use them?**

    ```css
    :root {
      --primary-color: #333;
    }
    .example {
      color: var(--primary-color);
    }
    ```

19. **What are CSS preprocessors, and how do they enhance CSS development?**
    Preprocessors like Sass or LESS add features such as variables, nesting, and mixins, making CSS more modular.

20. **What is the difference between `hover` and `focus` states in CSS?**
    - `:hover`: Triggered on mouse hover.
    - `:focus`: Triggered when an element is in focus (e.g., when a form field is clicked).

---

## Advanced CSS Questions

21. **What are CSS selectors and combinators?**

    - Combinators: `descendant ( )`, `child (>)`, `adjacent sibling (+)`, and `general sibling (~)` selectors help target elements based on their relationship in the DOM.

22. **What is the `z-index` stacking context, and how can it affect element rendering?**
    Stacking context controls the rendering order of elements. New contexts are created by `position` values or `opacity`.

23. **How would you implement a responsive grid layout without CSS frameworks?**

    - Use CSS Grid or Flexbox with media queries to adjust layout for different screen sizes.

24. **What is the difference between `opacity` and `visibility` in CSS?**

    - `opacity`: Changes the transparency of an element.
    - `visibility`: Toggles whether an element is visible while retaining layout space.

25. **How do CSS transitions and animations affect performance, and how can you optimize them?**

    - Optimize by using `transform` and `opacity`, which bypass layout reflows and are handled by the GPU.

26. **What is a CSS reset or normalizer, and why is it important?**

    - Resets remove browser default styling for consistent cross-browser design.

27. **Explain the concept of the critical rendering path in CSS.**
    CSS affects how quickly a page can render. Minimize CSS to improve load times and consider inlining critical styles.

28. **How do you handle cross-browser compatibility in CSS?**
    Use vendor prefixes, check support with tools like `Can I use`, and test in multiple browsers.

29. **What is BEM (Block Element Modifier) methodology, and why is it used?**
    BEM structures CSS for readability and reusability. Example: `.block__element--modifier`.

30. **How can you improve CSS performance in large web applications?**
    - Minify CSS, use critical CSS inlining, reduce selectors, avoid `*` selectors, and optimize animations.

---


````
