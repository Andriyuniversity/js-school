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

// let day = prompt("Task 4: Введіть порядковий номер дня тижня")
// console.log(day)

// switch (prompt) {
//     case "1":
//         document.append("Hello")
//         break;

//     default:
//         break;
// }