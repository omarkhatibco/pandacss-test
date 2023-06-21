import { defineSemanticTokens, defineTokens } from '@pandacss/dev'

/* eslint-disable perfectionist/sort-objects */

const tonalPalette = {
  primary: {
    '0': { value: '#000000' },
    '10': { value: '#002111' },
    '20': { value: '#003921' },
    '30': { value: '#005232' },
    '40': { value: '#006D44' },
    '50': { value: '#158858' },
    '60': { value: '#3BA370' },
    '70': { value: '#58BE89' },
    '80': { value: '#75DAA3' },
    '90': { value: '#91F7BD' },
    '95': { value: '#C0FFD7' },
    '99': { value: '#F5FFF5' },
    '100': { value: '#FFFFFF' },
  },
  secondary: {
    '0': { value: '#000000' },
    '10': { value: '#0B1F14' },
    '20': { value: '#213528' },
    '30': { value: '#374B3E' },
    '40': { value: '#4E6355' },
    '50': { value: '#667C6D' },
    '60': { value: '#809686' },
    '70': { value: '#9AB1A0' },
    '80': { value: '#B5CCBB' },
    '90': { value: '#D0E8D6' },
    '95': { value: '#DFF7E4' },
    '99': { value: '#F5FFF5' },
    '100': { value: '#FFFFFF' },
  },
  tertiary: {
    '0': { value: '#000000' },
    '10': { value: '#001E2D' },
    '20': { value: '#00344B' },
    '30': { value: '#004C6B' },
    '40': { value: '#00658D' },
    '50': { value: '#007FB1' },
    '60': { value: '#2D9ACF' },
    '70': { value: '#2D9ACF' },
    '80': { value: '#82CFFF' },
    '90': { value: '#C6E7FF' },
    '95': { value: '#E4F3FF' },
    '99': { value: '#FBFCFF' },
    '100': { value: '#FFFFFF' },
  },
  error: {
    '0': { value: '#000000' },
    '10': { value: '#410002' },
    '20': { value: '#690005' },
    '30': { value: '#93000A' },
    '40': { value: '#BA1A1A' },
    '50': { value: '#DE3730' },
    '60': { value: '#FF5449' },
    '70': { value: '#FF897D' },
    '80': { value: '#FFB4AB' },
    '90': { value: '#FFDAD6' },
    '95': { value: '#FFEDEA' },
    '99': { value: '#FFFBFF' },
    '100': { value: '#FFFFFF' },
  },
  neutral: {
    '0': { value: '#000000' },
    '4': { value: '#0E0F0A' },
    '6': { value: '#13140F' },
    '10': { value: '#1B1C17' },
    '12': { value: '#1F201B' },
    '17': { value: '#2A2A25' },
    '20': { value: '#474741' },
    '22': { value: '#353530' },
    '24': { value: '#393A34' },
    '30': { value: '#474741' },
    '40': { value: '#5F5F58' },
    '50': { value: '#787771' },
    '60': { value: '#92918A' },
    '70': { value: '#ACABA4' },
    '80': { value: '#C8C7BF' },
    '87': { value: '#DCDAD2' },
    '90': { value: '#E4E3DB' },
    '92': { value: '#EAE8E0' },
    '94': { value: '#F0EEE6' },
    '95': { value: '#F3F1E9' },
    '96': { value: '#F6F4EB' },
    '98': { value: '#FBF9F1' },
    '99': { value: '#F5FFF5' },
    '100': { value: '#FFFFFF' },
  },
  neutralVariant: {
    '0': { value: '#000000' },
    '10': { value: '#151D18' },
    '20': { value: '#151D18' },
    '30': { value: '#404942' },
    '40': { value: '#58605A' },
    '50': { value: '#717972' },
    '60': { value: '#8A938B' },
    '70': { value: '#A5ADA5' },
    '80': { value: '#C0C9C0' },
    '90': { value: '#DCE5DC' },
    '95': { value: '#EAF3EA' },
    '99': { value: '#F5FFF5' },
    '100': { value: '#FFFFFF' },
  },
}

const fyType = ['primary', 'secondary', 'tertiary', 'error']

