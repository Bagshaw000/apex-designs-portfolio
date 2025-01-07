import { breakpoints, textStyles } from './style'
import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react"

const config = defineConfig({
    theme: {
      textStyles,breakpoints
    },
  })
  
  export const system=  createSystem(defaultConfig, config)