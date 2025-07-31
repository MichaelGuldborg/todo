import { TodoForm } from './components/TodoForm';
import { TodoList } from './components/TodoList';
import { TodoFilter } from './components/TodoFilter';
import { useTodos } from './hooks/useTodos';
import './App.css';

function App() {
  const {
    todos,
    filter,
    loading,
    stats,
    setFilter,
    addTodo,
    toggleTodo,
    updateTodo,
    deleteTodo,
    clearCompleted,
  } = useTodos();

  if (loading) {
    return (
      <div className="app">
        <div className="container">
          <h1>Todo App</h1>
          <div className="loading">Loading todos...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="app">
      <div className="container">
        <header className="app-header">
          <h1>Todo App</h1>
          <p>A simple todo application with localStorage persistence</p>
        </header>

        <main className="app-main">
          <TodoForm onAdd={addTodo} />
          
          <TodoFilter
            currentFilter={filter}
            onFilterChange={setFilter}
            stats={stats}
            onClearCompleted={clearCompleted}
          />
          
          <TodoList
            todos={todos}
            onToggle={toggleTodo}
            onUpdate={updateTodo}
            onDelete={deleteTodo}
          />
        </main>

        <footer className="app-footer">
          <p>Double-click a todo to edit it</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
