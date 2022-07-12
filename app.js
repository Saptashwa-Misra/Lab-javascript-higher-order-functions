const foods = ["pizza", "burger", "fingerChips", "donuts", "springRoll"];

console.log("Function 1")
console.log("Original foods array: "+foods)
let modifiedFood = foods.slice(foods.indexOf("burger"),foods.indexOf("donuts")+1)
console.log("ModifiedFood array after slice() on array foods: "+modifiedFood)

console.log("Function 2")
console.log("Original foods array: "+foods)
let RemovedFood=foods.splice(2,0,"noodles","icecream") //Since we are not deleting any element from the array hence RemovedFood array will be empty
console.log("ModifiedFood array after splice() on array foods: "+foods)

console.log("Function 3")
const numberArray = [12,324,213,4,2,3,45,4234];
console.log("Original numberArray: "+numberArray)
let newEvenArray = numberArray.filter(isEven=number=>number%2===0)
console.log("numberArray after filter (Even numbers): "+newEvenArray)
let newPrimeArray = numberArray.filter(isPrime = (numberfromArray) => {
    let flag=0
    for(var i=2; i<=numberfromArray/2; i++)
        if(numberfromArray%i==0)
        {
            flag=1
            break;
        }
    if (flag==0)
        return true
    return false
})
console.log("numberArray after filter (Prime numbers): "+newPrimeArray)

console.log("Function 4")
let newnonPrimeArray = numberArray.filter(RejectPrime = (numberfromArray)=> !isPrime(numberfromArray))
console.log("numberArray after filter (Non Prime numbers): "+newnonPrimeArray)

console.log("Function 5")
console.log("Lambda Function: isEven = number => number%2===0")

console.log("Function 6")
const myArray = [11, 34, 20, 5, 53, 16];
console.log("Original myArray: "+myArray)
let squareNum = myArray.map(findSquareOfNumbers = numbers => numbers**2)
console.log("numberArray after map (Square of the numbers in the myArray): "+squareNum)

console.log("Function 7")
let mult = [2,3,5,10]
console.log("Original Array: "+mult)
let product = mult.reduce(multiply = (currentproduct, number) => {
    return currentproduct * number
},1)
console.log("Product: "+product)