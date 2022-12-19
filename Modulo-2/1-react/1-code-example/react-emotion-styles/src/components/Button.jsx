import React from 'react'
import UiButton from '../styles/components/UiButton'

const Button = ({ action }) => {
  return (
    <UiButton onClick={action}>Theme</UiButton>
  )
}

export default Button