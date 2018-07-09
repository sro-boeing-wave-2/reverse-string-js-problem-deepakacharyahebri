// The intent of this file is to reverse the string using iterators (for, foreach)
const reverse = (string) => {
  let result = '';
  const len = string.length;
  for (let ind = len - 1; ind >= 0; ind -= 1) {
    result += string[ind];
  }
  return result;
};

module.exports = reverse;
