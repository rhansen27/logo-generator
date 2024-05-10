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
    message: "Please enter up to 3 characters for the text in the logo",
  },
  {
    type: "input",
    name: "textColor",
    message:
      "Please enter the color that you would like your text to be in the logo",
  },
  {
    type: "list",
    name: "logoShape",
    message: "Please select the shape of the logo",
    choices: ["Circle", "Square", "Triangle"],
  },
  {
    type: "input",
    name: "logoColor",
    message: "Please enter the color you would like the logo to be",
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

// inquirer.prompt(questions).then((answers) => {
//   console.log(answers);
// });

async function init() {
  console.log("starting program");

  let svgString = "";
  let svg_file = "logo.svg";

  const answers = await inquirer.prompt(questions);

  if (answers.logoText.length > 3) {
    console.log("The text must be 3 characters or less");
    return;
  }

  console.log(
    `Creating a ${answers.logoShape} logo with text ${answers.logoText} and color ${answers.logoColor}`
  );

  if (answers.logoShape === "Circle") {
    const circle = new Circle();
    circle.setColor(answers.logoColor);
    svgString = circle.render();
  } else if (answers.logoShape === "Square") {
    const square = new Square();
    square.setColor(answers.logoColor);
    svgString = square.render();
  } else if (answers.logoShape === "Triangle") {
    const triangle = new Triangle();
    triangle.setColor(answers.logoColor);
    svgString = triangle.render();
  } else {
    console.log("Invalid shape");
    return;
  }

  let svg = new Svg();
  let text = answers.logoText;
  let color = answers.textColor;
  svg.setText(text, color);
  svg.shapeElement = svgString;
  writeToFile(svg_file, svg.render());
}
init();
