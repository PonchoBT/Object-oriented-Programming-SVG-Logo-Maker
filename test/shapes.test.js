const { Triangle, Circle, Square } = require('../lib/shapes');

// Unit tests for the Triangle class
describe('Triangle', () => {
  test('renders triangle SVG', () => {
    // Creating an instance of Triangle with color 'red'
    const triangle = new Triangle('red');
    // Verifying that the generated SVG contains the <polygon> tag
    expect(triangle.render()).toContain('<polygon');
  });
});

// Unit tests for the Circle class
describe('Circle', () => {
  test('renders circle SVG', () => {
    // Creating an instance of Circle with color 'blue'
    const circle = new Circle('blue');
    // Verifying that the generated SVG contains the <circle> tag
    expect(circle.render()).toContain('<circle');
  });
});

// Unit tests for the Square class
describe('Square', () => {
  test('renders square SVG', () => {
    // Creating an instance of Square with color 'green'
    const square = new Square('green');
    // Verifying that the generated SVG contains the <rect> tag
    expect(square.render()).toContain('<rect');
  });
});
