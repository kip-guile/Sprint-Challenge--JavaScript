// 1. Copy and paste your prototype in here and refactor into class syntax.
// function CuboidMaker (length, width, height){
//     this.length = length;
//     this.width = width;
//     this.height = height;
//   }
//   CuboidMaker.prototype.volume = function(){
//     return this.length * this.height * this.width;
//   }
//   CuboidMaker.prototype.surfaceArea = function(){
//     let product = ((this.length * this.width) + (this.length * this.height) + (this.width * this.height));
//     return product * 2;
//   }
//   var cuboid = new CuboidMaker(4, 5, 5);
//   console.log(cuboid.volume()); // 100
// console.log(cuboid.surfaceArea()); // 130

class CuboidMakers{
    constructor(length, width, height){
        this.length = length;
        this.width = width;
        this.height = height;
    }
    volume(){
        return this.length * this.height * this.width;
    }
    surfaceArea(){
        let product = ((this.length * this.width) + (this.length * this.height) + (this.width * this.height));
        return product * 2;
    }
}


// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.