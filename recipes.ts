import { defineRecipe } from '@pandacss/dev';

export const cardRoot = defineRecipe({
  name: 'cardRoot',
  jsx: ['CardRoot'],
  base: {
    pos: 'relative',
    w: 'full',
    overflow: 'hidden',
    rounded: 'xl',
    withTransition: true,
  },
  variants: {
    variant: {
      outlined: {
        borderWidth: '1px',
        borderColor: 'outline.variant',
      },
      elevated: {
        bgColor: 'surface.container.low',
        shadow: 'e1',

        '&:hover:has(.__actionArea)': {
          shadow: 'e3',
        },
      },
      filled: {
        bgColor: 'surface.container.highest',
      },
    },
  },
  defaultVariants: {
    variant: 'outlined',
  },
});

export const recipes = {
  cardRoot,
};
