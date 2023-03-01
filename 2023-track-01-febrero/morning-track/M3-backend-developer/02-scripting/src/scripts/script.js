const puppeteer = require('puppeteer')

const { connect } = require('../database/connect')

const ProductModel = require('../model/product.model')


const scrapeProducts = async () => {
  await connect()

  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
    args: ['--star-maximized'],
    // slowMo: 250,
  })

  const page = await browser.newPage()

  await page.goto(process.env.SCRAPE_URL)

  await page.type('#twotabsearchtextbox', 'Marvel Hot Toys 1/6')

  await page.click('#nav-search-submit-button')

  await page.waitForSelector('.s-pagination-next')

  const title = await page.$$eval('  h2 span.a-color-base', (nodes) =>
    nodes.map((n) => n.innerText)
  )

  const price = await page.$$eval('span.a-price[data-a-color="base"] span.a-offscreen', (nodes) =>
    nodes.map((n) => n.innerText)
  )

  const amazonProduct = title.map((value, index) => {
    return {
      title: title[index],
      price: price[index]
    }
  })

  amazonProduct.map(async (data) => {
    const dataModel = new ProductModel(data)
    try {
      await dataModel.save()
      console.log(`Succesfully saved ${dataModel.title} to the database 🤘🏽`)
    } catch (error) {
      console.error(`Failed to saved ${dataModel.title} to the database ❌`)
    }
  })

  await browser.close()

  console.log('All saved Succesfully - Live Rock 🧙🏽‍♂️')
}

scrapeProducts()