/* Nota: Como estou em processo de aprendizagem e treino do idioma inglês, misturei os idiomas, portugues para ficar claro o meu entendimento e inglês como prática. Portanto, desculpe-me a bagunça de idiomas. */

let array = [];
let array2 = ["Quinta", "Sexta"];
let arrayWeekend = ["Sabado", "Domingo"];

/* funcao PUSH
    add elementos a array e retorna o novo length
*/
let newLength = array.push("Segunda", "Terça", "Quarta");
resultado.innerHTML = `New Length's array = ${newLength} <br>`;
resultado.innerHTML += array;

resultado.innerHTML += `<hr>`;

/* funcao CONCAT   
    funcao que retorna uma nova array concatenada com outra array ou elemento passada como parametro
*/
let newArrayConcat = array.concat(array2, arrayWeekend);
resultado.innerHTML += newArrayConcat;

resultado.innerHTML += `<hr>`;

/* funcao JOIN   
    funcao que coloca um separador, definido nos parametros, entre todos os elementos da array
    Retorna uma string
*/
let stringArray = newArrayConcat.join(" - ");
resultado.innerHTML += stringArray;

resultado.innerHTML += `<hr>`;

/* funcao IndexOf   
    Retorna o numero do indice do elemento passado como parametro.
    Se não encontrar, retorna -1.
    2 parametros - o elemento procurado e o indice de inicio da procura
*/

let indexQuarta = newArrayConcat.indexOf("Quarta");
resultado.innerHTML += `Index of Quarta = ${indexQuarta}`;

resultado.innerHTML += `<br>`;

let indexNotFound = newArrayConcat.indexOf("Janeiro");
resultado.innerHTML += `Index of Janeiro (don't exist) = ${indexNotFound}`;

resultado.innerHTML += `<br>`;

//add more weekend in the final array
newArrayConcat = newArrayConcat.concat(arrayWeekend);
resultado.innerHTML += newArrayConcat;
// have 2 sabados' element. The function indexOf, return the index of first element found.
resultado.innerHTML += `<br>`;
indexQuarta = newArrayConcat.indexOf("Sabado");
resultado.innerHTML += `Index of First Sabado founded = ${indexQuarta}`;

//colocando o segundo parametro, indice de inicio da procura como 6, por exemplo, o retorno sera o indice do sabado a partir do elemento de posicao 6
resultado.innerHTML += `<br>`;
indexQuarta = newArrayConcat.indexOf("Sabado", 6);
resultado.innerHTML += `Index of First Sabado founded = ${indexQuarta}`;

resultado.innerHTML += `<hr>`;

/* funcao lastIndexOf   
    o Mesmo do indexOf, porém ele traz o index do ultimo elemento encontrado da array, como se ele viesse de tras pra frente
*/

let indexLastSabado = newArrayConcat.lastIndexOf("Sabado");
resultado.innerHTML += `Indice do ultimo sabado da array = ${indexLastSabado}`;

resultado.innerHTML += `<br>`;

//mesma coisa do indexOf, posso informar o indice de inicio da procura, porem agora virá de tras pra frente a busca
indexLastSabado = newArrayConcat.lastIndexOf("Sabado", 6);
resultado.innerHTML += `Indice do ultimo sabado da array a partir do indice 6 = ${indexLastSabado}`;

resultado.innerHTML += `<hr>`;
/* funcao SLICE   
    Retorna uma nova arary somente com os valores informados entre os indices informados como parametro da funcao slice(start, end);
    INTERESSANTE PARA QUANDO QUER COPIAR O CONTEUDO DE UMA ARRAY, COMO NO EXEMPLO DA LINHA 92. Sem o slice, o copiaArray receberia uma referencia do newArrayConcat, e caso a newArrayConcat fosse modificada, a copiaArray também seria
*/
let arrayCutSexSabDom = newArrayConcat.slice(4,7);
resultado.innerHTML += `Uma array somente com sexta, sabado e domindo, retirando o trecho que corresponde ao indice 4 como start e 7 como end: <br> ${arrayCutSexSabDom}`;

resultado.innerHTML += `<br>`;

// posso informar negativo, ai ele vem de tras pra frente
arrayCutSexSabDom = newArrayConcat.slice(-3);
resultado.innerHTML += `Informado numero negativo -3, ele retornou os 3 ultimos elementos <br> ${arrayCutSexSabDom}`;

resultado.innerHTML += `<hr>`;
let copiaArray = newArrayConcat.slice();
/* funcao FILL   
    Troca os valores da array, dado um indice de inicio e fim e o novo valor como parametro.
    O retorno é uma array com os valores modificados
*/
newArrayConcat.fill("MODIFICADO",2,7);
resultado.innerHTML += newArrayConcat;
resultado.innerHTML += `<br>`;
resultado.innerHTML += `<br>`;
//sem passar o inicio e fim:
newArrayConcat.fill(" -/- ");
resultado.innerHTML += newArrayConcat;