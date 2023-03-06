import './button.css'

export const Button = (icon, text) => `
  <button class="arm-button">
    <img src=${icon} alt='${text} icon'/>
    <p>${text}</p>
  </button>
`