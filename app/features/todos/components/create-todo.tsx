import { Button, Input, Stack } from "@chakra-ui/react";

export const CreateTodo: React.FC = () => {
  return (
    <Stack direction="row">
      <Input />
      <Button >Add</Button>
    </Stack>
  );
};
