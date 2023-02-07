const puppeteer = require('puppeteer')
const fs = require('fs')

const URL = 'https://www.starwars.com/databank'

const initialSelector = '.building-block-wrapper'


const scrapping = async () => {

  const browser = await puppeteer.launch()

  const page = await browser.newPage()

  await page.goto(URL)

  const data = await page.$$eval(initialSelector, (nodes) => {
    return nodes.map((node) => ({
      name: node.querySelector('.title').innerHTML
    }))
  })

  fs.writeFile('./data.json', JSON.stringify(data), err => err ? console.log(err) : console.log('Created!'))

  await browser.close();

}

scrapping()
