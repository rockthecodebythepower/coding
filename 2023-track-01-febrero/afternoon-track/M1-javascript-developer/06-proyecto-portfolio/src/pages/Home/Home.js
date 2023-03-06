import "./Home.css";
import { Avatar } from "../../components/Avatar/Avatar";

export const Home = () => {
  const main = document.querySelector("main");
  main.innerHTML = `
    <section class="home">
        <div>
            <h2>
            Hi 👋🏻, My name is <span>Peter Parker</span>
            </h2>
            <h2>I build things for web</h2>
        </div>
        <div>
        ${Avatar("/images/portrait.jpg", "Peter Parker Portrait")}
        </div>
    </section>
    
    `;
};
