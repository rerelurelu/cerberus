import type { Prominence, SemanticToken } from './types'
import { formatSemanticTokenValue } from '../../tokens'

/**
 * This module is a collection of success tokens that are used to generate the theme.
 * @module successTokens
 */

type Prominences = Exclude<Prominence, 300>

export interface SuccessTokens {
  readonly success: {
    readonly border: {
      readonly initial: SemanticToken
    }
    readonly bg: {
      readonly initial: SemanticToken
      readonly hover: SemanticToken
      readonly active: SemanticToken
    }
    readonly ghost: {
      readonly initial: SemanticToken
      readonly hover: SemanticToken
      readonly active: SemanticToken
    }
    readonly surface: {
      readonly initial: SemanticToken
      readonly 100: SemanticToken
      readonly 200: SemanticToken
    }
    readonly text: {
      readonly [P in Prominences]: SemanticToken
    }
  }
}

export const successTokens: SuccessTokens = {
  success: {
    border: {
      initial: formatSemanticTokenValue('border.success.initial'),
    },

    bg: {
      initial: formatSemanticTokenValue('background.success.initial'),
      hover: formatSemanticTokenValue('background.success.hover'),
      active: formatSemanticTokenValue('background.success.active'),
    },

    ghost: {
      initial: formatSemanticTokenValue('ghost.success.initial'),
      hover: formatSemanticTokenValue('ghost.success.hover'),
      active: formatSemanticTokenValue('ghost.success.active'),
    },

    surface: {
      initial: formatSemanticTokenValue('surface.success.initial'),
      100: formatSemanticTokenValue('surface.success.100'),
      200: formatSemanticTokenValue('surface.success.200'),
    },

    text: {
      initial: formatSemanticTokenValue('text.success.initial'),
      100: formatSemanticTokenValue('text.success.100'),
      200: formatSemanticTokenValue('text.success.200'),
      inverse: formatSemanticTokenValue('text.success.inverse'),
      static: formatSemanticTokenValue('text.success.static'),
    },
  },
}
