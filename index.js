import inquirer from "inquirer";
import { Circle, Square, Triangle } from "./lib/shape.js";
import fs from "fs";

class Svg {
  constructor() {
    this.textElement = "";
    this.shapeElement = "";
  }

  render() {
    return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">${this.textElement}${this.shapeElement}</svg>`;
  }
  setText(text, color) {
    this.textElement = `<text x="150" y="125" font-size="60" fill="${color}" text-anchor="middle">${text}</text>`;
  }
}

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

function writeToFile(fileName, data) {
  console.log(`Attempting to write ${fileName} with ${data}`);
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log("File written successfully");
  });
}

inquirer.prompt(questions).then((answers) => {
  console.log(answers);
});
