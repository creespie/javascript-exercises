const fibonacci = function(number) {
    if(number == 0){return 0}
    else if(number < 0){return "OOPS"}
    else{
        if(typeof(number) == String){number = Number(number)};
        let array= [1, 1];
        for(let n = 2; n < number; n++){
        array[n] = array[n-1] + array [n-2];
    };
    return array[number-1];
}
};

// Do not edit below this line
module.exports = fibonacci;
