import { ChevronLeftIcon } from "@chakra-ui/icons";
import { Container, Stack, Text } from "@chakra-ui/react";
import { defer } from "@remix-run/node";
import { Await, MetaFunction, useLoaderData } from "@remix-run/react";
import { Suspense } from "react";
import { Navbar, NavbarSection } from "~/components/ui";
import { TodoHeader, Todos } from "~/features/todos";
import { supabaseClient } from "~/utils";

export const meta: MetaFunction = () => {
  return [
    { title: "Todos" },
    { name: "description", content: "All todos" },
  ];
};

export function loader() {

  const todos = supabaseClient.from('todos').select('*').then(data => data)

  return defer({
    todos
  })
}

export default function Component() {
  const promises = useLoaderData<typeof loader>()
  return (
    <>
      <Navbar top={0}>
        <NavbarSection alignItems="flex-start">
          <Stack direction="row" alignItems="center" justifyContent="center" color="white" gap={0}>
            <ChevronLeftIcon fontSize="x-large" />
            <Text m={0} p={0} lineHeight={0}>Action</Text>
          </Stack>
        </NavbarSection>

        <NavbarSection alignItems="center">
          <Text> - Volver</Text>
        </NavbarSection>

        <NavbarSection alignItems="flex-end">
          <Text> - Volver</Text>
        </NavbarSection>
      </Navbar>
      <Container m="auto" p={3} overflow="none" marginBottom="80px" marginTop="60px">
        <TodoHeader />
        <Suspense fallback={<Text>Cargando...</Text>}>
          <Await resolve={promises.todos}>
            {(result) => <Todos todos={result?.data} />}
          </Await>
        </Suspense>
      </Container >
    </>
  )
}
