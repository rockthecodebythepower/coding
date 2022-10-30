import "./GameCard.css";

export const GameCard = (item) => ` 
<figure class="card" style="background: url(${item.cover}) no-repeat center center;
background-size: cover"> 
    <div class="description">
    <h2>${item.title}</h2>
    <p>${item.platform} - ${item.year}</p>
    </div>
</figure>
`;
