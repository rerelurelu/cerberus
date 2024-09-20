'use client'

import { cx } from '@cerberus/styled-system/css'
import { vstack } from '@cerberus/styled-system/patterns'
import { type InputHTMLAttributes } from 'react'
import { Show } from './Show'
import { fileUploader } from '@cerberus/styled-system/recipes'
import { $cerberusIcons } from '../config/defineIcons'
import { Avatar } from './Avatar'

export interface FileUploaderProps
  extends InputHTMLAttributes<HTMLInputElement> {
  heading?: string
  name: string
}

export function FileUploader(props: FileUploaderProps) {
  const styles = fileUploader()
  const Icon = $cerberusIcons.fileUploader

  return (
    <div
      className={cx(
        vstack({
          justify: 'center',
        }),
        styles.container,
      )}
    >
      <div className={styles.icon}>
        <Avatar
          gradient="light-purple"
          ariaLabel=""
          icon={<Icon />}
          size="md"
          src=""
        />
      </div>

      <label
        className={cx(
          vstack({
            justify: 'center',
          }),
          styles.label,
        )}
        htmlFor={props.name}
      >
        <Show when={Boolean(props.heading)}>
          <p className={styles.heading}>{props.heading}</p>
        </Show>
        Import {props.accept?.replace(',', ', ')} files
        <p className={styles.description}>Click to select files</p>
        <input
          {...props}
          className={cx(props.className, styles.input)}
          type="file"
        />
      </label>
    </div>
  )
}
