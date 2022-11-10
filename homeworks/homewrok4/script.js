//<--------- Task 1 ----------->
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним
// текстом всередині

for (let i = 0; i < 10; i++) {
    document.write(`<div>lorem ipsum dolor</div>`)
}

//<--------- Task 2 ----------->
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним
// текстом і індексом всередині

for (let i = 0; i < 10; i++) {
    document.write(`<div>lorem ipsum dolor, index: ${i}</div>`)
}


//<--------- Task 3, 4 ----------->
// За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом
// всередині і індексом всередині.

i = 0
while (i < 20) {
    document.write(`<h1>lorem ipsum dolor ${i}</h1>`);
    i++;
}


//<--------- Task 5 ----------->
// - Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
//ШАБЛОН:
//  <ul>
//     <li>ITEM OF ARRAY</li>
//     <!--
//         і тд інші об'єкти масиву
//          ...
//          ...
//          ...
//     -->
// </ul>

let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react',
    'angular', 'node.js'];

document.write(`<ul>`)
    for (let item of listOfItems) {
        document.write(`<li>${item}</li>`)
}
document.write(`</ul>`)


//<--------- Task 6 ----------->
//Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону  Зробити адекватну стилізацію
// Великими літерами прописанні властивості об'єкту які потрібно впровадити в
// шаблон
//ШАБЛОН
//  <div class="product-card">
//         <h3 class="product-title">TITLE. Price - PRICE</h3>
//         <img src="IMAGE" alt="" class="product-image">
// </div>

let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
    },
];

document.write(`<div class="container">`)
for (let j = 0; j < products.length; j++) {
    document.write(`
     <div class="product-card">
        <h3 class="product-title">${products[j]["title"].slice(0,1).toUpperCase() + products[j]["title"].slice(1,)}. Price - ${products[j]["price"]}</h3>
        <img src="${products[j]["image"]}" alt="" class="product-image">
    </div>
`)
}
document.write(`</div>`)