import "./style.css";
import { Nav } from "./components/Nav/Nav";
import { Footer } from "./components/Footer/Footer";
import { Home } from "./pages/Home/Home";
import { Games } from "./pages/Games/Games";
import { Characters } from "./pages/Characters/Characters";
import { changeTheme } from "./components/Nav/Nav";
import { linkPage } from "./utils/linkPage";

const header = document.querySelector("header");
header.innerHTML = Nav();

const footer = document.querySelector("footer");
footer.innerHTML = Footer();

Home();

linkPage("#homelink", Home)
linkPage("#gameslink", Games);
linkPage("#characterslink", Characters)

changeTheme()