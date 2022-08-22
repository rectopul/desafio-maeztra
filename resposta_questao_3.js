/**
 *
 * 3 - Crie uma função que recebe uma string com qualquer sequência dos seguintes caracteres
 * '[', '{', '(', ')', '}', ']' e retorne se a sequência é uma sequência válida ou não.
 * Uma sequência é válida se as chaves, parênteses e colchetes abrem e fecham corretamente
 */

function createStringSequence(valid) {
    const validCharacters = ["[", "{", "(", ")", "}", "]"];

    const sequence = [
        validCharacters[integerNumber(5)],
        validCharacters[integerNumber(5)],
        validCharacters[integerNumber(5)],
        validCharacters[integerNumber(5)],
        validCharacters[integerNumber(5)],
        validCharacters[integerNumber(5)],
        validCharacters[integerNumber(5)],
        validCharacters[integerNumber(5)],
    ];

    const sequenceValid = [
        `{`,
        `[`,
        `(`,
        `)`,
        `(`,
        `)`,
        `{`,
        `}`,
        `[`,
        `]`,
        `]`,
        `{`,
        `}`,
        `}`,
    ];

    function checkValid(s) {
        let characters = {
            ")": "(",
            "}": "{",
            "]": "[",
        };

        let pushing = [];

        for (let i = 0; i < s.length; i++) {
            if (s[i] === "(" || s[i] === "[" || s[i] === "{") {
                pushing.push(s[i]);
            } else if (pushing[pushing.length - 1] === characters[s[i]]) {
                pushing.pop();
            } else return false;
        }

        return pushing.length ? false : true;
    }

    if (valid === true)
        console.log(`\nSequencia de caracteres: `, sequenceValid);
    else console.log(`\nSequencia de caracteres: `, sequence);

    if (valid === true) return checkValid(sequenceValid);
    else return checkValid(sequence);
}

console.log(`Sequencia: `, JSON.stringify(createStringSequence(true)));
