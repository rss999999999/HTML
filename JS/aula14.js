/**COMENTÁRIOS (Aula 11)
 * //COMENTÁRIO IGUAIS AO DO JAVA!!!!!
 * asdfasdfa
 * fasdfasdf
 * asdfasdfasdf
 *
 *O Google (chrome) usa a mesma engine (motor do JavaScript) do JNode: V8 do Google;
 */

/**COMENTÁRIOS (Aula 12)
 * //COMENTÁRIO IGUAIS AO DO JAVA!!!!!
 * asdfasdfa
 * fasdfasdf
 * asdfasdfasdf
 *
 *O Google (chrome) usa a mesma engine (motor do JavaScript) do JNode: V8 do Google;
 */

 /**COMENTÁRIOS (Aula 13)
 *  Não podemos criar variáveis com palavras reservadas
 *  let console n irá funcionar
 *  let if n irá funcionar
 *  
 *  Variáveis precisam ter nomes significativos! 
 *  Errado: let n= "João"; o que significa n?
 *  Correto let nomeCliente = "João"
 *  
 *  Não pode começar o nome de uma variável com um número: let 1nomeCliente = "João"
 *  Não podem conter espaçoes ou traços: let nome Cliente
 *  Utilizamos camelCase!!!! 
 *  
 *  Variáveis são case-sensitive: nomeCliente <> nomecliente
 *  Não poder redeclarar uma variável com let  
 * 
 *  Não utilize var, sempre utilizar let!!! Isso para coisas que irão variar
 * 
 */


/** COMENTÁRIOS (Aula 14)
 * 
 * 
 *  Não podemos criar constates com palavras reservadas
 *  
 *  Constatntes precisam ter nomes significativos! 
 *  
 *  Não pode começar o nome de uma constante com um número
 *  Não podem conter espaçoes ou traços
 *  Utilizamos camelCase!!!! 
 *  
 *  Constantes são case-sensitive: nomeCliente <> nomecliente
 * 
 *  Não podemos modificar o valor de uma constante
 *  
 *  Não utilize var, utilize const
 * 
 *  https://github.com/luizomf/curso-js (Curso Udemy JS - github)
 * 
 *  ShortCut: move line up/down: alt + down/upArrow
 * 
 *  String = "Text" | Number = Número
 */


const nome = 'João' //const eh parecido com o val, ambos NÃO variam!! 
//nome = "Pedro" >>>> isso irá gerar um erro, pois o nome é uma const (n varia)
console.log(nome, "nasceu em 1984");         
console.log("Em 2000", nome, "conheceu Maria");
console.log(nome, "casou-se com Maria em 2012");
 

let teste; //Se eu substituir o let por const o código n vai rodar
console.log(teste);
teste="João";
console.log(teste);
teste="Pedro";
console.log(teste);


const primeiroNumero = 5; //Number
const segundoNumero = 10;
const terceiroNumero = "15";
const resultado = segundoNumero+terceiroNumero;

console.log(primeiroNumero+segundoNumero);
console.log(primeiroNumero-segundoNumero);
console.log(primeiroNumero/segundoNumero);
console.log(primeiroNumero*segundoNumero);

//para a impressão de resultado ele considera que segundoNumero e terceiroNumero são strings
//ele imprime 10+15 = "1015" string
console.log(resultado);   

console.log(typeof (primeiroNumero*segundoNumero));
console.log(typeof primeiroNumero);
console.log(typeof terceiroNumero);
console.log(typeof resultado);






 