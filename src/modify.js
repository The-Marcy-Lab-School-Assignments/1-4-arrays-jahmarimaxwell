const uppercaseAll = (...word) => {
  for (let i = 0; i < word.length; i++) {
    word.splice(i, 1, word[i].toUpperCase());
  }
  return word;
};

const destructureCoordinates = (coordinates) => {
  const [x, y] = coordinates;
  return `X is: ${x}, Y is: ${y}`; // no touching this line!
};

module.exports = {
  uppercaseAll,
  destructureCoordinates,
};
