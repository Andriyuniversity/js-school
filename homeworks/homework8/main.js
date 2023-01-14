console.log('--------Task 1---------')
// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let userArray = []

for (let i = 0; i < 10; i++) {
    let user = new User(i, `vasya` + `${i}`, 'pupkin', 'lala@gmail.com', '+38077777777')
    userArray.push(user)
}

console.log(userArray)


console.log('--------Task 2---------')
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

console.log(userArray.filter(value => value.id % 2 === 0));

console.log('--------Task 3---------')
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

console.log(userArray.sort((a, b) => b.id - a.id))


console.log('--------Task 4---------')
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

function Client(id, name, surname, email, phone, [...order]) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    this.order = [...order]
}

let client;
let clientArray = [];
let order = []
for (let i = 0; i < 10; i++) {
    if (i % 2) {
        order.push(i)
    }
    client = new Client(i, `vasya` + `${i}`, 'pupkin', 'lala@gmail.com', '+38077777777', [] = order)
    clientArray.push(client)
}

console.log(clientArray);


console.log('--------Task 5---------')
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

console.log(clientArray.sort((a, b) => b.order.length - a.order.length));


console.log('--------Task 6---------')
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

function Car(model, manufacturer, productionYear, maxSpeed, engineСapacity) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.productionYear = productionYear;
    this.maxSpeed = maxSpeed;
    this.engineCapacity = engineСapacity;

    this.drive = function drive() {
        console.log(`Current driving speed: ${this.maxSpeed} per hour`)
    }
    this.info = function info() {
        for (const [key, value] of Object.entries(this)) {
            console.log(`${key}: ${value}`)
        }
    }
    this.increaseMaxSpeed = function increaseMaxSpeed(newSpeed) {
        if (newSpeed > 0) {
            this.maxSpeed = newSpeed
            return 0
        } else throw new Error('New max speed can not be set, try again')
    }
    this.changeYear = function changeYear(newValue) {
        if (newValue > 0) {
            this.maxSpeed = newValue
            return console.log('Success')
        } else throw new Error('New value of production year can not be set,' +
            ' try again')
    }
    this.addDriver = function addDriver(driver) {
        this.driver = driver
        return 0
    }
}

let car = new Car('mercedes', 'mercedes', '2022', 220, 2.5)

car.drive()
car.info()
car.addDriver({name: 'Ivan', surname: 'Nalysnyk'})
console.log('Added driver:', car.driver);


console.log('--------Task 7---------')
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

class Car_class {

    constructor(model, manufacturer, productionYear, maxSpeed, engineСapacity) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.productionYear = productionYear;
        this.maxSpeed = maxSpeed;
        this.engineCapacity = engineСapacity;
    }


    drive() {
        console.log(`Current driving speed: ${this.maxSpeed} per hour`)
    }

    info() {
        for (const [key, value] of Object.entries(this)) {
            console.log(`${key}: ${value}`)
        }
    }

    increaseMaxSpeed(newSpeed) {
        if (newSpeed > 0) {
            this.maxSpeed = newSpeed
            return 0
        } else throw new Error('New max speed can not be set, try again')
    }

    changeYear(newValue) {
        if (newValue > 0) {
            this.maxSpeed = newValue
            return console.log('Success')
        } else throw new Error('New value of production year can not be set,' +
            ' try again')
    }

    addDriver(driver) {
        this.driver = driver
        return 0
    }
}

let supermobil = new Car_class('scorpio', 'alfaromeo', 2001, 245, 3.2)
console.log('Supermobil: ', supermobil);
console.log(supermobil.addDriver('Leo'));
supermobil.info()
supermobil.drive()


console.log('--------Task 8---------')

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.

class Cinderella {

    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}

// let cinderella = new Cinderella('Cindy', 21, 32)
// console.log(cinderella);

let princesses = []
for (let i = 0; i < 10; i++) {
    cinderella = new Cinderella('Cindy' + `${i}`, Math.round(Math.random() * (32 - 18) + 18), Math.round(Math.random() * (35 - 26) + 26))
    princesses.push(cinderella)
}

console.log(princesses);


console.log('--------Task 9---------')

// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.

class Prince extends Cinderella {
    constructor(name, age, footSize) {
        super(name, age);
        this.findedFootSize = footSize
    }

    info() {
        return this
    }
}

let prince = new Prince('a', 22, 26)

console.log(prince.info());

console.log('--------Task 10---------')
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.

let realCinderella
isPrinted = false
for (const princess of princesses) {
    if (prince.findedFootSize === princess['footSize']) {
        console.log('Matched Cinederellas footsize: ', princess)
        realCinderella = princess
        isPrinted = true;
    }
    else if (isPrinted === false && princess === princesses[princesses.length - 1])
        console.warn(`No Cinderellas with footsize ${prince.findedFootSize} were generated, reload the page to generate new list`)
}


console.log('--------Task 11---------')
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

console.log('Double checking for real Cenerella: ', princesses.find((value) => value === realCinderella));