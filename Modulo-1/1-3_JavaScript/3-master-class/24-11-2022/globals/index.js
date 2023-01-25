const posX = document.querySelector('#pos-x');
const posY = document.querySelector('#pos-y');

const onMouseMove = (event) => {
  console.log(event);
  posX.innerHTML = event.x;
  posY.innerHTML = event.y;
};

window.addEventListener('mousemove', onMouseMove);

window.addEventListener('mousemove', onMouseMove);
