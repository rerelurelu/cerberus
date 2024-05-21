/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { ContainerProperties } from '../patterns/container'
import type { HTMLCerberusProps } from '../types/jsx'
import type { DistributiveOmit } from '../types/system-types'

export interface ContainerProps
  extends ContainerProperties,
    DistributiveOmit<HTMLCerberusProps<'div'>, keyof ContainerProperties> {}

export declare const Container: FunctionComponent<ContainerProps>
