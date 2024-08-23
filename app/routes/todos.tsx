import { AddIcon } from "@chakra-ui/icons";
import {
  Container, List, ListItem, Text,
} from "@chakra-ui/react";
import { defer } from "@remix-run/node";
import { Await, Link, MetaFunction, Outlet, useLoaderData } from "@remix-run/react";
import { Suspense } from "react";
import { Navbar } from "~/components/ui";
import { TodoHeader, Todos } from "~/features/todos";
import { supabaseClient } from "~/utils";

export const meta: MetaFunction = () => {
  return [
    { title: "Todos" },
    { name: "description", content: "All todos" },
  ];
};

export function loader() {

  const todos = supabaseClient.from('todos').select('*').order('id', { ascending: false }).then(data => data)

  return defer({
    todos
  })
}

export default function Component() {
  const promises = useLoaderData<typeof loader>()

  return (
    <>
      <Container m="auto" p={3} overflow="none" marginBottom="80px">
        <TodoHeader />
        <Suspense fallback={<Text>Cargando...</Text>}>
          <Await resolve={promises.todos}>
            {(result) => <Todos todos={result?.data} />}
          </Await>
        </Suspense>
      </Container >

      <Navbar>
        <Link to='create' style={{ width: "100%" }} >
          <List width="100%">
            <ListItem display="flex" alignItems="center">
              <AddIcon />
              Agregar una tarea
            </ListItem>
          </List>
        </Link>
      </Navbar>
      <Outlet />
    </>
  )
}
