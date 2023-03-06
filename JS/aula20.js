 /* * Tipos de OPERADORES:
 * 
 * Aritméticos (+ - / *)
 * + Adição / Concatenação
 * **(potenciação)
 * % (mod - resto da divisão)
 * 
 * precedência >>> [ () ; ** ; * / % ; + - ]
 * incremente = ++
 * decremento = --
 * 
 * NaN = Not a Number (multiplicar uma string)
 * parseInt('5545465'); (faz a conversão de um string para um int)
 * parseFloat('546.4'); (faz a conversão de um string para um float)
 * Number('65413')
 * 
 * 
 */

const num1 = 5;
const num2 = 10;
const num3 = '20';

console.log(num1+num2); //concatenação (unir dois valores)
console.log(num1+num3); //concatenação (unir dois valores) > transforma tudo em string!
console.log(num3+num1); //concatenação (unir dois valores) > transforma tudo em string!

let contador = 1;   //não podemos usar const contador = 1 e depois usar contador++, pois const n varia
console.log(contador + " pós");
contador++; //pós
console.log(contador + " pós");

let contador1 = 1;
console.log(contador1 + " pré");
++contador1; //pós
console.log(contador1 + " pré");
++contador1; //pós
console.log(contador1 + " pré");

let operadorqueconta = 1;  //operadores de atribuição
console.log(operadorqueconta);
operadorqueconta += 2;
console.log(operadorqueconta);
operadorqueconta += 2;
console.log(operadorqueconta);
operadorqueconta += 2;
console.log(operadorqueconta);
operadorqueconta += 2;
console.log(operadorqueconta);


const num20 = 10;
const num30 = '20';
console.log(num20*num30);
console.log(num30*num20);

const num200 = 10;
const num300 = 'teste';
console.log(num200*num300);
console.log(num300*num200);

const num8 = 10;
const num9 = parseInt('20');
console.log(num9*num8);
console.log(num8*num9);

/* const num8 = 10;                  >>>> o motor transf o 20 em float > string em um number
const num9 = parseFloat('20');
console.log(num9*num8);
console.log(num8*num9); */

/* const num8 = 10;             >>>> o motor se vira pra transf a string em um number
const num9 = Number('20');
console.log(num9*num8);
console.log(num8*num9); */