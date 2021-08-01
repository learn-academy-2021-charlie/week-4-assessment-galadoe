// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Add appropriate dependencies to the repository:
// $ yarn add jest

// Use test driven development to complete the following questions
// Run the file with the following command:
// $ yarn jest

// Reminder: The test will call your function


// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided.
//check the lengths are not the same after it has been shuffled
describe("shuffle", () => {
  test("removes 1st item and shuffles the rest", () => {
    expect(shuffle(colors1)).not.toEqual(["blue", "green", "yellow", "pink"])
    expect(shuffle(colors2)).not.toEqual(["indigo", "periwinkle", "ochre", "aquamarine", "saffron"])
  })
})
var colors1 = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
var colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]



// b) Create the function that makes the test pass.

//create a function - shuffle
// create a variable
//takes the first item off (use a built in method) and assign to variable
// randomly sort
// return the variable

const shuffle = (arr) => {
  newArr = arr.slice(1)
  return newArr.sort(() => Math.random() - 0.5)
}

console.log(shuffle(colors1));
console.log(shuffle(colors2));




// --------------------2) Create a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.

// a) Create a test with expect statements for each of the variables provided.

describe("minMax", () => {
  test("returns an array of min & max num in that order", () => {
    expect(minMax(nums1)).toEqual([-8, 90])
    expect(minMax(nums2)).toEqual([5, 109])
  })
})

var nums1 = [3, 56, 90, -8, 0, 23, 6]
// Expected output: [-8, 90]
var nums2 = [109, 5, 9, 67, 8, 24]
// Expected output: [5, 109]


// b) Create the function that makes the test pass.

//create a function - minMax
//parameter - num
//create a var and assign the min & max
//return that var sorted from least to greatest

const minMax = (num) => {
  let newNum = [Math.min(...num), Math.max(...num)]
  return newNum.sort((b, a) => b - a)
}

console.log(minMax(nums1));
console.log(minMax(nums2));

// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.

describe("noRepeat", () => {
  test("returns one array with no duplicate", () => {
    expect(noRepeat(testArray1, testArray2)).toEqual([3, 7, 10, 5, 4, 8, 2, 1])
  })
})
var testArray1 = [3, 7, 10, 5, 4, 3, 3]
var testArray2 = [7, 8, 2, 3, 1, 5, 4]
// Expected output: [3, 7, 10, 5, 4, 8, 2, 1]



// b) Create the function that makes the test pass.

//create a function - noRepeat
//parameter - two arrays
//empty array
//join the arrays together
//for loop to iterate through the arrays (or use a built-in method)
//if there is a duplicate, return one
//push the final array w/ no duplicate

const noRepeat = (arr1, arr2) => {
  let newArr = arr1.concat(arr2)
  return newArr.filter((value, index) => {
    return newArr.indexOf(value) === index;
  })
}
