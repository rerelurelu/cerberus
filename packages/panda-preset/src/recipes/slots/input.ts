import {
  defineSlotRecipe,
  type RecipeConfig,
  type RecipeVariantRecord,
} from '@pandacss/dev'
import { focusStates, formStates } from '../shared/states'

/**
 * This module contains the input recipe.
 * @module
 */

/**
 * Styles for the Input component
 * @definition [ARIA Target Size](https://www.w3.org/WAI/WCAG21/Understanding/target-size.html#:~:text=Understanding%20SC%202.5.,%3ATarget%20Size%20(Level%20AAA)&text=The%20size%20of%20the%20target,Equivalent)
 * @definition [Button docs](https://cerberus.digitalu.design/react/button)
 */
export const input: RecipeConfig<RecipeVariantRecord> = defineSlotRecipe({
  slots: ['root', 'input', 'icon'],
  className: 'input',

  base: {
    root: {
      position: 'relative',
      pxi: '4',
      w: 'full',
    },
    input: {
      border: '1px solid',
      borderColor: 'action.border.initial',
      h: 'full',
      rounded: 'md',
      w: 'full',
      ...formStates,
      ...focusStates,
      _userInvalid: {
        borderColor: 'danger.border.initial',
      },
      _placeholderShown: {
        color: 'neutral.text.100',
      },
    },
    icon: {
      position: 'absolute',
      right: '0.5rem',
      top: '50%',
      transform: 'translateY(-50%)',
      zIndex: 'decorator',
      _peerInvalid: {
        color: 'danger.text.100',
      },
    },
  },

  variants: {
    size: {
      sm: {
        root: {
          h: '2rem',
        },
      },
      md: {
        root: {
          h: '2.5rem',
        },
      },
      lg: {
        root: {
          h: '3rem',
        },
      },
    },
  },

  defaultVariants: {
    size: 'sm',
  },
})
