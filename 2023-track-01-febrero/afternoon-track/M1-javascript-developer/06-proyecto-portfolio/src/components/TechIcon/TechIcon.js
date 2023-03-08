import "./TechIcon.css";

export const TechIcon = (icon, desc) => {
  return `
    <img class="tech-icon" src=${icon} alt=${desc} />
    `;
};
