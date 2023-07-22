import { forwardRef } from 'react';
import { Circle, CircleProps } from '../styled-system/jsx';

export const SkeletonCircle = forwardRef<HTMLDivElement, CircleProps>(
  (props, ref) => {
    return <Circle ref={ref} bgColor='surface.container.highest' {...props} />;
  },
);
