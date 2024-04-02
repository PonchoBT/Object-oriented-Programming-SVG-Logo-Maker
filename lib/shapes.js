class Shape {
    constructor(color) {
      this.color = color;
    }
    
    render() {
      throw new Error('Render method must be implemented by subclass');
    }
  }
  
  class Triangle extends Shape {
    render() {
      // Implement rendering logic for triangle
      return `<polygon points="0,200 300,200 150,0" fill="${this.color}"></polygon>`;
    }
  }
  
  class Circle extends Shape {
    render() {
      // Implement rendering logic for circle
      return `<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${this.color}"></circle>`;
    }
  }
  
  class Square extends Shape {
    render() {
      // Implement rendering logic for square
      return `<rect x="50" height="200" width="200" fill="${this.color}"></rect>`;
    }
  }
  
  module.exports = { Triangle, Circle, Square };
  