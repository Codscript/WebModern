const school = "Udemy"

console.log(school.charAt(4));
// y
console.log(school.charAt(5));
// nada pois so até o 4
console.log(school.charCodeAt(3));
// 109
console.log(school.indexOf('m'));
// 3
console.log(school.substring(1));
// demy
console.log(school.substring(0, 3));
// Ude
console.log("school".concat(school).concat("!"));
console.log("school" + school + "!");
// schoolUdemy!
console.log(school.replace('e', '3'));
// Ud3my
console.log('Ana,Maria,pedro'.split(','));
// [ 'Ana', 'Maria', 'pedro' ]