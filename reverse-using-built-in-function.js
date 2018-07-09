// The intent of this file is to reverse
// the string using built in functions.
const reverse = (string) => {
  const listString = string.split('');
  const reversedList = listString.reverse();
  return reversedList.join('');
};

module.exports = reverse;
