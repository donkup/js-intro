/*
IF - salygos sakinys

OPERATORIAI:
visi: >, <, >=, <=, ==, !=, ===, !==, 
nenaudotini - ==, !=
naudotini - >, <, >=, <=, ===, !==,
                    
SABLONAI
if () {}
if () {} else {}
if () {} else if () {}
if () {} else if () {} ...  else if () {}
if () {} else if () {} ...  else if () {} else {}

*/
const a = 44;
const b = 44;

if ( a === b  ) {
    console.log('taip');
}else {
    console.log('ne');
}

const akys = 'geltona';

if ( akys === 'melynos') {
    console.log('melynakis');
} else if ( akys === 'zalios') {
    console.log('zaliaakis');
} else if ( akys === 'rudos') {
    console.log('rudaakis');
} else {
    console.log('Neatpazinta akiu spalva...🤔 ');
}
console.log('---------------------');

const parosMetas = 'bet kas';

if (parosMetas === 'rytas') {
    console.log('Labas rytas');    
} else {
    if (parosMetas === 'diena' ) {
        console.log('Laba diena');        
    } else {
        if (parosMetas === 'vakaras') {
            console.log('Labas vakaras');
        } else{
            console.log('Paziurek i laikrodi ⏰');
        }
    }
}