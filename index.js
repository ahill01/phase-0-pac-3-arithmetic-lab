/*
Basic Math
*/
function add(a,b){
    return a+b;
};

function subtract(a,b){
    return a-b;
};

function multiply(a,b){
    return a*b;
}; 

function divide(a,b){
    return a/b;
};

function increment(n){
   n+=1
   return n
}; 

function decrement(n){
    n-=1
   return n
};

/*
makeInt
*/
function makeInt(string){
   return parseInt(string,10)
}; 


/*
preserveDecimal
*/

function preserveDecimal(string){
    return parseFloat(string);
};