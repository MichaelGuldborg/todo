import type { TodoFilter as FilterType } from '../types/Todo';

interface TodoFilterProps {
  currentFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
  stats: {
    total: number;
    active: number;
    completed: number;
  };
  onClearCompleted: () => void;
}

export const TodoFilter = ({ 
  currentFilter, 
  onFilterChange, 
  stats, 
  onClearCompleted 
}: TodoFilterProps) => {
  const filters: { key: FilterType; label: string }[] = [
    { key: 'all', label: `All (${stats.total})` },
    { key: 'active', label: `Active (${stats.active})` },
    { key: 'completed', label: `Completed (${stats.completed})` },
  ];

  return (
    <div className="todo-filter">
      <div className="filter-buttons">
        {filters.map(({ key, label }) => (
          <button
            key={key}
            onClick={() => onFilterChange(key)}
            className={`filter-button ${currentFilter === key ? 'active' : ''}`}
          >
            {label}
          </button>
        ))}
      </div>
      
      {stats.completed > 0 && (
        <button
          onClick={onClearCompleted}
          className="clear-completed-button"
        >
          Clear Completed
        </button>
      )}
    </div>
  );
};