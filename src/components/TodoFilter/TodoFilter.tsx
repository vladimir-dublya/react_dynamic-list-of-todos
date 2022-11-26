import React, { ChangeEvent, useState } from 'react';
import { Todo } from '../../types/Todo';
import { TodoList } from '../TodoList';

type Props = {
  todos: Todo[];
};

enum FilterStatus {
  ALL = 'all',
  ACTIVE = 'active',
  COMPLETED = 'completed',
}

export const TodoFilter: React.FC<Props> = ({ todos }) => {
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState<FilterStatus>(FilterStatus.ALL);

  const lowQuery = query.toLowerCase();

  const filteredTodos = todos.filter((todo) => {
    if (filter === FilterStatus.ACTIVE) {
      return !todo.completed && todo.title.toLowerCase().includes(lowQuery);
    }

    if (filter === FilterStatus.COMPLETED) {
      return todo.completed && todo.title.toLowerCase().includes(lowQuery);
    }

    return todo.title.toLowerCase().includes(lowQuery);
  });

  const makeFiltered = (event: ChangeEvent<HTMLSelectElement>) => {
    switch (event.target.value) {
      case FilterStatus.ACTIVE:
        setFilter(FilterStatus.ACTIVE);
        break;
      case FilterStatus.COMPLETED:
        setFilter(FilterStatus.COMPLETED);
        break;
      default:
        setFilter(FilterStatus.ALL);
        break;
    }
  };

  return (
    <>
      <form className="field has-addons">
        <p className="control">
          <span className="select">
            <select data-cy="statusSelect" onChange={makeFiltered}>
              <option value="all">All</option>
              <option value="active">Active</option>
              <option value="completed">Completed</option>
            </select>
          </span>
        </p>

        <p className="control is-expanded has-icons-left has-icons-right">
          <input
            data-cy="searchInput"
            type="text"
            className="input"
            placeholder="Search..."
            value={query}
            onChange={(event) => {
              setQuery(event?.target.value);
            }}
          />
          <span className="icon is-left">
            <i className="fas fa-magnifying-glass" />
          </span>

          {query && (
            <span className="icon is-right" style={{ pointerEvents: 'all' }}>
              {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
              <button
                data-cy="clearSearchButton"
                type="button"
                className="delete"
                onClick={() => setQuery('')}
              />
            </span>
          )}
        </p>
      </form>

      <div className="block">
        <TodoList todos={filteredTodos} />
      </div>
    </>
  );
};