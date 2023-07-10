import { RecipeVariantProps } from '../styled-system/css';
import { styled, HTMLStyledProps } from '../styled-system/jsx';
import { cardRoot } from '../styled-system/recipes';

// import { cardRootStyle } from './CardRoot.css';
import { FC } from 'react';

const CardWrapper = styled('div', cardRoot);

type CardRootVariants = RecipeVariantProps<typeof cardRoot>;

export type CardRootProps = HTMLStyledProps<'div'> & CardRootVariants;

export const CardRoot: FC<CardRootProps> = (props) => {
  return <CardWrapper {...props} />;
};
