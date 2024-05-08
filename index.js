import inquirer from "inquirer"; 


const questions = [
  {
    type: 'input',
    name: 'letters',
    message: 'What are the three letters you would like in your logo'
  },
  {
    type: 'input',
    name: 'color',
    message: 'What color would you like your logo to be?'
  },
  {
    type: 'list',
    name: 'shape',
    message: 'What shape would you like your logo to be?',
    choices: ['Square', 'Circle', 'Triangle'] 
  }
]

function init() {
  inquirer
  .prompt(questions)
  .then((answers) => {
      console.log(answers)
    })
}

init();
