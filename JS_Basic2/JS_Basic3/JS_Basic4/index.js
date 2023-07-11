console.log("Kai haal hai");
//   function decleration
function run(){
  console.log("running");
}
run();

//function assignment

let stand = function walk(){

  console.log('walking')
};

stand();
  
let jump = stand;
jump();   

//annonymous function 
let stand2 = function(){

  console.log('walking 2');
};
stand2();



let x=1;
  x='a';
  console.log(x);

  function sum(a,b){
    
    return a+b;
  }
  console.log(sum(1,2));