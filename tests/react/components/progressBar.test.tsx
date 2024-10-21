import { describe, test, expect, afterEach } from 'bun:test'
import { cleanup, render, screen } from '@testing-library/react'
import { ProgressBar } from '@cerberus-design/react'
import { setupStrictMode } from '@/utils'

describe('ProgressBar', () => {
  setupStrictMode()
  afterEach(cleanup)

  test('should render a progress bar element', () => {
    render(<ProgressBar id="test" label="test label" now={0} />)
    expect(screen.getByRole('progressbar')).toBeTruthy()
  })

  test('should render a progress bar element with a now', () => {
    render(<ProgressBar id="test" label="test label" now={50} />)
    expect(
      screen.getByRole('progressbar').getAttribute('aria-valuenow'),
    ).toEqual('50')
  })

  test('should render a progress bar element with an indeterminate state', () => {
    render(<ProgressBar id="test" label="test label" indeterminate />)
    expect(
      screen.getByRole('progressbar').getAttribute('aria-valuenow'),
    ).toEqual('0')
  })
})
