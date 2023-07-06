console.log('Chaliye shuru karte hai');

//object create
// let rectangle = {
//   length:1,
//   breadth:2,

//   draw:function(){
//     console.log('drawing rectangle');
//   }
// };


// factory function
// fu
function Rectangle(len,bre) {
  this.length=len;
  this.breadth=bre;
  this.draw=function(){
     console.log('drawing');

  }
}
let rectangleObject = new Rectangle(4,6);

rectangleObject.color = 'yellow';
console.log(rectangleObject);

delete rectangleObject.color;
console.log(rectangleObject);