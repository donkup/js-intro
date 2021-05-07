/*
DAY

Jeigu, dabar yra 0:00 iki 4:59 -> Naktis
Jeigu, dabar yra 5:00 iki 10:59 -> Rytas
Jeigu, dabar yra 11:00 iki 18:59 -> Diena
Jeigu, dabar yra 19:00 iki 23:59 ->Vakaras

*/

function parosMetas ( val, min){
    if (val < 5) {
        return 'Naktis'        
    }
    if (val < 11) {
        return 'Rytas'
    }
    if (val < 19) {
        return 'Diena'
    }
    return'Vakaras'
}
console.log(parosMetas(2,39));