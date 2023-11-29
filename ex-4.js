// Start coding here
let calculator = {
    add: function sum(a,b){
        return a+b;
    },
    substract: function minus(a,b){
        return a-b;
    },
    multiply: function times(a,b){
        return a*b;
    },
    divide: function div(a,b){
        return a/b;
    }
};

let addResult = calculator.add(10,20);
console.log(addResult);

let divideResult = calculator.divide(3000,10);
console.log(divideResult);