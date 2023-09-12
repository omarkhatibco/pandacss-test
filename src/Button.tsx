import { cva } from '../styled-system/css';
import { SystemStyleObject } from '../styled-system/types';
import { styled } from '../styled-system/jsx';

import { beforeAfterSharedStyles } from './styles';

export const buttonBaseStyle = {
  px: 6,
  py: 2.5,
  textStyle: 'label.lg',
  height: '10',
  minWidth: '10',
  position: 'relative',
  userSelect: 'none',
  display: 'inline-flex',
  appearance: 'none',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '2',
  whiteSpace: 'nowrap',
  verticalAlign: 'middle',
  rounded: 'full',
  cursor: 'pointer',
  transition: 'all',

  _before: {
    ...beforeAfterSharedStyles,
    opacity: 0,
    bgColor: 'transparent',
  },

  _after: {
    ...beforeAfterSharedStyles,
    borderWidth: '1px',
    borderColor: 'transparent',
    content: '""',
  },

  _hover: {
    _before: {},
  },
  _focusVisible: {
    _before: {},
  },
  _active: {
    _before: {},
  },
  _disabled: {
    opacity: 0.4,
  },
} satisfies SystemStyleObject;

export const buttonStyle = cva({
  base: {
    ...buttonBaseStyle,
  },

  variants: {
    variant: {
      filled: {
        bgColor: 'red',
        color: 'blue',
      },
      outlined: {},
      text: {},
      elevated: {},
      tonal: {},
    },
  },

  defaultVariants: {
    variant: 'filled',
  },
});

export const Button = styled('button', buttonStyle);
