import { createMultiStyleConfigHelpers } from "@chakra-ui/react"

const helpers = createMultiStyleConfigHelpers(['control', 'icon', 'container', 'label'])

export const ONCheckbox = helpers.defineMultiStyleConfig({
  baseStyle: {
    control: {
      borderRadius: "full"
    }
  }
})
