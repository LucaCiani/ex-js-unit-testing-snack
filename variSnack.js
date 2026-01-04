function getInitials(fullName) {
    const [firstName, lastName] = fullName
        .split(" ")
        .filter((str) => str !== "");
    return `${firstName.charAt(0).toUpperCase()}.${lastName
        .charAt(0)
        .toUpperCase()}.`;
}

function createSlug(text) {
    if (!text) {
        throw new Error("Titolo non valido!");
    }
    return text.toLowerCase().replaceAll(" ", "-");
}

function average(numeri) {
    numeri.forEach((numero) => {
        if (isNaN(numero)) {
            throw new Error("Average vuole solo numeri!");
        }
    });

    return numeri.reduce((acc, numero) => acc + numero, 0) / numeri.length;
}

function isPalindrome(word) {
    const cleanWord = word.toLowerCase().replaceAll(" ", "");
    const reversedWord = cleanWord.split("").reverse().join("");
    return reversedWord === cleanWord;
}

function findPostById(posts, id) {
    if (isNaN(id)) {
        throw new Error(`${id} non è un id`);
    }

    posts.forEach((p) => {
        if (
            p.id === undefined ||
            p.title === undefined ||
            p.slug === undefined
        ) {
            throw new Error("Array nel formato sbagliato!");
        }
    });
    return posts.find((p) => p.id === id) || null;
}

module.exports = {
    getInitials,
    createSlug,
    average,
    isPalindrome,
    findPostById,
};
