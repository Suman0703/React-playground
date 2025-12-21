# React Day 1 – First Component & JSX Basics 🚀

This project marks the beginning of my React learning journey.  
In this task, I focused on understanding **how React works at the component level**, rather than just theory.

---

## 📌 What I Built

- A basic React application using **Vite**
- A reusable React component named `Welcome`
- Rendered the component inside the main `App` component

---

## 🧠 Concepts Learned (In-Depth)

### 1️⃣ What is React?
React is a **JavaScript library** used to build **component-based user interfaces**.  
Instead of writing one large HTML file, React allows us to split the UI into **small reusable components**.

---

### 2️⃣ What is a React Component?
A component is a **JavaScript function** that:
- Returns JSX
- Represents a part of the UI
- Can be reused multiple times

Example:
```jsx
function App() {
  return(
    <div>
      <h1>Hello React 🚀</h1>
      <p>My React journey starts today</p>
       <Welcome />
    </div>
  );
}