const fyColors = fyType.reduce((acc, color) => {
  return {
    ...acc,
    [color]: {
      DEFAULT: {
        value: { base: `{colors.tonal.${color}.40}`, _dark: `{colors.tonal.${color}.80}` },
      },
      container: {
        value: { base: `{colors.tonal.${color}.90}`, _dark: `{colors.tonal.${color}.30}` },
      },
      ...(color !== 'error' && {
        fixed: {
          DEFAULT: {
            value: `{colors.tonal.${color}.90}`,
          },
          dim: {
            value: `{colors.tonal.${color}.80}`,
          },
        },
      }),
    },
  }
}, {})

const fyOnColors = fyType.reduce((acc, color) => {
  return {
    ...acc,
    [color]: {
      DEFAULT: {
        value: { base: `{colors.tonal.${color}.100}`, _dark: `{colors.tonal.${color}.20}` },
      },
      container: {
        value: { base: `{colors.tonal.${color}.10}`, _dark: `{colors.tonal.${color}.90}` },
      },
      ...(color !== 'error' && {
        fixed: {
          DEFAULT: {
            value: `{colors.tonal.${color}.10}`,
          },
          variant: {
            value: `{colors.tonal.${color}.30}`,
          },
        },
      }),
    },
  }
}, {})

export const colors = defineTokens.colors({
  current: { value: 'currentColor' },
  transparent: { value: 'rgb(0 0 0 / 0)' },
  tonal: tonalPalette,
})

export const semanticColors = defineSemanticTokens.colors({
  black: { value: '{colors.tonal.neutral.0}' },
  white: { value: '{colors.tonal.neutral.100}' },
  ...fyColors,
  on: {
    ...fyOnColors,
    surface: {
      DEFAULT: {
        value: { base: `{colors.tonal.neutral.10}`, _dark: `{colors.tonal.neutral.90}` },
      },
      variant: {
        value: {
          base: `{colors.tonal.neutralVariant.30}`,
          _dark: `{colors.tonal.neutralVariant.80}`,
        },
      },
    },
  },

  surface: {
    dim: {
      value: {
        base: `{colors.tonal.neutral.87}`,
        _dark: `{colors.tonal.neutral.6}`,
      },
    },
    DEFAULT: {
      value: {
        base: `{colors.tonal.neutral.98}`,
        _dark: `{colors.tonal.neutral.6}`,
      },
    },
    bright: {
      value: {
        base: `{colors.tonal.neutral.98}`,
        _dark: `{colors.tonal.neutral.24}`,
      },
    },
    container: {
      lowest: {
        value: {
          base: `{colors.tonal.neutral.100}`,
          _dark: `{colors.tonal.neutral.4}`,
        },
      },
      low: {
        value: {
          base: `{colors.tonal.neutral.96}`,
          _dark: `{colors.tonal.neutral.10}`,
        },
      },
      DEFAULT: {
        value: {
          base: `{colors.tonal.neutral.94}`,
          _dark: `{colors.tonal.neutral.120}`,
        },
      },
      high: {
        value: {
          base: `{colors.tonal.neutral.92}`,
          _dark: `{colors.tonal.neutral.17}`,
        },
      },
      highest: {
        value: {
          base: `{colors.tonal.neutral.90}`,
          _dark: `{colors.tonal.neutral.22}`,
        },
      },
    },
  },

  inverse: {
    surface: {
      value: {
        base: `{colors.tonal.neutral.20}`,
        _dark: `{colors.tonal.neutral.90}`,
      },
    },
    on: {
      surface: {
        value: {
          base: `{colors.tonal.neutral.95}`,
          _dark: `{colors.tonal.neutral.20}`,
        },
      },
    },
    primary: {
      value: {
        base: `{colors.tonal.primary.80}`,
        _dark: `{colors.tonal.primary.40}`,
      },
    },
  },

  outline: {
    DEFAULT: {
      value: {
        base: `{colors.tonal.neutralVariant.50}`,
        _dark: `{colors.tonal.neutralVariant.60}`,
      },
    },
    variant: {
      value: {
        base: `{colors.tonal.neutralVariant.80}`,
        _dark: `{colors.tonal.neutralVariant.30}`,
      },
    },
  },
  // // Extra Colors
  scrim: { value: '{colors.tonal.neutral.0}' },
  shadow: { value: '{colors.tonal.neutral.0}' },
})
