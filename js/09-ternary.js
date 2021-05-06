/*
ternary operator

Klausimas ? teigiama : neigiama
 naudotinas kai yra TAIP arba NE 
*/

const arLyja = false;

const sketis = arLyja ? 'pasiimk' : 'nereikia';//pasiimk / nereikia

console.log(sketis);

const skaicius = 4 < 2 ? 'daugiau' : 'ne daugiau';
console.log(skaicius);

console.log('---------------');

/*
Nestintas ternary


*/
const color = 'red';
const x1 = color === 'blue' ? 'melyna': color === 'red' ? 'raudona': 'nezinoma spalva'; 

console.log(x1);