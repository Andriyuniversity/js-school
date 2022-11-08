// <--------- Task 1 ----------->
// Є змінна х, якій ви надаєте довільне числове значення.
// Якщо змінна x не дорівнює нулю, виведіть 
// 'Вірно', інакше виведіть 'Невірно'. Перевірте
//   скрипт при a, що дорівнює 1, 0, -3

let x = +prompt("Enter a number")
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

let time = +prompt("Enter number from 0 to 59");
// console.log(time)
// console.log(typeof(time))

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

// <--------- Task 2 ----------->