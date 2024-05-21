import { describe, test, expect, afterEach } from 'bun:test'
import { cleanup, render, screen } from '@testing-library/react'
import { Button } from '@cerberus-design/react'
import { setupStrictMode } from '@/utils'

describe('Button', () => {
  setupStrictMode()
  afterEach(cleanup)

  test('should render a button element', () => {
    render(<Button>it works</Button>)
    expect(screen.getByText(/it works/i)).toBeTruthy()
  })

  test('should render a action button', () => {
    render(<Button>it works</Button>)
    expect(
      screen
        .getByText(/it works/i)
        .classList.contains('cerberus-button--palette_action'),
    ).toBeTrue()
  })

  test('should render a danger button', () => {
    render(<Button palette="danger">it works</Button>)
    expect(
      screen
        .getByText(/it works/i)
        .classList.contains('cerberus-button--palette_danger'),
    ).toBeTrue()
  })

  test('should render a text button', () => {
    render(<Button usage="text">it works</Button>)
    expect(
      screen
        .getByText(/it works/i)
        .classList.contains('cerberus-button--usage_text'),
    ).toBeTrue()
  })

  test('should render an outline button', () => {
    render(<Button usage="outline">it works</Button>)
    expect(
      screen
        .getByText(/it works/i)
        .classList.contains('cerberus-button--usage_outline'),
    ).toBeTrue()
  })

  test('should render a filled button', () => {
    render(<Button usage="filled">it works</Button>)
    expect(
      screen
        .getByText(/it works/i)
        .classList.contains('cerberus-button--usage_filled'),
    ).toBeTrue()
  })

  test('should render a sharp button', () => {
    render(<Button shape="sharp">it works</Button>)
    expect(
      screen
        .getByText(/it works/i)
        .classList.contains('cerberus-button--shape_sharp'),
    ).toBeTrue()
  })

  test('should render a rounded button', () => {
    render(<Button shape="rounded">it works</Button>)
    expect(
      screen
        .getByText(/it works/i)
        .classList.contains('cerberus-button--shape_rounded'),
    ).toBeTrue()
  })
})
