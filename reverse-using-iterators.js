// The intent of this file is to reverse the string using iterators (for, foreach)
const reverse = (string) => {
    var result=""
    for(var ind=string.length-1; ind>=0; ind--){
        result+=string[ind];
    }
    return result;
};

module.exports = reverse;
