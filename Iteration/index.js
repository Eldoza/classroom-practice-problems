// What is the expected output of this code block
// What can/should we change to improve this code?

const double = numbers => {
    numbers.forEach((number, index) => {
      numbers[index] = number * 2
    })
  
    return numbers
  }
  
  const numberArray = [1, 2, 3, 4, 5]
  const doubleArray = double(numberArray)
  
  console.log({ numberArray, doubleArray })