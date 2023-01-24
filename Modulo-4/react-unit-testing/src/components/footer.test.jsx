/**
* @vitest-environment jsdom
*/

import { describe, test } from "vitest";
import { render, screen, waitFor } from '@testing-library/react'

import Footer, { socialLogos } from './Footer'


describe('Footer', () => {
  test('Should be render correct elements', () => {
    render(<Footer />)
    expect(screen.getByText('Create with love by @aRiveraMerida')).toBeInTheDocument()
  })

  test('Should be render logos', () => {
    render(<Footer />)
    waitFor(() => socialLogos.forEach((logo) => {
      expect(screen.getAllByAltText(logo.alt)).toBeVisible()
    }))
  })
})

