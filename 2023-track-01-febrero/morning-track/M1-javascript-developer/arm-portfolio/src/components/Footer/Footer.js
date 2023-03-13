import './footer.css'
import { Button } from '../Button/Button'

export const Footer = () => `
  <div>
    ${Button('/public/icons/github.png', 'GitHub')}
    ${Button('/public/icons/mail.png', 'Email')}
    ${Button('/public/icons/whats.png', 'WhatsApp')}
  </div>
`