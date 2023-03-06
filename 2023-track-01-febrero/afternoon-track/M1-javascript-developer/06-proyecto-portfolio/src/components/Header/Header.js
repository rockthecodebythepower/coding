import "./Header.css";

export const Header = () => {
  return `
    <nav>
        <h2>Peter Parker</h2>
        <ul>
            <li>
                <a href="#" id="homelink">Home</a>
            </li>
            <li>
                <a href="#" id="techlink">Tech Stack</a>
            </li>
            <li>
                <a href="#" id="projectslink">Projects</a>
            </li>
            <li>
                <a href="#">
                    <img src="/icons/github.png" alt="GitHub icon"/>
                </a>
            </li>
            <li>
                <a href="#">
                    <img src="/icons/twitter.png" alt="Twitter icon"/>
                </a>
            </li>
            <li>
                <a href="#">
                    <img src="/icons/linkedin.png" alt="LinkedIn icon"/>
                </a>
            </li>
        </ul>
    </nav>
    `;
};

const template = Header();
