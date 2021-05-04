/*

INICIAVIMO BUDAS (keiciamumas ir scope):
const - nekeiciama reiksme
let - keiciama reiksme
var - keiciama reiksme

KINTAMUJU TIPAI
number (skaicius)
string (tekstas)
boolean (logine reiksme)
array (sarasas, masyvas, matrica)
object (objektas)
null (reiksme kuri neegzistuoja)
undefined (neapibrezta reiksme)

*/

const metai = 2021;
console.log(metai);

const vardas = "Donatas";
console.log(vardas);

const arSninga = false;
console.log("ar sninga",arSninga);

const arTeigiama = true;
console.log("ar teigiamas",arTeigiama);

const pazymiai =[10,5,9,7,3];
console.log(pazymiai)

const petras = {
    vardas: "Petras",
    amzius: 39,
    GyvenamojiVieta: "Gatve g. 1-3, Miestas",
    vaikai: [
        {
            vardas: "Onute",
            amzius: 12
        }
    ]
};
console.log(petras);