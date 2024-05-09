import inquirer from "inquirer";
import { Circle, Square, Triangle } from "./lib/shape.js";

const questions = [
  {
    type: "input",
    name: "logoText",
    prompt: "Please enter up to 3 characters for the text in the logo",
  },
  {
    type: "input",
    name: "textColor",
    prompt:
      "Please enter the color that you would like your text to be in the logo",
  },
  {
    type: "list",
    name: "logoShape",
    prompt: "Please select the shape of the logo",
    choices: ["Circle", "Square", "Triangle"],
  },
  {
    type: "input",
    name: "logoColor",
    prompt: "Please enter the color you would like the logo to be",
  },
];
inquirer.prompt(questions).then((answers) => {
  console.log(answers);
});
