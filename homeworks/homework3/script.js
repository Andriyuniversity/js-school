// <--------- Task 1 ----------->
// Є змінна х, якій ви надаєте довільне числове значення.
// Якщо змінна x не дорівнює нулю, виведіть
// 'Вірно', інакше виведіть 'Невірно'. Перевірте
//   скрипт при a, що дорівнює 1, 0, -3

let x = +prompt("Task 1: Enter a number")
console.log(x)

if (x) {
    alert("Вірно")
} else {
    alert("Невірно")
}



// <--------- Task 2 ----------->
// - Дано змінну time яка рівна числу від 0 до 59.
// Потрібно написати код, який перевірить, до якої
//  четверті години попадає число
// (в першу, другу, третю или четверту частину
// години).

let time = +prompt("Task 2: Enter number from 0 to 59");
console.log(time)
console.log(typeof(time))

switch (true) {
    case (time >= 0 && time <= 15):
        console.log("Перша чверть");
        break;

    case (time >= 16 && time <= 30):
    console.log("Друга чверть");
    break;

    case (time >= 31 && time <= 45):
        console.log("Третя чверть");
        break;

    case (time >= 46 && time <= 59):
        console.log("Остання чверть");
        break;

    default:
        console.log("You entered a wrong number");
        break;
}

// <--------- Task 3 ----------->
// - У змінній day дано якесь число
// від 1 до 31. Потрібно визначити, у
// яку половину(декаду) місяця потрапляє
// це число (у першу, другу чи третю).

let day = +prompt("Task 3: Enter a number from 1 to 31");

if (day >= 1 && day <= 11) {
    console.log("First decade");
} else if (day >= 12 && day <= 21) {
    console.log("Second decade");
} else if (day >= 22 && day <= 31) {
    console.log("Third decade");
}



// <--------- Task 4 ----------->
// Скласти розклад на тиждень за домопоги 
// switch. Користувач вводить порядковий номер
//  дня тижня і на екрані відображається інфа 
//  що заплановано на цей день (можна замість
//  плану на день, назву дня англійською)

day = prompt("Task 4: Введіть порядковий номер дня тижня")
console.log(day)


switch (day) {
    case '1':
        document.write('Monday');
        break;

    case '2':
        document.write('Tuesday');
        break;

    case '3':
        document.write('Wednesday');
        break;

    case '4':
        document.write('Thursday');
        break;

    case '5':
        document.write('Friday');
        break;

    case '6':
        document.write('Saturday');
        break;

    case '7':
        document.write('Sunday');
        break;

    default:
        document.write('Idiot');
        break;
}

// <--------- Task 5 ----------->
// Користувач вводить або має два числа.
// Потрібно знайти та вивести максимальне число з тих двох .
// Також потрібно врахувати коли введені рівні числа.

let number1 = +prompt('Task 5: Enter first number');
let number2 = +prompt('Enter second number');

if (number1 > number2) {
    document.write('First number is grater than second one');
} else if (number1 < number2) {
    document.write('Second number is grater than first one');
} else if (number1 === number2) {
    document.write('First number are equal to second number');
}

// <--------- Task 6 ----------->
// - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined,
//     null  і тд включно). Напишіть код який,    за допомоги  оператора || буде
// присвоювати змінній х значення "default"  якщо значення змінної х являється
// falsy (хибноподыбне, тобто кастується до false)

x = +prompt() || 'default';
console.log(x)

