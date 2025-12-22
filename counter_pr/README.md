# 🔢 React Counter App

A simple **React Counter Application** built using **React Hooks (`useState`)**.  
This project demonstrates how to manage state, handle events, and apply basic conditional logic in React.

---

## 🚀 Features

- ➕ Increase counter value
- ➖ Decrease counter value
- 🚫 Prevents value from going **above 20**
- 🚫 Prevents value from going **below 0**
- ⚛️ Uses React `useState` hook
- 🧠 Beginner-friendly logic

---

## 🛠️ Tech Stack

- **React JS**
- **JavaScript (ES6)**
- **CSS**
- **Vite** (for fast development)

---

## 📂 Project Structure

src/

│── App.jsx

│── App.css

│── main.jsx

---

## 📌 How It Works

- The counter value is stored in React state:
  ```js
  const [counter, setCounter] = useState(5);
