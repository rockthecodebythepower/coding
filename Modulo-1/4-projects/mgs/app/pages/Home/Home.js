import "./Home.css";
import { cleanPage } from "../../utils/cleanPage";

export const Home = () => {
  const app = document.querySelector("#app");
  cleanPage(app);
  app.innerHTML = `
  <section class="home">
    <h1>Metal Gear Solid Saga</h1>
    <img src="https://i.pinimg.com/originals/58/a1/a9/58a1a9631850703e140b8e9b97b5e461.gif" alt="Snake"/>
  </section>`;
};
