import { splitProps } from '../helpers.mjs';
import { createRecipe } from './create-recipe.mjs';

const cardRootFn = createRecipe('cardRoot', {
  "variant": "outlined"
}, [])

const variantKeys = [
  "variant"
]

function splitVariantProps(props) {
  return splitProps(props, variantKeys)
}

export const cardRoot = Object.assign(cardRootFn, {
  __recipe__: true,
  variantKeys,
  variantMap: {
  "variant": [
    "outlined",
    "elevated",
    "filled"
  ]
},
  splitVariantProps,
})