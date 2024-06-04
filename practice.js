// let arr = [1, 2, 3, 4, 5];

// let b = [3,3,3,...arr]

// console.log(b);

// const myObj = {
//     name1: "kiran",
//     age :44
// }

// const {name1:w, age} = myObj

// console.log(w);

// console.log(0 == []);
// console.log({} == {})

// let a = [3, 5, 6, 3];

// let i = 0;
// do{
//     console.log(`Printing the Number ${i}`)
//     i++
// }while(i<5)

// while (i < 5) {
//   console.log("hello");
//   i++;
// }

// let user = {
//   firstName: "Abhinav",
//   secondName: "B Manoj",
//   age: 22,
//   fullName: function () {
//     return this.firstName + " " + this.secondName;
//   },
// };

// console.log(user.fullName());

// for (let x in user) {
//   console.log(x);
// }

// console.log(Object.keys(user))
// console.log(Object.values(user));
// console.log(Object.entries(user)

// console.log(user.age);

// let fruit  = "orange"

// switch(fruit){
//     case 'apple':
//        return console.log("Helooo");
//     case 'orange' :
//         return console.log("hiiii")
// }

// function fruits(name){
//     switch(name){
//         case 'apple':
//             return console.log("Apple here!");
//         case "orange":
//             return console.log("Orange here!");
//         case 'strawberry':
//             return console.log("Strawberry here!")

//     }
// }

// fruits('strawberry')

// { a = 10;}

// console.log(a)

// Arrow functions this keywords
// let a = 20;

// function fnn () {
//     let a = 3;
//     let fn = () =>{
//         console.log(this.a)
//     }

//     fn()
// }

// fnn()



function pro(num) {
  return new Promise((resolve, reject) => {
    if(num  > 2){
        resolve("resolved")
    }
    else{
        reject("rejected")
    }
  }); 
}

pro(2)
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("I will be here if anything happen heee!");
  });
