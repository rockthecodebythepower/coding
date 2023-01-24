/**
* @vitest-environment jsdom
*/

import { describe, test } from "vitest";
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import App from './App'

describe('App', () => {
  test('should be render the correct elements', () => {
    render(<App />)
    expect(screen.getByAltText('giphy')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Type your name')).toBeInTheDocument()
    expect(screen.getByText('Hello,')).toBeInTheDocument()
  })

  test('should be render the correct alt image', () => {
    render(<App />)
    expect(screen.getByRole('img')).toHaveAttribute('alt', 'giphy')
  })


  test('should be render the correct name when the user filled', () => {
    render(<App />)

    const inputElement = screen.getByPlaceholderText('Type your name')
    expect(screen.getByText('Hello,')).toBeInTheDocument()

    userEvent.type(inputElement, 'Alberto')

    waitFor(() => expect(screen.queryByText('Hello, Alberto')).toBeInTheDocument())
  })

})