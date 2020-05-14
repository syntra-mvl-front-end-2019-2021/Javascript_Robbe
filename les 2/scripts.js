let aVariable = 3;
let anotherVariable = 5;

aVariable = anotherVariable + 1;

console.log(aVariable); //6

function sum(a, b) {
    return a + b;
}

aVariable = sum(5, 6);
console.log(aVariable); // 11

aVariable = aVariable + 1;
console.log(aVariable); // 12

aVariable += 2;
console.log