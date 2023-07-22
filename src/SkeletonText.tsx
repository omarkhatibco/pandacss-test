import { forwardRef } from 'react';
import { Box, VStack, VstackProps } from '../styled-system/jsx';
import { JsxStyleProps } from '../styled-system/types';

export type SkeletonTextProps = VstackProps & {
  noOfLines?: number;
  skeletonHeight?: JsxStyleProps['height'];
};

export const SkeletonText = forwardRef<HTMLDivElement, SkeletonTextProps>(
  ({ noOfLines = 2, skeletonHeight = 4, ...props }, ref) => {
    return (
      <VStack ref={ref} w='100%' gap={2} alignItems={'flex-start'} {...props}>
        {Array.from({ length: noOfLines }).map((_, i, arr) => (
          <Box
            key={i}
            h={skeletonHeight}
            bgColor='surface.container.highest'
            w={1 + i < arr.length ? '100%' : '80%'}
          />
        ))}
      </VStack>
    );
  },
);
