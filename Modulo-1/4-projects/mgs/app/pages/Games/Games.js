import { GameCard } from "../../components/GameCard/GameCard";
import { getData } from "../../services/services";
import { cleanPage } from "../../utils/cleanPage";

const getGames = async () => {
  const games = await getData("games");
  printGames(games);
};

const printGames = (list) => {
  const section = document.createElement("section");
  section.classList.add("games-section");
  for (const item of list) {
    section.innerHTML += GameCard(item);
  }
  const app = document.querySelector("#app");
  cleanPage(app);
  app.appendChild(section);
};

export const Games = () => {
  getGames();
};
