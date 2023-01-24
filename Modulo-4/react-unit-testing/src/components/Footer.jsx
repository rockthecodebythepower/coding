export const socialLogos = [
  { link: 'https://instagram.com', src: 'instagram', alt: 'instagram' },
  { link: 'https://github.com', src: 'github', alt: 'github' }
]

const Footer = () => {
  return (
    <footer>
      <ul>
        {socialLogos.map((logo, idx) => (
          <li key={idx}>
            <a href={logo.link}>
              <img src={logo.src} alt={logo.alt} />
            </a>
          </li>
        ))}
      </ul>
      <p>
        Create with love by @aRiveraMerida <span role="img">🚀</span>
      </p>
    </footer>
  )
}

export default Footer;