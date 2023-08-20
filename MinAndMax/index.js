// Return the key and the number of appearances for the least and most frequent entry of an array
// Examples:
// minAndMax(['a', 'a', 'b']) => { min: { b: 1 }, max: { a: 2 }}
// minAndMax([1, 1, 3, 2, 4, 4, 5, 5, 5, 9, 9, 2]) => {
//   min: { 3: 1 },
//   max: { 5: 3 },
// }

// Rules:
// No there will never be the 2 different elements for the same amount of times of min or max
// Example [1,1,2,2,3,3,3] => Does NOT need to be accounted for. 
function getKeyByValue(object, value) {
  return Object.keys(object).find(key => object[key] === value);
}

exports.minAndMax = (itemArray) => {
  //Set up object to keep track of names and number of times things appear
  let countMap = {}

  // Loop over array and add name of element and increase the count by one if it has already been seen
  for (const num of itemArray){
    countMap[num] = countMap[num] ? countMap[num] + 1 : 1
  }

  // Isolate all of the vaues from the countMap so we can figure out what is the min and max number of times they appeared
  let allValues = Object.values(countMap)

  //Use the max library to get the min and max values
  let minValue = Math.min(...allValues)
  let maxValue = Math.max(...allValues)

  // Use a helper function we created to plug that value back into the map to get the key
  let minCountName = getKeyByValue(countMap, minValue)
  let maxCountName = getKeyByValue(countMap, maxValue)

// use all of the name and value information to build an object that we need to return to fulfill our requirements and pass all tests
  return {
    min: {
       [minCountName]: minValue
      },
    max: {
      [maxCountName]: maxValue
    }
  }
};
