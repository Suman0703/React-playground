# 📒 Navbar Project – Learning Notes

This file contains notes about **what I have implemented and learned** while building a navbar using **React + Vite + Tailwind CSS**.

---

## ✅ Technologies Used

- React (functional components)
- Vite (development setup)
- Tailwind CSS (utility-first styling)
- Font Awesome (icons)
- PNG logo assets

---

## ✅ What I Have Done

### 🔹 1. Project Setup
- Created a React project using **Vite**
- Configured **Tailwind CSS** properly
- Imported Tailwind directives in `index.css`
- Ensured Tailwind is loaded in `main.jsx`

---

### 🔹 2. Created a Navbar Component
- Created a reusable `Navbar.jsx` component
- Used `flex` for layout alignment
- Used `justify-between` to separate logo and menu
- Used `items-center` for vertical alignment

---

### 🔹 3. Added Logo Image
- Stored logo inside `src/assets/`
- Imported PNG logo into the Navbar component
- Displayed logo using `<img />`
- Styled logo with:
  - width & height
  - rounded borders
  - background color
  - border

---

### 🔹 4. Desktop Navigation Menu
- Created navigation links using `<ul>` and `<li>`
- Displayed menu only on desktop using:
  - `hidden md:flex`
- Added spacing using `gap`
- Added hover effects:
  - border
  - background color
  - smooth transitions

---

### 🔹 5. Mobile Hamburger Icon
- Installed **Font Awesome**
- Imported Font Awesome CSS in `main.jsx`
- Used hamburger icon:
  - `fa-solid fa-bars`
- Displayed hamburger icon only on mobile using:
  - `md:hidden`
- Wrapped icon inside a `<button>` for accessibility

---

### 🔹 6. Responsive Design
- Used Tailwind breakpoints (`md`)
- Desktop:
  - Full menu visible
- Mobile:
  - Menu hidden
  - Hamburger icon visible

---

### 🔹 7. Styling Concepts I Used
- `flex`, `flex-row`
- `gap-*`
- `px-*`, `py-*`
- `rounded-full`, `rounded-3xl`
- `border`, `hover:border`
- `transition-all`
- Avoided fixed height issues in navbar

---

## 🧠 Important Things I Learned

- `items-center` and `justify-center` only work with `flex`
- Avoid mixing `h-*` with large padding
- Tailwind classes must be separated by spaces
- Responsive design in Tailwind is **mobile-first**
- Icons can be added using external libraries like Font Awesome
- Images should be imported in React, not linked with absolute paths

---

## 🔜 What I Can Add Next (Future Improvements)

- Mobile menu dropdown
- Animated hamburger icon
- Dark / Light mode toggle
- Sticky navbar
- Better hover animations
- Accessibility improvements

---

## 📝 Summary

This project helped me practice:
- Component-based design in React
- Responsive layouts using Tailwind
- Icon usage
- Debugging common Tailwind mistakes
- Writing clean and structured UI code
