const fs = require('fs')

function convertJsonToCsv(jsonData) {
  let csv = ''

  let headers = Object.keys(jsonData[0])
  csv += headers.join(',') + '\n'

  jsonData.forEach(row => {
    headers.forEach((header, index) => {
      if (index > 0) {
        csv += ','
      }
      csv += row[header]
    })
    csv += '\n'
  });
  return csv
}

let data = [
  {
    name: 'Luke', surname: 'Skywalker'
  },
  {
    name: 'Han', surname: 'Solo'
  }
]

let csvData = convertJsonToCsv(data)
console.log(csvData)

fs.writeFile('data.csv', csvData, (error) => {
  if (error) {
    console.log('Error', error)
  } else {
    console.log('File csv created!')
  }
})