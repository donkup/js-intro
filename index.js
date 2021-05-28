const dvigubinu = require('./js/23-map');

const ilgiai = [1, 2, 3, 4, 5];


const duIlgiai = dvigubinu(ilgiai);
console.log(ilgiai);
console.log(duIlgiai);

const trysIlgiai = ilgiai.map(item => item * 3);
console.log(trysIlgiai);

