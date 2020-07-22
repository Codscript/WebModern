let isAtivo = false
console.log(isAtivo);
// false
console.log('Os verdadeiros');
isAtivo = true
console.log(isAtivo);
isAtivo = 1
    // true


// Negação !Não !!Não,Não situações que dão verdadeiro true
console.log(!!3);
console.log(!!'test');
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);
console.log(!!(isAtivo = true));
console.log(!!-1);
console.log(!!' ');

// Situaçĩes que dão false
console.log('Os falsos');
console.log(!!0);
console.log(!!'');
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
console.log(!!(isAtivo = false));
console.log('Para finalizar...');
console.log(!!('' || null || 0 || ' '));

// Como identificar uma istrng vazia com boolean
let nome = ""
console.log(nome || 'Desconhcido');