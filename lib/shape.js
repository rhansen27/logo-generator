// create the basic shape class
class Shape {
  constructor(backgroundColor, foregroundColor, text) {
    this.backgroundColor = backgroundColor;
    this.foregroundColor = foregroundColor;
    this.text = text;
  }
}
// create the classes for the shapes and returns the SVG code for each shape
class Circle extends Shape {
  constructor(backgroundColor, foregroundColor, text) {
    super(backgroundColor, foregroundColor, text);
  }
  render() {
    return `
        <svg height="200" width="300" xmlns="http://www.w3.org/2000/svg">
            <circle r="45" cx="50" cy="50" fill="${this.backgroundColor}" stroke = "${this.foregroundColor}" stroke-width ="1" />
            <text x="20" y="60" font-weight='bold' fill= '${this.foregroundColor}' font-size='30'>${this.text}</text>
        </svg>`;
  }
}
class Square extends Shape {
  constructor(backgroundColor, foregroundColor, text) {
    super(backgroundColor, foregroundColor, text);
  }
  render() {
    return `
        <svg height="200" width="300" xmlns="http://www.w3.org/2000/svg">
            <rect width="150" height="150" x="10" y="10" style="fill:${this.backgroundColor};stroke-width:1;stroke:${this.foregroundColor}" />
            <text x="50" y="100" font-weight='bold' fill= '${this.foregroundColor}' font-size='30'>${this.text}</text>
        </svg>`;
  }
}
class Triangle extends Shape {
  constructor(backgroundColor, foregroundColor, text) {
    super(backgroundColor, foregroundColor, text);
  }
  render() {
    return `
        <svg height="200" width="300" xmlns="http://www.w3.org/2000/svg">
            <polygon points="100,10 150,190 50,190" style="fill:${this.backgroundColor}; stroke:${this.foregroundColor}; stroke-width:1;"/>
            <text x="70" y="150" font-weight='bold' fill= '${this.foregroundColor}' font-size='30'>${this.text}</text>
        </svg>`;
  }
}

// exports the classes
export { Shape, Circle, Square, Triangle };
