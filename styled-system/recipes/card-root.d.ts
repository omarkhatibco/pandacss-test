/* eslint-disable */
import type { ConditionalValue } from '../types'
import type { Pretty } from '../types/helpers'

type CardRootVariant = {
  variant: "outlined" | "elevated" | "filled"
}

type CardRootVariantMap = {
  [key in keyof CardRootVariant]: Array<CardRootVariant[key]>
}

export type CardRootVariantProps = {
  [key in keyof CardRootVariant]?: ConditionalValue<CardRootVariant[key]>
}

interface CardRootRecipe {
  __type: CardRootVariantProps
  (props?: CardRootVariantProps): string
  variantMap: CardRootVariantMap
  variantKeys: Array<keyof CardRootVariant>
  splitVariantProps<Props extends CardRootVariantProps>(props: Props): [CardRootVariantProps, Pretty<Omit<Props, keyof CardRootVariantProps>>]
}


export declare const cardRoot: CardRootRecipe