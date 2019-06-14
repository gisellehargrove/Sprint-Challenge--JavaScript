// 1. Copy and paste your prototype in here and refactor into class syntax.

class CuboidMaker {
  constructor(attrs) {
    this.length = attrs.length;
    this.width = attrs.width;
    this.height = attrs.height;
  }

  volume() {
    return this.length * this.width * this.height;
  }

  surfaceArea() {
    return this.length * this.width + this.length * this.width + this.length * this.width;
  }
};

const cuboidAttributes = {
  length: 4,
  width: 5,
  height: 5
};

const cubeAttributes = {
  length: 4,
  width: 4,
  height: 4
};

const cuboid = new CuboidMaker(cuboidAttributes);

// Test your volume and surfaceArea methods by uncommenting the logs below:
// console.log(cuboid.volume()); // 100
// console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.
// Find out the formulas for volume and surface area for cubes and create those methods
// using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker extends CuboidMaker {
  constructor(attrs) {
    super(attrs);
  }

  surfaceArea(){
    const sA = (this.width * this.width) * 6;
    return sA;
  };

  volume() {
    return this.length * this.width * this.height;
  }
}

const cube = new CubeMaker(cubeAttributes);
