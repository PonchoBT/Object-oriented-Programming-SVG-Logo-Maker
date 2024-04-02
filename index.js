// Import the necessary modules
const fs = require('fs');
const inquirer = require('inquirer');
const { Circle, Triangle, Square } = require("./lib/shapes");

// Function to prompt the user for input
async function getUserInput() {
  // Use inquirer to ask the user for input
  return await inquirer.prompt([
    {
      type: 'input',
      name: 'text',
      message: 'Enter up to three characters for the text:',
      // Validate that the input length is not more than three characters
      validate: value => value.length <= 3 ? true : 'Please enter up to three characters.'
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Enter the text color (keyword or hexadecimal number):'
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Choose a shape:',
      choices: ['Circle', 'Triangle', 'Square']
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Enter the shape color (keyword or hexadecimal number):'
    }
  ]);
}

// Function to generate the logo SVG based on user input
function generateLogo(userInput) {
  // Instantiate the selected shape with the specified color
  const shape = new (eval(userInput.shape))(userInput.shapeColor);
  // Render the SVG for the shape
  const shapeSVG = shape.render();
  // Generate the SVG for the text
  const textSVG = `<text x="150" y="130" font-size="35" fill="${userInput.textColor}" text-anchor="middle">${userInput.text}</text>`;

  // Combine the shape and text SVGs into a single SVG
  return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">
            <!-- Add the shape first -->
            ${shapeSVG}
            <!-- Then add the text -->
            ${textSVG}
          </svg>`;
}

// Main function to orchestrate the entire process
async function main() {
  try {
    // Get user input
    const userInput = await getUserInput();
    // Generate logo SVG based on user input
    const logoSVG = generateLogo(userInput);
    // Write the SVG to a file
    fs.writeFileSync('logo.svg', logoSVG);
    // Log success message
    console.log('Generated logo.svg');
  } catch (error) {
    // Log any errors that occur during the process
    console.error('Error:', error.message);
  }
}

// Call the main function to start the process
main();
