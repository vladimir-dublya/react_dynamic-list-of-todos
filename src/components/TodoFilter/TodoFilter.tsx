import React, { useState } from 'react';
import { Todo } from '../../types/Todo';
import { TodoList } from '../TodoList';

type Props = {
  todos: Todo[];
};

export const TodoFilter: React.FC<Props> = ({ todos }) => {
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState('');

  let filteredTodos = todos.filter((todo: { title: string }) => todo.title
    .toLowerCase().includes(query.toLowerCase()));

  filteredTodos = filteredTodos.filter((todo) => {
    if (filter === 'active') {
      return !todo.completed;
    }

    if (filter === 'completed') {
      return todo.completed;
    }

    return 1;
  });

  const makeFiltered = (event: {
    target: { value: React.SetStateAction<string> };
  }) => setFilter(event.target.value);

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
            defaultValue=""
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
