const palindromes = function (word) {
    let wordFix = word.toLowerCase().replace(/[^a-z0-9]/g,"");

    

    let finalWord = wordFix.split("").reverse().join("");

   return finalWord == wordFix;

};

// Do not edit below this line
module.exports = palindromes;
