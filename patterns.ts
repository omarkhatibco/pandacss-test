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
      _hover: {
        backgroundColor: 'primary',
      },
      _before: {
        content: '""',
        display: 'block',
        paddingBottom: `${(1 / ratio) * 100}%`,
      },
      '& > *': {
        width: '100%',
        height: '100%',
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
