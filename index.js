/*  function add(){} 

function subtract(){} 

function multiply(){}

function divide(){}
*/


// add, subtract, multiply, divide

function add(a, b){
    return (a + b);
}

function subtract(a, b){
    return (a - b);
}

function multiply(a, b){
    return (a * b);
}

function divide(a, b){
    return (a / b);
}



//  Increment by 1 and Decrement by 1

function increment(a){
    return (a + 1);
}

function decrement(a){
    return (a - 1);
}

//*  function makeInt() take a string, parse it into a base 10 integer and return it.


function makeInt(x, base){
    let parsed = parseInt(x, 10);
    return parsed;
}
   // console.log(makeInt('0x2328'));
   // console.log(makeInt('sldkjflksjf'));



//  function preserveDecimal()  take a string, parse it into a float and return it.
// returns a NaN, if preserveDecimal is not float number.


function preserveDecimal(x){
    let preserveDecimalParsed = parseFloat(x);
    return preserveDecimalParsed;
}
    //console.log(preserveDecimal('2.222')); 
    //console.log(preserveDecimal('sldkjflksjf'));

