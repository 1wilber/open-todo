import { Box, ChakraComponent, ComponentWithAs, Stack, StackProps } from "@chakra-ui/react"

export const Navbar: ChakraComponent<"div"> = (props) => {
  const { children } = props
  return (
    <Box
      padding={4}
      {...props}
      bottom={0}
      position="fixed"
      bgColor="green.600"
      height="80px"
      width="100%"
      zIndex={100}
      display="flex"
    >
      {children}
    </Box>
  )
}

export const NavbarSection: ComponentWithAs<"div", StackProps> = (props) => {
  const { children, ...restProps } = props

  return (
    <Stack
      {...restProps}
      flex={1}
      display="flex"
      justifyContent="center"
    >
      {children}
    </Stack>
  )
}
