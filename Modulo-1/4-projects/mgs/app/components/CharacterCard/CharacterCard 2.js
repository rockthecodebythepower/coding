import "./CharacterCard.css";

export const CharacterCard = (item) => `
<div class="character">
    <img src=${item.image} alt=${item.name} />
</div>
`;
