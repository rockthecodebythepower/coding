// Pages
import { template as home, listener as eventHome } from '../pages/Home'
import { template as portfolio } from '../pages/Portfolio'
import { template as about } from '../pages/About'

// Componente transversal
import { addNavbar } from '../components/Navbar'

export const routes = {
  '/': { title: 'Home', render: home, listener: eventHome },
  '/portfolio': { title: 'Portfolio', render: portfolio },
  '/about': { title: 'About', render: about },
}


export const router = () => {
  let page = routes[location.pathname];
  if (page) {
    document.title = page.title;
    document.querySelector('#app').innerHTML = page.render();
    addNavbar()

    if (page.title === 'Home') page.listener();
  } else {
    history.replaceState("", "", "/");
    router()
  }
}