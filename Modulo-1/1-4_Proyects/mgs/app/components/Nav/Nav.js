import "./Nav.css";

export const changeTheme = () => {
  const themeBtn = document.querySelector("#themeBtn");
  console.log(themeBtn);
  themeBtn.addEventListener(
    "click",
    () => document.body.classList.toggle("light") & changeText()
  );
};

const changeText = () => {
  const themeBtn = document.querySelector("#themeBtn");
  if (themeBtn.innerText === "Light") {
    themeBtn.innerText = "Dark";
  } else {
    themeBtn.innerText = "Light";
  }
};

export const Nav = () => `
<nav>
    <ul>
        <li>
            <a href="#" id="homelink">Home</a>
        </li>
        <li>
            <a href="#" id="gameslink">Games</a>
        </li>
        <li>
            <a href="#" id="characterslink">Characters</a>
        </li>

    </ul>
    <button id="themeBtn">Dark</button>
</nav>

`;
