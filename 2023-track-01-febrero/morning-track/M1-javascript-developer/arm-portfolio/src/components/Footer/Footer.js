import './footer.css'
import { Button } from '../Button/Button'

export const Footer = () => `
  <h2>Conctact</h2>
  <div>
    ${Button('/public/icons/github.png', 'GitHub')}
    ${Button('/public/icons/mail.png', 'Email')}
    ${Button('/public/icons/whats.png', 'WhatsApp')}
  </div>
`