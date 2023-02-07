const fs = require('fs');

const avengers = [
  {
    name: 'Spiderman',
    power: 70
  },
  {
    name: 'Dr.Strange',
    power: 80
  },
  {
    name: 'Hulk',
    power: 100
  },
  {
    name: 'Spiderman',
    power: 70
  },
  {
    name: 'Dr.Strange',
    power: 80
  },
  {
    name: 'Hulk',
    power: 100
  },
  {
    name: 'Spiderman',
    power: 70
  },
  {
    name: 'Dr.Strange',
    power: 80
  },
  {
    name: 'Hulk',
    power: 100
  },
  {
    name: 'Spiderman',
    power: 70
  },
  {
    name: 'Dr.Strange',
    power: 80
  },
  {
    name: 'Hulk',
    power: 100
  }
]

const avengersJson = JSON.stringify(avengers)

fs.writeFile('avengers.json', avengersJson, () => {
  console.log('Avengers created')
})