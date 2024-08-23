import { Checkbox, ListItem, Text } from "@chakra-ui/react";
import { Todo } from "@/features/todos";

interface ITodoItem {
  item: Todo;
}

export const TodoItem: React.FC<ITodoItem> = (props) => {
  const { item } = props;

  return (
    <ListItem >
      <Checkbox size="lg" />
      <Text as="span" fontSize="sm" >{item.todo}</Text>
    </ListItem>
  );
};
