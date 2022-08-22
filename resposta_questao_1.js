/**
 * 1 - Crie uma função que receba um valor INTEIRO positivo,
 * e verifique se os DÍGITOS estão em ordenação sequencial CRESCENTE ou DECRESCENTE.
 * Pode considerar dígitos iguais como sequenciais (Variação de um dígito para o outro deve ser 1 ou menor)
 */

function integerNumber(max) {
    return Math.floor(Math.random() * max) + 1;
}

function generateSequence() {
    const numbers = [
        integerNumber(10),
        integerNumber(10),
        integerNumber(10),
        integerNumber(10),
        integerNumber(10),
        integerNumber(10),
        integerNumber(10),
        integerNumber(10),
    ];

    return numbers;
}

const list = generateSequence();
const listaSequencial = [1, 2, 2, 4, 5, 5, 6, 7, 8];

function checkSequence(array) {
    const checkDifference = array.slice(1).map(function (n, i) {
        return n - array[i];
    });

    console.log(`Diferenca`, checkDifference);
    const isDifference = checkDifference.every((value) => value == 1);

    return isDifference;
}

console.log(checkSequence(list));

console.log(checkSequence(listaSequencial));
