import "./style.css";

import { Header } from "./src/components/Header/Header";
import { Footer } from "./src/components/Footer/Footer";
import { Home } from "./src/pages/Home/Home";
import { TechStack } from "./src/pages/TechStack/TechStack";

import { linkPage } from "./src/utils/linkpage";

//Inyectamos el template de Header en el elemento header que tenemos en index.html
document.querySelector("header").innerHTML = Header();
//Inyectamos el template de Footer en el elemento footer que tenemos en index.html
document.querySelector("footer").innerHTML = Footer();

//Por defecto, lo primero que se pinta es la pagina home
Home();

//Ejecutamos linkpage para darle vida a nuestros anchor y que pinten cada uno su pagina correspondiente
linkPage("#homelink", Home);
linkPage("#techlink", TechStack);
