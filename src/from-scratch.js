const addToFrontOrBack = (arr, value, isFront) => {
  if (isFront === true) {
    arr.unshift(value);
    return arr;
  }
  else if (isFront === false)
    arr.push(value);
  return arr;
};


const reverseString = (string) => {
  let NewString = ""
  for (let i = string.length - 1; i >= 0; i--) {
    NewString += string[i];
    console.log(NewString);
  }
  return NewString;
}

const newArrayFullOf = (value, numOfValue) => {
  let NewArray = [];
  for (let i = 0; i < numOfValue; i++) {
    NewArray.push(value);
  }
  return NewArray;
};

const insertIntoMiddle = (arr, value) => {
  arr.splice(Math.floor(arr.length / 2), 0, value)
};

const deleteFromMiddle = (arr) => {
  arr.splice(Math.floor(arr.length / 2), 1)
};

const isRightIndex = (arr, value, index) => {
  if (arr.indexOf(value) !== -1 && value === arr[index])
    return true;
  else
    return false;
};

const roundAllNumsDown = (arr) => {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    newArray.push(Math.floor(arr[i]))

  }
  return newArray;
};
console.log(roundAllNumsDown([1.1, 2.2, 3.3]));

const getAllYCoordinates = (arrOfCoords) => {
  let YCords = [];
  for (let i = 0; i < arrOfCoords.length; i++) {
    YCords.push(arrOfCoords[i][1])
  }
  return YCords;
};

module.exports = {
  addToFrontOrBack,
  reverseString,
  newArrayFullOf,
  insertIntoMiddle,
  deleteFromMiddle,
  isRightIndex,
  roundAllNumsDown,
  getAllYCoordinates,
};
