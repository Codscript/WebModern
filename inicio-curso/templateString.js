const nome = 'Rebeca'
const concatenacao = 'Olá '+nome+'!'
// Olá Rebeca!
const template =`olá ${nome}!`
// Olá Rebeca!
console.log(concatenacao, template);

// Expreções...
console.log(`1 + 1 = ${1 + 1}`);
// 1 + 1 = 2

const up = texto => texto.toUpperCase();
console.log(`Ei... ${up('cuidado')}!`);
// Ei... CUIDADO!