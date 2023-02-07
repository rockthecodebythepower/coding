import fs from 'fs'
import inquirer from 'inquirer'

inquirer.prompt([
  {
    type: 'list',
    name: 'language',
    message: '¿Qué lenguaje estás usando?',
    choices: ['Javascript', 'Typescript']
  },
  {
    type: 'confirm',
    name: 'template',
    message: '¿Quieres un template?',
  },
  {
    type: 'input',
    name: 'projectName',
    message: 'Nombre del proyecto:',
    when: (answers) => answers.template
  }
]).then((answers) => {
  if (answers.template) {
    const projectName = answers.projectName
    const language = answers.language

    fs.mkdirSync(projectName)

    fs.writeFileSync(`${projectName}/.prettierrc`,
      JSON.stringify({
        semi: false,
        singleQuote: true
      }))

    fs.writeFileSync(`${projectName}/.eslintrc`,
      JSON.stringify({
        extends: ["eslint:recommended"]
      })
    )

    fs.writeFileSync(`${projectName}/index.html`, "<html></html>")
    fs.writeFileSync(`${projectName}/style.css`, "body: {color: 'red'}")

    if (language === "Javascript") {
      fs.writeFileSync(`${projectName}/index.js`, "console.log('Hello Rockers')")
    } else {
      fs.writeFileSync(`${projectName}/index.ts`, "console.log('Hello Rockers TS')")
    }
  }
})