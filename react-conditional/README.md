# React Task 3 – Conditional Rendering (Simple Login) 🔐

This task focuses on understanding **conditional rendering** in React using a **very simple login example**.

---

## 🎯 Goal of This Task

- Understand how React changes UI based on conditions
- Learn how `state` controls what appears on screen
- Learn how inputs work with state
- Build confidence with conditional rendering

---

## 🧠 Core Concept: Conditional Rendering

> Conditional rendering means **showing different UI based on a condition (state)**.

In this task:
- If the user is **not logged in** → show login UI
- If the user **is logged in** → show welcome UI

Same component, different UI.

---

## 🔑 States Used

```js
const [name, setName] = useState("")
const [isLoggedIn, setIsLoggedIn] = useState(false)
