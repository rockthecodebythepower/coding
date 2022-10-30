import { router } from './routes/route';

window.addEventListener("click", e => {
  if (e.target.matches("[data-link]")) {
    e.preventDefault();
    history.pushState("", "", e.target.href);
    router();
  }
})

window.addEventListener("popstate", router);
window.addEventListener("DOMContentLoaded", router);