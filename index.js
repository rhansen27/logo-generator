import inquirer from "inquirer";
import { Circle, Square, Triangle, Shape } from "./lib/shape.js";
import fs from "fs/promises";

let shape;

// inquirer questions to get information from the user
const questions = [
  {
    type: "input",
    name: "logoText",
    message: "Please enter up to 3 characters for the text in the logo:",
  },
  {
    type: "input",
    name: "textColor",
    message:
      "Please enter the color that you would like your text to be in the logo:",
  },
  {
    type: "list",
    name: "logoShape",
    message: "Please select the shape of the logo:",
    choices: ["Circle", "Square", "Triangle"],
  },
  {
    type: "input",
    name: "logoColor",
    message: "Please enter the color you would like the logo to be:",
  },
];
// main function
async function init() {
  console.log("starting program");
  // start inquirer prompt
  const answers = await inquirer.prompt(questions);
  // validation on the text input
  console.log(answers);
  if (answers.logoText.length > 3) {
    console.log("The text must be 3 characters or less");
    return;
  }
  // logging the answers to the console
  console.log(
    `Creating a ${answers.logoShape} logo with text ${answers.logoText} and color ${answers.logoColor}`
  );
  // shape generation based on user input

  if (answers.logoShape === "Circle") {
    shape = new Circle(answers.logoColor, answers.textColor, answers.logoText);
    createLogo(shape, "circle_logo.svg");
  } else if (answers.logoShape === "Square") {
    shape = new Square(answers.logoColor, answers.textColor, answers.logoText);
    createLogo(shape, "square_logo.svg");
  } else if (answers.logoShape === "Triangle") {
    shape = new Triangle(
      answers.logoColor,
      answers.textColor,
      answers.logoText
    );
    createLogo(shape, "triangle_logo.svg");
  } else {
    console.log("Invalid shape");
    return;
  }

  async function createLogo(shape, fileName) {
    await fs.writeFile(`./examples/${fileName}`, shape.render());
    console.log(`Logo created named ${fileName}`);
  }
}
init();
