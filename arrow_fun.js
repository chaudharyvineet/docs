/*var square = (x) => {
  var result = x * x;
  return result;
};
console.log(square(9));
*/
 var square = (x) => x * x;
 console.log(square(9));

 var user = {
   name: 'vineet',
   sayHi: () => {
console.log(arguments);
     console.log(`hi, i'm ${this.name}`);
     console.log(`hi, i'm ${user.name}`);
   },
   sayHiAlt () {
     console.log(arguments);
     console.log(`hi, i'm ${this.name}`);
     console.log(`hi, i'm ${user.name}`);
   }
 };

  user.sayHi(1,2,3,4,5);
  user.sayHiAlt(1,2,3,4,5);
