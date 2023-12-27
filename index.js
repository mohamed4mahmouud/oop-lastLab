class Shape {
  constructor(name, sides, sideLength) {
    this.name = name;
    this.sides = sides;
    this.sideLength = sideLength;
  }

  calcPerimeter() {
    const perimeter = this.sides * this.sideLength;
    console.log(`perimeter of ${this.name} = ${perimeter}`);
  }
}
const newShape = new Shape("square", 4, 5);
newShape.calcPerimeter();

const triangle = new Shape("triangle", 3, 3);
triangle.calcPerimeter();

class Square extends Shape {
  constructor(sideLength) {
    super("square", 4, sideLength);
  }

  calcArea() {
    const area = Math.pow(this.sideLength, 2);
    console.log(`Area of square = ${area}`);
  }
}

const square = new Square(6);
square.calcPerimeter();
square.calcArea();

class Triple {
  static customName = "Tripler";
  static description = "I triple any number you provide";

  static calculate(n = 1) {
    return n * 3;
  }
}

class SquaredTriple extends Triple {
  static longDescription;
  static description = "square the triple of any number you provide";

  static calculate(n = 1) {
    //return super.calculate(n) * super.calculate(n);
    const tripleRes = super.calculate(n);
    return tripleRes * tripleRes;
  }
}

console.log(Triple.description);
console.log(Triple.calculate());
console.log(Triple.calculate(6));
console.log(SquaredTriple.calculate(3));
console.log(SquaredTriple.description);
console.log(SquaredTriple.longDescription);
console.log(SquaredTriple.customName);
