const fs = require('fs');

fs.readFile('avengers.json', (error, avengers) => {
  if (error) {
    console.log('Not found this file')
  } else {
    const parsedAvengers = JSON.parse(avengers)
    console.log(parsedAvengers)
  }
})