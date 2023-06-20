import { definePattern } from '@pandacss/dev';
const aspectRatio = definePattern({
  properties: {
    ratio: { type: 'number' },
  },
  blocklist: ['aspectRatio'],
  transform(props) {
    const { ratio, ...rest } = props;
    return {
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      '--ratio': `${100 / ratio}%`,

      _before: {
        content: '""',
        display: 'block',
        paddingBottom: 'var(--ratio, 1)',
      },
      _children: {
        width: 'full',
        height: 'full',
        position: 'absolute',
        inset: 0,
      },
      ...rest,
    };
  },
});

export const patterns = {
  aspectRatio,
};
