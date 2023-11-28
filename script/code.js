
//ageTODays
// function ageToDays(age) {
//     let currerntYear = new Date()
//         let myAge = currerntYear.getFullYear() - age;
//         let days = (currerntYear.getFullYear() - my Age) * 365
//         console.log(daysLived);
// }
// ageToDays(24)

//areaOfTriangle
// function areaOFtriangle(base,height) {
//     let calculateArea = (base * height) /2
//     console.log(calculateArea);

// }
// areaOFtriangle(10, 2)
// add up
// function array(...arg) {
//     console.log(arg)
//     let sum = 0
//     for(let i = 0; i<arg.length;i++){
//         console.log(sum+=arg[i]);
//     }
// }
// array(2, 5, 6, 9 )



// // interes
// function interest(amount,interest) {
//     let calcuInterest =(amount * interest /100)
//     console.log(interest+"% of "+amount+" is "+interest)
// }
// interest(300,30)
   
    
// function nextNumber(...arg){
//     let count = 0;
//     while(count < arg.length){

//         console.log(arg[count])
//     count++;
//     }
// }
// console.log(nextNumber(2, 5, 6, 7, 9, 12))

// minMax
// function minMax(...array) {
// let max = Math.max(array)
// console.log(`Highest number: ${Math.max(...array)}`)

// let min = Math.min(array)
// console.log(`Lowest number: ${Math.min(...array)}`)
// }
// minMax(20, 15, 9, 7, 5, 2)

//count truthy
    // let boolean = [true,  false, true, false];
    // let truecount = boolean.reduce((count, value) => value ? count + 1 : count, 0);
    // console.log(`Number of true value: ${truecount}`)


// let array1 = [[1, 2, 3], [100, 2, 1, 10]];
// let array2 = [[1, 2, 3, 4, 5], [1, [2], [3], [[4]]],[5,6]];
// function Elements(arr1, arr2) {
// let combinedArray = [...arr1, ...arr2];
//   let uniqueSet = new Set(combinedArray);
//   let uniqueArray = [...uniqueSet];
//   return uniqueArray;
// }
// let uniqueElements = Elements(array1, array2);
// console.log("Unique elements:", uniqueElements);


 //purpose of having an object
//  let firstName = 'Peter'
//  let lastName = 'Lerato'

//  const person = {
// firstName,
// lastName

//  }
// console.log(person);

//Destructuring 
// let data = ['Anathi', 'Josefu']
// let [firstName, lastName] = data
// console.log(firstName)
// console.log(lastName)
// console.log(`My name is ${firstName} and last name is ${lastName}`);


//Array of object
// let products = [
// {
//     id: 1,
//     name: 'table',
//     amount: 700
// },
// {

// id: 2,
// name: 'mobile',
// amount: 1000
// }

// ]
// let [product1, product2] = products
// console.log(product1, product2);

//object
// let person = {
// firstName: 'Anathi',
// lastName: 'Josefu',
// age: 24
// }
// const{firstName, lastName, age} = person
// console.log(`My name is ${person.firtName} ${person.lastName}, and I am ${person.age} years old.`)
//or
// console.log(`My name is ${firstName} ${lastName}, and I am ${age} years old.`)

// let[ first, second , ...remaining] = [23, 5, 9, 11, 24, 32]
// console.log(first, second, remaining);


// function division(fOp) {
//     try{
//         let result = fOp / sOp
//         console.log(result);

//     }catch(e) {
//         console.log("please try again next time",);
//     }
// }
// division(4)

// function addition(...args) {
//     let totalOfNumbs = 0 
//     args.forEach( item=> {
//         if(typeof item != 'number') 
//             throw new Error(`${item} is not a number`)
//         else totalOfNumbs += item
//     })
//     return totalOfNumbs
// }
// try{
//     console.log(addition(4, 8, 'Joel', 9));
// }catch(e) {
//     console.log(e.message);
// }

//Explain promise
// let myPromise = new Promise((resolved, reject)=> {
// let numb1 = 12
// let numb2 = 0
// if (numb2 > 0)
// resolved(numb1 / numb2)
// reject(`Can't divide ${numb1} by ${numb2}`)
// })
// myPromise.then(
//     (correct)=> {
// console.log(correct);
//  },
 
//  (denied)=>{
// console.log(denied)

// }
 //or
//  ).catch((rejected)=>{
//     console.log(rejected);
// })

//Fetch API
fetch('https//randomuser.me/api?results=50')
.then(data=> data.json())
.then(result=>{
    let{result} = result
    results.forEach(people =>  {
        console.log(people);
        cardContainer.innerHTML +=
        `
        <div class="card" style="width: 18rem,">
        <img src="${people.picture.large}"
        class="card-img-top img-fluid" alt=$
        {people.name.first}">
        ,div class="card-body">
        <h5 class="card-tittle">${people.name.title}
        `

        })
}
    )
