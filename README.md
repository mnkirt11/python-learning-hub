# Python Learning Hub

A beginner-friendly, modern and responsive educational website that introduces
Python programming to students. Built with React, Vite and Tailwind CSS.

## Features

- Clean, modern design with Python-inspired blue & yellow colors
- Fully responsive (laptop, tablet, mobile)
- Smooth hover effects and simple animations
- Reusable components for easy editing

### Sections

1. **Navbar** — logo, links and a highlighted "Start Learning" button
2. **Hero** — heading, subheading, two buttons and a code window
3. **Why Learn Python?** — four benefit cards with icons
4. **Python Topics** — eight topic cards (Variables, Loops, Functions, etc.)
5. **Python In Action** — three copyable code examples
6. **Python-Style Calculator** — interactive frontend calculator
7. **Mini Python Quiz** — five questions with instant feedback and a final score
8. **Project Ideas** — six beginner project cards
9. **Call To Action** — "Ready to Start Coding?" banner
10. **Footer** — links and "Made for Python Beginners"

## 1. How to install the project

You need [Node.js](https://nodejs.org/) installed (version 18 or newer).

```bash
npm install
```

This installs all required packages.

## 2. How to run it

Start the development server:

```bash
npm run dev
```

Then open the address shown in your terminal (usually
`http://localhost:5173`) in your browser.

To create a production build:

```bash
npm run build
```

To check for type errors:

```bash
npm run typecheck
```

## 3. Basic project structure

```
python-learning-hub/
├── index.html              # HTML entry point (page title lives here)
├── package.json            # Project dependencies and scripts
├── tailwind.config.js      # Tailwind CSS configuration
├── postcss.config.js       # PostCSS configuration (Tailwind + autoprefixer)
├── vite.config.ts          # Vite configuration
├── tsconfig.json           # TypeScript project references
├── tsconfig.app.json       # TypeScript config for the app
├── tsconfig.node.json      # TypeScript config for Vite
├── eslint.config.js        # ESLint configuration
├── README.md               # This file
├── public/
│   └── favicon.svg         # Site favicon (Python-themed)
└── src/
    ├── main.tsx            # React entry point
    ├── App.tsx             # Main page — assembles all sections together
    ├── index.css           # Global styles and Tailwind imports
    ├── vite-env.d.ts       # Vite type declarations
    └── components/
        ├── Navbar.tsx       # Top navigation bar
        ├── Hero.tsx         # Hero section with code window
        ├── TopicCard.tsx    # Reusable card (topics, benefits, projects)
        ├── CodeExample.tsx  # Code block with a "Copy Code" button
        ├── Calculator.tsx   # Interactive Python-style calculator
        ├── Quiz.tsx         # Interactive 5-question quiz
        └── Footer.tsx       # Footer with quick links
```

## 4. Where students can modify the content

Most content lives in **`src/App.tsx`**, where the arrays at the top of the file
define what appears on the page:

- **`whyCards`** — the "Why Learn Python?" cards (title, description, icon)
- **`topics`** — the "Start With The Basics" topic cards
- **`examples`** — the code snippets shown in "Python In Action"
- **`projects`** — the beginner project idea cards

To change the quiz questions, edit the **`questions`** array at the top of
**`src/components/Quiz.tsx`**.

To change the calculator, edit **`src/components/Calculator.tsx`**.

To change navbar links, edit the **`links`** array at the top of
**`src/components/Navbar.tsx`**.

To change colors, fonts or global styles, edit **`src/index.css`** and
**`tailwind.config.js`**.

To change the page title in the browser tab, edit **`index.html`**.

Icons come from [lucide-react](https://lucide.dev/icons) — import any icon you
want and use it in a card.

## Tech stack

- React 18
- Vite 5
- TypeScript
- Tailwind CSS 3
- lucide-react (icons)

No backend or database is used — everything runs in the browser.
