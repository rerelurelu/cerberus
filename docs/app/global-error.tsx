'use client'

import { vstack } from '@cerberus-design/styled-system/patterns'
import { css } from '@cerberus-design/styled-system/css'
import { Button } from '@cerberus-design/react'
import BrokenBoneIcon from './components/icons/broken-bone-icon'

// Error boundaries must be Client Components

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  // global-error must include html and body tags
  return (
    <html>
      <body>
        <div
          className={vstack({
            justify: 'center',
            h: '100dvh',
            pxi: '6',
            textAlign: 'center',
          })}
        >
          <span
            className={css({
              color: 'page.surface.100',
              maxW: '12rem',
              mb: 6,
              w: '1/3',
              lg: {
                mb: 10,
              },
            })}
          >
            <BrokenBoneIcon />
          </span>

          <h2
            className={css({
              textStyle: 'h1',
            })}
          >
            Cerb your enthusiasm!
          </h2>
          <p
            className={css({
              color: 'page.text.100',
              maxW: '66ch',
              pb: 8,
              textWrap: 'pretty',
            })}
          >
            Something went wrong. Cerberus has sounded the alarm and our demons
            are ready for action.
          </p>

          <Button onClick={() => reset()}>Try again</Button>
        </div>
      </body>
    </html>
  )
}
