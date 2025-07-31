import { useState, useEffect } from 'react';
import type { Todo, TodoFilter } from '../types/Todo';
import { todoService } from '../services/todoService';
import { isNotEmpty } from '../lib/validate';

export const useTodos = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<TodoFilter>('all');
  const [loading, setLoading] = useState(true);

  const loadTodos = async () => {
    try {
      setLoading(true);
      const allTodos = await todoService.getAll();
      setTodos(allTodos);
    } catch (error) {
      console.error('Failed to load todos:', error);
    } finally {
      setLoading(false);
    }
  };

  const addTodo = async (title: string) => {
    if (!isNotEmpty(title.trim())) return;
    
    try {
      const newTodo = await todoService.create({
        title: title.trim(),
        completed: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      } as Todo);
      setTodos(prev => [newTodo, ...prev]);
    } catch (error) {
      console.error('Failed to add todo:', error);
    }
  };

  const toggleTodo = async (id: string) => {
    try {
      const todo = todos.find(t => t.id === id);
      if (!todo) return;

      const updatedTodo = await todoService.update({
        id,
        completed: !todo.completed,
        updatedAt: new Date(),
      });
      
      setTodos(prev => prev.map(t => t.id === id ? { ...t, ...updatedTodo } : t));
    } catch (error) {
      console.error('Failed to toggle todo:', error);
    }
  };

  const updateTodo = async (id: string, title: string) => {
    if (!isNotEmpty(title.trim())) return;
    
    try {
      const updatedTodo = await todoService.update({
        id,
        title: title.trim(),
        updatedAt: new Date(),
      });
      
      setTodos(prev => prev.map(t => t.id === id ? { ...t, ...updatedTodo } : t));
    } catch (error) {
      console.error('Failed to update todo:', error);
    }
  };

  const deleteTodo = async (id: string) => {
    try {
      await todoService.delete(id);
      setTodos(prev => prev.filter(t => t.id !== id));
    } catch (error) {
      console.error('Failed to delete todo:', error);
    }
  };

  const clearCompleted = async () => {
    const completedTodos = todos.filter(todo => todo.completed);
    try {
      await Promise.all(completedTodos.map(todo => todoService.delete(todo.id)));
      setTodos(prev => prev.filter(t => !t.completed));
    } catch (error) {
      console.error('Failed to clear completed todos:', error);
    }
  };

  const filteredTodos = todos.filter(todo => {
    switch (filter) {
      case 'active':
        return !todo.completed;
      case 'completed':
        return todo.completed;
      default:
        return true;
    }
  });

  const stats = {
    total: todos.length,
    active: todos.filter(t => !t.completed).length,
    completed: todos.filter(t => t.completed).length,
  };

  useEffect(() => {
    loadTodos();
  }, []);

  return {
    todos: filteredTodos,
    filter,
    loading,
    stats,
    setFilter,
    addTodo,
    toggleTodo,
    updateTodo,
    deleteTodo,
    clearCompleted,
  };
};