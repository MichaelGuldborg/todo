# Todo App

A simple todo application built with React, TypeScript, and Vite using localStorage for persistence.

## Features

- ✅ Add new todos
- ✅ Mark todos as complete/incomplete
- ✅ Edit existing todos (double-click to edit)
- ✅ Delete todos
- ✅ Filter todos by status (All, Active, Completed)
- ✅ Clear all completed todos
- ✅ Persistent storage using localStorage
- ✅ Responsive design
- ✅ TypeScript for type safety
- ✅ Modern React patterns with hooks

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linting
npm run lint
```

## Tech Stack

- **React 18** - UI library with hooks and functional components
- **TypeScript** - Type safety and better developer experience
- **Vite** - Fast development server and build tool
- **ESLint** - Code linting and quality
- **Custom CRUD Service** - Reusable localStorage-based CRUD operations
- **Custom Validation** - Form validation utilities

## Project Structure

```
src/
├── components/           # React components
│   ├── TodoForm.tsx     # Add new todo form
│   ├── TodoItem.tsx     # Individual todo item
│   ├── TodoList.tsx     # List of todos
│   └── TodoFilter.tsx   # Filter and stats
├── hooks/               # Custom React hooks
│   └── useTodos.ts      # Todo management logic
├── services/            # Business logic
│   └── todoService.ts   # CRUD operations for todos
├── types/               # TypeScript type definitions
│   └── Todo.ts          # Todo and filter types
├── lib/                 # Reusable utilities
│   ├── crud/            # CRUD service utilities
│   ├── validate/        # Validation functions
│   └── list/            # List manipulation utilities
├── App.tsx              # Main application component
├── App.css              # Application styles
└── main.tsx             # Application entry point
```

## Architecture

This application follows a clean architecture pattern:

- **Components**: Pure presentation components that receive props and render UI
- **Hooks**: Custom hooks that encapsulate stateful logic and side effects
- **Services**: Business logic layer that handles data operations
- **Types**: TypeScript interfaces and types for type safety
- **Lib**: Reusable utility functions for common operations

The app uses a localStorage-based CRUD service that provides a consistent interface for data operations, making it easy to switch to a different storage solution in the future.

## Usage

1. **Add Todo**: Type in the input field and click "Add Todo" or press Enter
2. **Complete Todo**: Click the checkbox next to a todo item
3. **Edit Todo**: Double-click on a todo title to edit it inline
4. **Delete Todo**: Click the red × button next to a todo item
5. **Filter Todos**: Use the filter buttons to show All, Active, or Completed todos
6. **Clear Completed**: Click "Clear Completed" to remove all completed todos

## Development

The project includes:
- Hot module replacement for fast development
- TypeScript compilation with strict type checking
- ESLint configuration for React and TypeScript
- Responsive CSS design
- Comprehensive error handling

## Browser Support

Modern browsers that support:
- ES2020+ features
- CSS Grid and Flexbox
- localStorage API
