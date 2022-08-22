/* 2 - Crie uma função que receba um array de inteiros como parâmetro e verifique 
se neste array existem números duplicados, caso exista,
retorne um novo array com os valores que se repetem.

*/

function findDuplicates(array) {
    let duplicates = array.filter(
        (item, index) => array.indexOf(item) != index
    );

    return duplicates;
}

let duplicateElements = findDuplicates(list);
console.log(`Array original: `, list);
console.log(`Duplicados: `, duplicateElements);
