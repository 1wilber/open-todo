import { List } from "@chakra-ui/react";
import { Todo, TodoItem, } from "~/features/todos";

type TodosProps = {
  todos: Todo[]
}

export const Todos: React.FC<TodosProps> = (props) => {
  const { todos } = props
  console.log(todos)

  return (
    <List >
      {todos.map((todoItem) => <TodoItem key={todoItem.id} item={todoItem} />)}
    </List>
  )
};
