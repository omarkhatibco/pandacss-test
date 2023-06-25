/* eslint-disable */
import type { ConditionalValue } from '../types'
import type { Pretty } from '../types/helpers'

type ButtonRecipeVariant = {
  visual: "funky" | "edgy"
size: "sm" | "lg"
shape: "square" | "circle"
}

type ButtonRecipeVariantMap = {
  [key in keyof ButtonRecipeVariant]: Array<ButtonRecipeVariant[key]>
}

export type ButtonRecipeVariantProps = {
  [key in keyof ButtonRecipeVariant]?: ConditionalValue<ButtonRecipeVariant[key]>
}

interface ButtonRecipeRecipe {
  __type: ButtonRecipeVariantProps
  (props?: ButtonRecipeVariantProps): string
  variantMap: ButtonRecipeVariantMap
  variantKeys: Array<keyof ButtonRecipeVariant>
  splitVariantProps<Props extends ButtonRecipeVariantProps>(props: Props): [ButtonRecipeVariantProps, Pretty<Omit<Props, keyof ButtonRecipeVariantProps>>]
}

/** The styles for the Button component */
export declare const button: ButtonRecipeRecipe