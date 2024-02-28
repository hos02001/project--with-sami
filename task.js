// // function binarySearch(arr, target) {
// //     let left = 0;
// //     let right = arr.length - 1;

// //     while (left <= right) {
// //         let mid = Math.floor((left + right) / 2);

// //         if (arr[mid] === target) {
// //             return mid; // Return the index of the target
// //         } else if (arr[mid] < target) {
// //             left = mid + 1;
// //         } else {
// //             right = mid - 1;
// //         }
// //     }

// //     return -1; 
// // }


// // let arr = [2, 3, 4, 5, 6, 7, 8];
// // console.log(binarySearch(arr, 8)); // Output: 3 (index of the element found)
// // console.log(binarySearch(arr, 8)); // Output: -1 (element not found)


// class Man {
//     #name;
//     #age;
//     getname() {
//         return this.#name;
//     }
//     setname(name) {
//         if(typeof name === 'string' && name.length > 0) {
//             this.#name = name;
//         }else {
//             console.log("Invalid name provided.");
//         }
//     }
//     getage() {
//         return this.#age;
//     }
//     setage(age) {
//         if(typeof age === 'number' && age > 0) {
//             this.#age = age;
//         }else {
//             console.log('Invalid age provided');
//         }
//     }
// }


// const mard = new Man();
// mard.setname("Poghos");
// mard.setage(11);
// console.log(mard.getname());





// class Car {
//     constructor(name,model,rentalPrice) {
//         this.name = name;
//         this.model = model;
//         this.rentalPrice = rentalPrice;
//     }
// }

// class Customer{
//     constructor(name,contactInfo) {
//         this.name = name;
//         this.contactInfo = contactInfo;
//         this.rentalHistory = [];
//     }
//     rentCar(car, duration) {
//       const rentalCost = car.rentalPrice * duration;
//       this.rentalHistory.push({ car, duration, rentalCost });
//       console.log(`${this.name} has rented ${car.make} ${car.model}`);
//     }

//     returnCar(rentalIndex) {
//         const rental = this.rentalHistory[rentalIndex];
//         if (rental) {
//             console.log(`${this.name} has returned ${rental.car.make} ${rental.car.model}.`);
//             this.rentalHistory.splice(rentalIndex, 1);
//           } else {
//             console.log(`Invalid rental index.`);
//           }
//     }
//     viewRentalHistory() {
//         console.log(`Rental History for ${this.name}:`);
//         this.rentalHistory.forEach((rental, index) => {
//           console.log(`${index + 1}. ${rental.car.make} ${rental.car.model}, Duration: ${rental.duration} days, Total Cost: $${rental.rentalCost}`);
//         });
//       }
// }

// class Rentals {
//     constructor(costumerRenting,rentingCar,rentalDuration) {
//         this.costumerRenting = costumerRenting;
//         this.rentingCar = rentingCar;
//         this.rentalDuration = rentalDuration;
//     }
//     calculateTotalCost() {
//         return this.rentingCar.rentalPrice * this.rentalDuration;
//     }
// }

//   const car1 = new Car('Toyota', 'Corolla', 30);
//   const car2 = new Car('Mercedes', 'S-Class', 100);
  
//   const customer1 = new Customer('John Doe', 'john@example.com');
//   const customer2 = new Customer('Jane Smith', 'jane@example.com');
  
//   customer1.rentCar(car1, 5);
//   customer2.rentCar(car2, 7);
  
//   customer1.viewRentalHistory();
//   customer2.viewRentalHistory();
  
//   customer1.returnCar(0);
//   customer2.returnCar(0);
  



