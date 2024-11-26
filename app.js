//1-Misol//

// const car1 = {
//   brand: "Toyota",
//   calculate(distance, time) {
//     return `${this.brand} tezlik :${distance / time} km/soat`;
//   },
// };

// const car2 = {
//   brand: "Honda",
// };

// const speed = car1.calculate.call( car2 ,100, 2);

// console.log(speed);

//1-Tugashi//

//2-Misol//

// const ages = [25, 18, 32, 45, 40];

// const youngest =Math.min.apply( null ,ages);
// console.log(youngest);

//2-Tugashi//

//3-Misol//

// const product = {
//   price: 200,
// };

// function applydiscount(discount) {
//   return this.price - (this.price * discount) / 100;
// }

// const tenPercentDiscount = applydiscount.bind(product, 10);

// console.log(tenPercentDiscount());

//3-Tugashi//

//4-Misol//

// function greet(greeting) {
//   return `${greeting},men ${this.name},${this.role} !`;
// }

// const person1 = { name: "Alice ", role: "Dasturchi" };
// const person2 = { name: "Bob ", role: "Dizayner" };

// const greetAlice = greet.call(person1, "Salom");
// const greetBob = greet.call(person2, "Salom");

// console.log(greetAlice);
// console.log(greetBob);


//4-Tugashi//

