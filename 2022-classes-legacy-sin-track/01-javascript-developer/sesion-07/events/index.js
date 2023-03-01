let counterValue = 0;
let operatorValue = 0;

// Logic for counter update
const counter = document.querySelector('#counter');

const setCounter = () => {
  counter.innerHTML = counterValue;
};

// Logic for sum button
const sumButton = document.querySelector('#sum');

const onClickSumButton = () => {
  counterValue += operatorValue;
  setCounter();
};

sumButton.addEventListener('click', onClickSumButton);

// Logic for substract button
const substractButton = document.querySelector('#substract');

const onClickSubstractButton = () => {
  counterValue -= operatorValue;
  setCounter();
};

substractButton.addEventListener('click', onClickSubstractButton);

// Logic for multiply button
const multiplyButton = document.querySelector('#multiply');

const onClickMultiplyButton = () => {
  counterValue *= operatorValue;
  setCounter();
};

multiplyButton.addEventListener('click', onClickMultiplyButton);

// Logic for operator value
const operatorInput = document.querySelector('#operator');

const onInputOperator = (event) => {
  const inputValue = event.target.valueAsNumber;

  if (Number.isNaN(inputValue)) {
    operatorValue = 0;
  } else {
    operatorValue = inputValue;
  }
};

operatorInput.addEventListener('input', onInputOperator);
