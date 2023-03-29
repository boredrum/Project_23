// let car = {      //exercise 1
//     model: "S-Class",
//     year: 2022,
//     color: "black",
// }
// car.color = "grey";
// car.type = "gasoline";
// car.signal = () => alert("fa!fa!");

// let salaries = {     //exercise 2
//     frontend: 12000, 
//     backend: 10000, 
//     designer: 8000,
//     dayPay () {
//         alert ('We must pay salary on Tuesday!');
//     },
//     total () {
//         let sum = 0;
//         for (const key in salaries){
//             if (Number(this[key])){
//                 sum += this[key];
//             } else continue
//         }
//         console.log(sum);
//     }
// }
// salaries.total();
// salaries.manager = 5000;
// salaries.total();
// delete salaries.designer;
// salaries.total();

// function computer(brand, system, cost){     //exercise 3
//     this.brand = brand;
//     this.system = system;
//     this.cost = cost;
// }
// let dell = new computer('Dell', 'windows', '800');
// let apple = new computer('Apple', 'MAC OS', '1700');

// function computer(brand, system, cost){     //exercise 4
//     this.brand = brand;
//     this.system = system;
//     this.cost = cost;
//     this[Symbol.toPrimitive] = function (hint){
//         switch(hint){
//             case 'string':
//                 return this.brand;
//             case 'number':
//                 return this.cost;
//             case 'default':
//                 return this.brand + ' ' + this.system + ' ' + this.cost + ' // ';
//         }
//     }
// }
// let dell = new computer('Dell', 'windows', '800');
// let apple = new computer('Apple', 'MAC OS', '1700');
// console.log(String(dell));
// console.log(+apple);
// console.log(dell + apple);