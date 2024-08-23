import { ChevronLeftIcon } from "@chakra-ui/icons";
import { Container, Stack, Text } from "@chakra-ui/react";
import { Await, MetaFunction } from "@remix-run/react";
import { Suspense } from "react";
import { Navbar, NavbarSection } from "~/components/ui";
import { TodoHeader } from "~/features/todos";

export const meta: MetaFunction = () => {
  return [
    { title: "Todos" },
    { name: "description", content: "All todos" },
  ];
};

export default function Todos() {
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
          {(result) => <Todos todos={[]} />}
        </Suspense>
      </Container >
    </>
  )
}
