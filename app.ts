const num1Element = document.getElementById('num1') as HTMLInputElement;
const num2Element = document.getElementById('num2') as HTMLInputElement;
const buttonElement = document.querySelector('button')!;

//Types-
/*function add(num1: number, num2: number) {
    return num1 + num2;
}

buttonElement.addEventListener('click', () => {
    const num1 = num1Element.value;
    const num2 = num2Element.value;
    const result = add(+num1, +num2);
    console.log(result);
})*/

//Union Types-
/*function add(num1: number | string, num2: number | string) {
    if(typeof(num1) === 'number' && typeof(num2) === 'number')  {
        return num1 + num2;
    }
    else if(typeof(num1) === 'string' && typeof(num2) === 'string')  {
        return num1 +' ' +num2;
    }
    return +num1 + +num2;
}

buttonElement.addEventListener('click', () => {
    const num1 = num1Element.value;
    const num2 = num2Element.value;
    const result = add(+num1, +num2);
    const stringResult = add(num1, num2);
    console.log(result);
    console.log(stringResult);
})*/

//Object & Array Types-
/*const numResults: number[] = [];
const textResults: string[] = [];

function add(num1: number | string, num2: number | string) {
    if(typeof(num1) === 'number' && typeof(num2) === 'number')  {
        return num1 + num2;
    }
    else if(typeof(num1) === 'string' && typeof(num2) === 'string')  {
        return num1 +' ' +num2;
    }
    return +num1 + +num2;
}

function printResult(resultObj: { val: number; timestamp: Date }) {
    console.log(resultObj.val, resultObj.timestamp);
}

buttonElement.addEventListener('click', () => {
    const num1 = num1Element.value;
    const num2 = num2Element.value;
    const result = add(+num1, +num2);
    numResults.push(result as number);
    const stringResult = add(num1, num2);
    textResults.push(stringResult as string);
    printResult({ val: result as number, timestamp: new Date() });
    console.log(numResults, textResults);
})*/

//Type Alias & Interface-
/*const numResults: number[] = [];
const textResults: string[] = [];

type NumOrString = number | string;
type Result = { val: number; timestamp: Date };

interface ResultObj {
    val: number;
    timestamp: Date;
}

function add(num1: NumOrString, num2: NumOrString) {
    if(typeof(num1) === 'number' && typeof(num2) === 'number')  {
        return num1 + num2;
    }
    else if(typeof(num1) === 'string' && typeof(num2) === 'string')  {
        return num1 +' ' +num2;
    }
    return +num1 + +num2;
}

function printResult(resultObj: ResultObj) {
    console.log(resultObj.val, resultObj.timestamp);
}

buttonElement.addEventListener('click', () => {
    const num1 = num1Element.value;
    const num2 = num2Element.value;
    const result = add(+num1, +num2);
    numResults.push(result as number);
    const stringResult = add(num1, num2);
    textResults.push(stringResult as string);
    printResult({ val: result as number, timestamp: new Date() });
    console.log(numResults, textResults);
})*/

//Generics-
const numResults: Array<number> = [];
const textResults: Array<string> = [];

type NumOrString = number | string;
type Result = { val: number; timestamp: Date };

interface ResultObj {
    val: number;
    timestamp: Date;
}

function add(num1: NumOrString, num2: NumOrString) {
    if(typeof(num1) === 'number' && typeof(num2) === 'number')  {
        return num1 + num2;
    }
    else if(typeof(num1) === 'string' && typeof(num2) === 'string')  {
        return num1 +' ' +num2;
    }
    return +num1 + +num2;
}

function printResult(resultObj: ResultObj) {
    console.log(resultObj.val, resultObj.timestamp);
}

buttonElement.addEventListener('click', () => {
    const num1 = num1Element.value;
    const num2 = num2Element.value;
    const result = add(+num1, +num2);
    numResults.push(result as number);
    const stringResult = add(num1, num2);
    textResults.push(stringResult as string);
    printResult({ val: result as number, timestamp: new Date() });
    console.log(numResults, textResults);
})

const myPromise = new Promise<string>((resolve, reject) => {
    setTimeout(() => {
        resolve('It worked');
    }, 1000);
});

myPromise.then((result) => {
    console.log(result.split('w'));
})