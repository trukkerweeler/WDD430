import { TodoItem } from "./TodoItem";

export function TodoList( { todos }) {
  return (  
    <ul className="list">
    {todos.length === 0 && "No todos"}
    {todos.map(todo => {
    return <TodoItem {...todo} key={todo.id} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />    
    })}
    </ul>
  )
}