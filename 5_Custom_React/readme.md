# Custom React

These notes explain **how React works internally**, not how to *use* React.
The goal is to understand **why React exists and how it renders UI efficiently**.
Custom React means **building a simplified version of React’s rendering logic** using plain JavaScript.
Instead of JSX, we manually create a **React-like object** and convert it into a DOM element.

---

## 1️⃣ Why Custom React Exists (Core Idea)

Browsers understand only:
- HTML
- CSS
- JavaScript

They **do NOT understand JSX or React components**.

So React’s main job is to:
> Convert **React elements (objects)** into **real DOM nodes**.

## 🔁 React Rendering Flow (Simplified)

JSX → React Element Object → DOM Element → Browser UI

---

## 🧩 React-like Element Structure

```js
const reactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank"
  },
  children: "Click me to visit Google"
};
