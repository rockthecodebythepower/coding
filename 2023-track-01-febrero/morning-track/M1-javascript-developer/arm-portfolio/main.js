import './style.css'

import { Footer } from './src/components/Footer/Footer'
import { changeTheme, Navbar } from './src/components/Navbar/Navbar'


const header = document.querySelector('header')
header.innerHTML = Navbar()
const footer = document.querySelector('footer')
footer.innerHTML = Footer()

changeTheme()