const petras = {
    name: 'Petras',
    age: 49
};

const maryte = {
    name: 'Maryte',
    age: 35
};

console.log(petras);
console.log(maryte);
console.log(maryte.age);
console.log(petras.age);

console.log('-----------------');
const gyventojai = [ petras, maryte];

console.log(gyventojai[0].name);

const batas = {
    name: 'Kaliosas 3000',
    color: 'red',
    price: [
        {
            contry: 'LT',
            price: 99
        },
        {
            country: 'LV',
            price: 89
        },
        {
            country: 'EE',
            price: 109
        },
    ]
}
console.log(batas.price[0]);
console.log(batas.price[1]);
console.log(batas.price[2]);

const kepure = {
    name: 'Skryblius',
    pricing: {
        lt:20,
        lv:30,
        ee:50,
    }
}

console.log(kepure.name, kepure.pricing.lt);
console.log(kepure.pricing.ee);

