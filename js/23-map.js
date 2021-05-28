function dvigubinu(list) {
    const dvigubasSarasas = [];

    for (let i = 0; i < list.length; i++) {
        const item = list[i];
        dvigubasSarasas.push(item * 2)

    }
    return dvigubasSarasas;
}
module.exports = dvigubinu;


//idex.js
// const dvigubinu = require('./js/23-map');

// const ilgiai = [1, 2, 3, 4, 5];


// const duIlgiai = dvigubinu(ilgiai);
// console.log(ilgiai);
// console.log(duIlgiai);

// const trysIlgiai = ilgiai.map(item => item * 3);
// console.log(trysIlgiai);

