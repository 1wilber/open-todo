import { createMultiStyleConfigHelpers } from "@chakra-ui/react"

const helpers = createMultiStyleConfigHelpers(['container', 'item', 'icon'])

export const ONList = helpers.defineMultiStyleConfig({
  baseStyle: {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      gap: 1
    },
    item: {
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center",
      backgroundColor: "gray.50",
      gap: 4,
      py: 3,
      px: 3,
      borderRadius: "base",
      width: "100%"
    }
  }
})
