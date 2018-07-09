// The intent of this file is to reverse
// the string using built in functions.
const reverse = (string) => {
    var list1=string.split("");
    var reversedList=list1.reverse();
    return reversedList.join("");
};

module.exports = reverse;
