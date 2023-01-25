const TECHNOLOGIES_LIST = ['JavaScript', 'Node', 'SQL', 'React'];

const getTechnologyTemplate = (techName) => {
  return `<li class="technology">${techName}</li>`;
};

const technologiesList = document.querySelector('#technologies-list');

for (let i = 0; i < TECHNOLOGIES_LIST.length; i++) {
  const technology = TECHNOLOGIES_LIST[i];
  const template = getTechnologyTemplate(technology);
  technologiesList.innerHTML += template;
}
