import { Checkbox, ListItem, Text } from "@chakra-ui/react";
import { Todo } from "~/features/todos";
import { generatePath, Link } from "@remix-run/react";

type TodoItemProps = {
  item: Todo;
}

export const TodoItem: React.FC<TodoItemProps> = (props) => {
  const { item } = props;

  return (
    <Link style={{ width: "100%" }} to={generatePath('/todos/:id', { id: String(item.id) })} >
      <ListItem cursor="pointer" >
        <Checkbox size="lg" />
        <Text as="span" fontSize="sm" >{item.todo}</Text>
      </ListItem>
    </Link>
  );
};
