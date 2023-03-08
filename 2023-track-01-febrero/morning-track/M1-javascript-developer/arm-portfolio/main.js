import './style.css'

import { Footer } from './src/components/Footer/Footer'
import { changeTheme, Navbar } from './src/components/Navbar/Navbar'
import { Divider } from './src/components/Divider/Divider'
import { Home } from './src/pages/home/Home'
import { linkPage } from './src/utils/linkPage'
import { Projects } from './src/pages/Projects/Projects'


const header = document.querySelector('header')
header.innerHTML = Navbar()
const footer = document.querySelector('footer')
footer.innerHTML = Footer()

linkPage('#homeLink', Home)
linkPage('#projectsLink', Projects)

Home()

changeTheme()

footer.insertAdjacentHTML('beforebegin', Divider())