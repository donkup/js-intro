/*
switch
*/
const akys = 'blue'
switch (akys) {
    case 'blue':
        console.log('Melynos');
        break;
    case 'green':
        console.log('Zalios');
        break;
    case 'brown':
        console.log('Rudos');
        break;
    default:
        console.log('neatpazinta akiu spalva');
}

if (akys === 'blue') {
    console.log('Melynakis');    
} else if (akys === 'green') {
    console.log('Zaliaakis');
    
} else if (akys === 'brown') {
    console.log('Rudaakis');
    
} else {console.log('neatpazinta spalva');
    
} 
    
console.log('----------');

const day = 8;

switch (day){
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log('darbo diena');
        break;
    case 6:
    case 7:
        console.log('savaitgalis');
        break;
    default:
        console.log('neatpazinta savaites diena SU SWITCH');
        
}

if (day === 1 || day === 2 || day === 3 || day === 4 || day === 5){
    console.log('DARBO DIENA');
} else if (day === 6 || day === 7) {
    console.log("SAVAITGALIS");  
} else {
    console.log("NEATPAAZINTA su IF");
}
console.log('-----------------');

/*
arbatos paruosimo procesas:
0)-paimti puodeli
1)-ideti arbatos
2)-ideti cukraus
3)-uzpilti vandens
4)-ismaisyti
5)-gerti
// norint kad butu isvardinta visi sekantys po pamineto nus skaitoma iki (BREAK)
*/

const processStep = 7;

switch (processStep){
    case 0:
        console.log('Paimti puodeli');
    case 1:
        console.log('Ideti arbatos');
    case 2:
            console.log('Ideti ukraus');
    case 3:
        console.log('Uzpilti Vandens');
    case 4:
        console.log('ismaisyti');
    case 5:
        console.log('GERTI');
        break;
    default:
        console.log('NEAISKU KA NORI🙄');
        break;
            
}

