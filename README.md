# 2025 Portfolio

A modern portfolio website built with React, TypeScript, and Tailwind CSS using atomic design principles.

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **Create React App** - Development environment

## Project Structure

The project follows atomic design principles:

```
src/
├── components/
│   ├── atoms/         # Basic UI elements (Button, Heading, etc.)
│   ├── molecules/     # Groups of atoms (Hero, Card, etc.)
│   ├── organisms/     # Complex sections (Header, Footer, etc.)
│   ├── templates/     # Page layouts (MainLayout, etc.)
│   └── pages/         # Complete pages (HomePage, etc.)
├── index.css
├── App.tsx
└── index.tsx
```

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm start
   ```

3. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Features

- Responsive design
- Atomic design architecture
- TypeScript for type safety
- Modern UI with Tailwind CSS
- Component-based structure
