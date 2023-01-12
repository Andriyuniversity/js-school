// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

console.log('------------Task 1--------------')
let str = 'hello world';

function countLength(str) {
    if (str[0] !== undefined) {
        let i = 0;
        while (str[i] !== undefined) {
            i++;
        }
        return i;
    }
}

console.log(countLength('ew'))

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

console.log('------------Task 2--------------')
console.log(str.toUpperCase())

// upper = (str) => str.toUpperCase();
// console.log(upper(str))
// console.log(str => str.toUpperCase());


// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

console.log('------------Task 3--------------')
arr = ['HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL']

for (let arrElement of arr) {
    console.log(arrElement.toLowerCase())
}


// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

console.log('------------Task 4--------------')
let dirtryStr = ' dirty string   ';
console.log(dirtryStr.trim())


// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.

console.log('------------Task 5--------------')
let text = 'Ревуть воли як ясла повні';

strToArr = (str) => str.split(' ')

arr = strToArr(text); //['Ревуть', 'воли', 'як',
// 'ясла', 'повні']
console.log(arr)


// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку
// перетворити всі об'єкти в масиві на стрінгові.

console.log('------------Task 6--------------')
numbers = [10, 8, -7, 55, 987, -1011, 0, 1050, 0]

mappedNumbers = numbers.map(value => {
    return `${value}`
})

console.log('numbers', numbers)
console.log('mapped numbers', mappedNumbers)


console.log('------------Task 7--------------')
// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує
// його від більшого до меньшого, або навпаки в залежності від значення
// аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

function sortNums(arr, direction) {
    let sortedArr = []
    if (direction === 'ascending') {
        sortedArr = arr.sort((a, b) => {
            return a - b
        })
    } else if (direction === 'descending') {
        sortedArr = arr.sort((a, b) => {
            return b - a
        })
    }
    return sortedArr;
}

let nums = [11, 21, 3];
console.log(sortNums(nums, 'ascending')); // [3,11,21]
console.log(sortNums(nums, 'descending')); // [21,11,3]


console.log('------------Task 8--------------')
// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
//

// for (const coursesAndDurationArrayElement of coursesAndDurationArray) {
//     // console.log(coursesAndDurationArrayElement)
//     for (const coursesAndDurationArrayElementKey in coursesAndDurationArrayElement) {
//         // console.log(coursesAndDurationArrayElementKey)
//         if (coursesAndDurationArrayElementKey == 'monthDuration'){
//
//         }
//     }
// }
console.log('Sorted by duration')
console.log(coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration));

console.log('Filtered by duration > 5')
console.log(coursesAndDurationArray.filter(obj => obj.monthDuration > 5));


console.log('------------Task 9--------------')
// описати колоду карт
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//     value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
//

let cardProperties = {
    cardSuit: ['spade', 'diamond', 'heart', 'clubs'],
    value: ['6', '7', '8', '9', '10', 'ace', 'jack', 'queen', 'king', 'joker'],
    color: ['red', 'black'],
}

//Опис колоди карт

let deck = []
let card = {}

for (let cardSuitElement of cardProperties['cardSuit']) {
    card['cardSuit'] = cardSuitElement;
    for (let valueElement of cardProperties['value']) {
        if (valueElement == 'joker') {
            continue
        }

        card['value'] = valueElement;

        if (card['cardSuit'] == 'spade' || card['cardSuit'] == 'clubs') {
            card['color'] = 'black';
        } else {
            card['color'] = 'red';
        }
        deck.push({...card})
    }
}
deck.push(
    {cardSuit: '', value: 'joker', color: 'black'},
    {cardSuit: '', value: 'joker', color: 'red'}
)

console.log('Created deck: ', deck);
console.log('Піковий туз: ', deck.find(obj => obj['cardSuit'] == 'spade' && obj['value'] == 'ace'));
console.log('Всі шістки: ', deck.filter(obj => obj['value'] == '6'));
console.log('Всі червоні карти', deck.filter(value => value.color == 'red'));
console.log('Всі буби', deck.filter(value => value['cardSuit'] == 'diamond'));
console.log('Всі трефи від 9 та більше', deck.filter(value => (value['cardSuit'] == 'clubs' && parseInt(value['value']) > 9) ||
    (value['cardSuit'] == 'clubs' && value['value'] > '9')));


console.log('------------Additional task (reduce)--------------')
// Додатково по reduce
// Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//     diamonds:[],
//     hearts:[],
//     clubs:[]
// }

console.log('Deck: ', deck)

// let divide_by_suit = deck.reduce((accumulator, currentValue) => {
//     if (currentValue.cardSuit) {
//         accumulator[`${currentValue.cardSuit}`] = currentValue
//     }
//     return accumulator
// }, {});


try {
    let divide_by_suit = deck.reduce((accumulator, currentValue) => {
        if (currentValue.cardSuit) {
            accumulator[`${currentValue.cardSuit}`].push(currentValue)
        }
        return accumulator
    }, {});
    console.log('Divided: ', divide_by_suit)
} catch (e) {
    console.error('Reduce new method does not work')
}

