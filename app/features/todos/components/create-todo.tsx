import { Button, Checkbox, Input, Stack } from "@chakra-ui/react";
import { Form, useNavigation } from "@remix-run/react";

export const CreateTodo: React.FC = () => {
  const { state } = useNavigation()

  return (
    <Form method="post" >
      <Stack direction="row">
        <Checkbox size="lg" readOnly />
        <Input name="todo" autoFocus variant='unstyled' placeholder='Agregar una tarea' />
        <Button loadingText="Creando..." isLoading={state === 'submitting'} type="submit">Save</Button>
      </Stack>
    </Form>
  );
};
