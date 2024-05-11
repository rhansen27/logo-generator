import { Circle, Square, Triangle } from "shape";

describe("Making a Triangle", () => {
  test('Making a Triangle with the background color blue, the text "tst" and the foregroundColor black', () => {
    const shape = new Triangle("blue", "black", "tst");

    expect(shape.render())
      .toEqual(`<svg height="200" width="300" xmlns="http://www.w3.org/2000/svg">
            <polygon points="100,10 150,190 50,190" style="fill:blue; stroke:black; stroke-width:1;"/>
            <text x="70" y="150" font-weight='bold' fill= 'black' font-size='30'>tst</text>
        </svg>
        `);
  });

  describe("Making a Square", () => {
    test('Making a Square with the background color red, the text "tst" and the foregroundColor black', () => {
      const shape = new Square("red", "black", "tst");

      expect(shape.render())
        .toEqual(`<svg height="200" width="200" xmlns="http://www.w3.org/2000/svg">
            <rect width="200" height="200" style="fill:red; stroke:black; stroke-width:1;"/>
            <text x="70" y="150" font-weight='bold' fill= 'black' font-size='30'>tst</text>
        </svg>
        `);
    });
  });

  describe("Making a Circle", () => {
    test('Making a Circle with the background color green, the text "tst" and the foregroundColor black', () => {
      const shape = new Circle("green", "black", "tst");

      expect(shape.render())
        .toEqual(`<svg height="200" width="200" xmlns="http://www.w3.org/2000/svg">
                <circle cx="100" cy="100" r="100" style="fill:green; stroke:black; stroke-width:1;"/>
                <text x="70" y="150" font-weight='bold' fill= 'black' font-size='30'>tst</text>
            </svg>
            `);
    });
  });
});
