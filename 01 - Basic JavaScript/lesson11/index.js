let variableA = 'A'; // B
let variableB = 'B'; // C
let variableC = 'C'; // A

// let auxiliary = variableA;
// variableA = variableB;
// variableB = variableC;
// variableC = auxiliary;

[variableA, variableB, variableC] = [variableB, variableC, variableA];

console.log(variableA, variableB, variableC);
