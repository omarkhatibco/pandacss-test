import { defineTextStyles } from '@pandacss/dev';

export const textStyles = defineTextStyles({
  display: {
    lg: {
      description: 'Display Large',
      value: {
        fontFamily: 'serif',
        fontSize: '3.563rem',
        lineHeight: '4rem',
        letterSpacing: '-.25px',
      },
    },
    md: {
      description: 'Display Medium',
      value: {
        fontFamily: 'serif',
        fontSize: '2.813rem',
        lineHeight: '3.25rem',
      },
    },
    sm: {
      description: 'Display Small',
      value: {
        fontFamily: 'serif',
        fontSize: '2.25rem',
        lineHeight: '2.75rem',
      },
    },
  },
  headline: {
    lg: {
      description: 'Headline Large',
      value: {
        fontSize: '2rem',
        lineHeight: '2.5rem',
        fontWeight: 'bold',
      },
    },
    md: {
      description: 'Headline Medium',
      value: {
        fontSize: '1.75rem',
        lineHeight: '2.25rem',
        fontWeight: 'bold',
      },
    },
    sm: {
      description: 'Headline Small',
      value: {
        fontSize: '1.5rem',
        lineHeight: '2rem',
        fontWeight: 'bold',
      },
    },
  },
  title: {
    lg: {
      description: 'Title Large',
      value: {
        fontSize: '1.375rem',
        lineHeight: '1.75rem',
        fontVariationSettings: '"OPEZ" 22',
      },
    },
    md: {
      description: 'Title Medium',
      value: {
        fontSize: '1rem',
        lineHeight: '1.5rem',
        letterSpacing: '.15px',
      },
    },
    sm: {
      description: 'Title Small',
      value: {
        fontSize: '0.875rem',
        lineHeight: '1.25rem',
        letterSpacing: '.1px',
      },
    },
  },
  label: {
    lg: {
      description: 'Label Large',
      value: {
        fontSize: '0.875rem',
        fontWeight: 'bold',
        lineHeight: '1.25rem',
        letterSpacing: '.1px',
      },
    },
    md: {
      description: 'Label Medium',
      value: {
        fontSize: '0.75rem',
        fontWeight: 'bold',
        lineHeight: '1rem',
        letterSpacing: '.5px',
      },
    },
    sm: {
      description: 'Label Small',
      value: {
        fontSize: '0.688rem',
        fontWeight: 'bold',
        lineHeight: '1rem',
        letterSpacing: '.5px',
      },
    },
  },
  body: {
    lg: {
      description: 'Body Large',
      value: {
        fontSize: '1rem',
        lineHeight: '1.5rem',
        letterSpacing: '.5px',
        fontVariationSettings: '"XTRA" 488',
      },
    },
    md: {
      description: 'Body Medium',
      value: {
        fontSize: '0.875rem',
        lineHeight: '1.25rem',
        letterSpacing: '.25px',
        fontVariationSettings: '"XTRA" 488',
      },
    },
    sm: {
      description: 'Body Small',
      value: {
        fontSize: '0.75rem',
        lineHeight: '1rem',
        letterSpacing: '.4px',
      },
    },
  },
});
