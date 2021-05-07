/*
Automobilis:
-kuro kiekis(litrai)
-kuro sanaudos (l/100km)
-norimas nuvaziuoti atstumas (kilometras)

ar pavyks nuvaziuoti norima atstuma su turimu kiekiu?

*/

function canDrive(kiekis, sanaudos, atstumas) {
   const imanomasNuvaziuotiAtstumas = kiekis / sanaudos * 100;
   console.log(imanomasNuvaziuotiAtstumas);
   if (imanomasNuvaziuotiAtstumas >= atstumas) {
       return 'True'
   }
   return 'False'
}


const try1 = canDrive(20, 5, 400);
const try2 = canDrive(10, 8, 1500);
const try3 = canDrive(20, 5, 20);

console.log(try1);
console.log(try2);
console.log(try3);