import { PropsWithChildren } from 'react';
import { cva, cx } from '../../styled-system/css';
import { styled } from '../../styled-system/jsx';

export const buttonStyle = cva({
  base: {
    position: 'relative',
    '& :is(.__stateLayer)': {
      position: 'absolute',
      inset: '0',
    },
    // THIS WORK HERE
    // _hover: {
    //   '& .__stateLayer': {
    //     opacity: '0.8',
    //   },
    // },

    '& .__stateLayer': {
      opacity: {
        // THIS DOES NOT WORK
        base: '0',
        // _hover: '0.8',
        _groupHover: '0.8',
        _groupFocusVisible: '0.90',
        _groupActive: '0.95',
      },
      // _groupHover: {
      //   opacity: '0.8',
      // },
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
      <styled.span
        className='__stateLayer'
        // THIS ALSO WORKS
        // _groupHover={{
        //   opacity: '0.8',
        // }}
      />
    </button>
  );
};
