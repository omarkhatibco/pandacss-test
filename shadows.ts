import { defineSemanticTokens } from '@pandacss/dev'

export const shadows = defineSemanticTokens.shadows({
  none: { value: 'none' },
  e1: {
    value: {
      base: ['0px 1px 2px rgba(0, 0, 0, 0.3)', '0px 1px 3px 1px rgba(0, 0, 0, 0.15)'],
      _dark: ['0px 1px 3px 1px rgba(0, 0, 0, 0.15)', '0px 1px 2px rgba(0, 0, 0, 0.3)'],
    },
  },
  e2: {
    value: {
      base: ['0px 1px 2px rgba(0, 0, 0, 0.3)', '0px 2px 6px 2px rgba(0, 0, 0, 0.15)'],
      _dark: ['0px 2px 6px 2px rgba(0, 0, 0, 0.15)', '0px 1px 2px rgba(0, 0, 0, 0.3)'],
    },
  },
  e3: {
    value: {
      base: ['0px 4px 8px 3px rgba(0, 0, 0, 0.15)', '0px 1px 3px rgba(0, 0, 0, 0.3)'],
      _dark: ['0px 4px 8px 3px rgba(0, 0, 0, 0.15)', '0px 1px 3px rgba(0, 0, 0, 0.3)'],
    },
  },
  e4: {
    value: {
      base: ['0px 6px 10px 4px rgba(0, 0, 0, 0.15)', '0px 2px 3px rgba(0, 0, 0, 0.3)'],
      _dark: ['0px 6px 10px 4px rgba(0, 0, 0, 0.15)', '0px 2px 3px rgba(0, 0, 0, 0.3)'],
    },
  },
  e5: {
    value: {
      base: ['0px 8px 12px 6px rgba(0, 0, 0, 0.15)', ' 0px 4px 4px rgba(0, 0, 0, 0.3)'],
      _dark: ['0px 8px 12px 6px rgba(0, 0, 0, 0.15)', '0px 4px 4px rgba(0, 0, 0, 0.3)'],
    },
  },
})
