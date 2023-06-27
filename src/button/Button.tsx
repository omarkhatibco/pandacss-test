import { PropsWithChildren } from 'react';
import { cva, cx } from '../../styled-system/css';

export const buttonStyle = cva({
  base: {
    position: 'relative',
    '& :is(.__stateLayer)': {
      position: 'absolute',
      inset: '0',
    },

    '& .__stateLayer': {
      opacity: {
        base: '0',
        // _hover: '0.8',
        _groupHover: '0.8',
        _groupFocusVisible: '0.90',
        _groupActive: '0.95',
      },
      bg: 'transparent',
    },
  },
  variants: {
    variant: {
      filled: {
        bgColor: 'primary',
        color: 'on.primary',
      },
      outline: {
        color: 'primary',

        '& .__stateLayer': {
          bg: 'primary',
        },
      },
      text: {},
      elevated: {},
      tonal: {},
    },
  },
  defaultVariants: {
    variant: 'outline',
  },
});

export const Button: React.FC<PropsWithChildren> = ({ children }) => {
  const classes = buttonStyle({ variant: 'outline' });
  return (
    <button className={cx('group', classes)}>
      <span className='__label'>{children}</span>
      <span className='__stateLayer' />
    </button>
  );
};
