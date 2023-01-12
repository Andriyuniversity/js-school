// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

function calcRectangleArea() {
    return arguments[0] * arguments[1];
}

console.log("Rectangle area = ", calcRectangleArea(2, 2));

// - створити функцію яка обчислює та повертає площу кола з радіусом r

function calcCircleArea(radius) {
    const pi = 3.14;
    return pi * radius * radius;
}

console.log("Circle area = ", calcCircleArea(2));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

function calcCylinderArea(height, radius) {
    let cylinderArea, sidelongArea, baseArea;

    sidelongArea = 2 * Math.PI * radius * height;
    baseArea = Math.PI * Math.pow(radius, 2);
    cylinderArea = sidelongArea + baseArea;

    return cylinderArea;
}

console.log("Cylinder area = ", calcCylinderArea(2, 2))

// - створити функцію яка приймає масив та виводить кожен його елемент

function displayArray(arr) {
    console.log("Display Array: ")
    for (let arrElement of arr) {
        console.log(arrElement)
    }
}

displayArray([0, {h:25, ju: "pol"}, 9, 0, "ilu"])

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

function makeParagraph() {
    return `<p>${arguments[0]}</p>`;
}

document.write(makeParagraph("I love me"));

// - створити функцію яка створює ul з трьома елементами li. Текст li задати
// через аргумент всім однаковий

function createUlWith3li() {
    let str = `<ul>`;
    for (let i = 0; i < 3; i++) {
        str += `<li>${arguments[0]}</li>`;
    }
    str += `</ul>`;
    return str;
}

console.log(createUlWith3li("some text"))
document.write(createUlWith3li("some text"))

// - створити функцію яка створює ul з трьома елементами li. Текст li задати
// через аргумент всім однаковий. Кількість li визначається другим аргументом,
// який є числовим (тут використовувати цикл)

function createUlWithNli(str, countOfLi) {
    let buildUl = `<ul>`;
    for (let i = 0; i < countOfLi; i++) {
        buildUl += `<li>${str}</li>`;
    }
    buildUl += `</ul>`;
    return buildUl;
}

document.write(createUlWithNli("some text", 5))

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,
// булеві), та будує для них список

function buildList(...arr) {
    let structure = `<ul>`;
    for (let i = 0; i < arr.length; i++) {
        structure += arr[i];
        structure += ' ';
    }
    structure += `</ul>`
    return structure;
}

document.write(buildList("asd", 98, {str: "los", number: 22}))

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age
// , та виводить їх в документ. Для кожного об'єкту окремий блок.

function writeArray(arr) {
    for (let arrElement of arr) {
        document.write(`<div class="arr">`)
        document.write(`${arrElement.id}. ${arrElement.name} ${arrElement.age}`)
        document.write(`</div>`)
    }
}

arr = [
    {id: 2, name: "Olha", age: 25},
    {id: 1, name: "Stepan", age: 43},
    {id: 3, name: "Katya", age: 21}
]

writeArray(arr)

//створити функцію яка повертає найменьше число з масиву

function findSmallestFromArray (arr) {
    let i = 0, smallElements = [];
    if (arr.length > 1) {
        while (i < arr.length) {
            if (arr[i] < arr[i + 1] || arr[i] === arr[i + 1]) {
                smallElements.push(arr[i]);
                i += 2;
            } else if (arr[i] > arr[i + 1]) {
                i++;
            } else return NaN;
        }
    } else return arr;
    findSmallestFromArray(smallElements);
}

console.log(findSmallestFromArray([1, 2]))

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву
// та повертає його. Приклад [1,2,10]->13
function sumArray(arr) {
    if (arr.length > 0) {
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
            sum = sum + arr[i];
        }
        return sum;
    }
}

sum = sumArray([1,3,1,7,8])
console.log(sum)


// f = (arr) => {
//     if (arr.length > 0) {
//         let sum = 0;
//         for (let i = 0; i < arr.length; i++) {
//             sum = sum + arr[i];
//         }
//         return sum;
//     }
// }
//
// console.log(f([1,2]))