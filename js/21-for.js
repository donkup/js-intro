/*
isspauzdinti skaicius intervale
*/


const nuo = 5;
const iki = 7;

for (let i = nuo; i <= iki; i++){
    console.log(i);
}

console.log('---------------');


/*
isspauzdinti skaicius intervale, bet padvigubinti
*/

const nuo2 = 2;
const iki2 = 7;

for(let i = nuo2; i <= iki2; i++){
    console.log(i * 2);
}

console.log('-----------');

/*
turime sarasa (array) ir reikia isspauzdinti visas jo reiksmes
*/

const marks = [10, 2, 8, 4, 6, 9, 20, 15, 17];

for(let i = 0; i < marks.length; i++){
    console.log(marks[i]);
}
console.log('------------------');
const sakin = 'abcdef';

for (let i = 0; i < sakin.length; i++) {
    const element = sakin[i];
    console.log(sakin[i]);
    
}
const rev = [...sakin];
    const rev2= rev.reverse()
    console.log(rev2);

