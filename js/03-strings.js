/*
STRINGS (tekstas)

iniciavimo budai:
- viengubos (') kabutes
- dvigubos(") kabutes
- backtick (`) kabutes (${})
jei reikia kad butu tekste ir viengubos ir dvigubos atskiriamas (\) backslash

*/

const kabutes1 = 'Labas';
const kabutes2 = "rytas";

console.log(kabutes1);
console.log(kabutes2);

// Viengubos (') kabutes.
const kabutes21 = "viengubos (') kabutes.";
console.log(kabutes21);

// Dvigubos (") kabutes.

const kabutes12 = 'Dvigubos (") kabutes.';
console.log(kabutes12);

const vardas = 'Vardenis';
const pavarde = 'Pavardenis';

// Vardenis pavardenis
const fullName = vardas + ' ' + pavarde;
console.log(fullName);

// Sveiki, as esu Vardenis!
const sayHi = 'Sveiki as esu ' + vardas + ' ' + '!';
console.log(sayHi);

// \n - enter
// \t - tab

 
const imgSrc = './img/localStorage.png';
const HTML = '<header>\n\
<img src="" alt="logo" class="logo">\n\
<nav>\n\
    <a href="#"></a>\n\
    <a href="#"></a>\n\
    <a href="#"></a>\n\
    <a href="#"></a>\n\
</nav>\n\
</header>';

console.log(HTML);

const H2 = `<header>
<img src="${imgSrc}" alt="logo" class="logo">
<nav>
    <a href="#"></a>
    <a href="#"></a>
    <a href="#"></a>
    <a href="#"></a>
</nav>
</header>`;

console.log(H2);