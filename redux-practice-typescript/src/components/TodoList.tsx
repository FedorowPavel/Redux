import React, {FC, useEffect} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useAction";

const TodoList: FC = () => {
  const {page, error, loading, todos, limit} = useTypedSelector(state => state.todo)
  const {fetchTodos, setTodoPage} = useActions()
  const pages = [1,2,3,4,5]

  useEffect(() => {
    fetchTodos(page, limit)
  }, [page])

  if(loading) {
    return <h1>Loading....</h1>
  }
  if(error) {
    return <h1>{error}</h1>
  }
  
  
  return (
    <div>
      {todos.map(todo =>
        <div>{todo.id} - {todo.title}</div>
      )}
      {pages.map(p =>
        <span
          onClick={() => setTodoPage(p)}
          style={{border: p === page ? "2px solid green" : "1px solid gray", padding: '5px'}}
        >
          {p}
        </span>
      )}
    </div>
  );
};

export default TodoList;
