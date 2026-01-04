const {
    getInitials,
    createSlug,
    average,
    isPalindrome,
    findPostById,
} = require("./variSnack");

test("La funzione getInitials restituisce le iniziali di un nome completo.", () => {
    expect(getInitials("Mario Rossi")).toBe("M.R.");
    expect(getInitials("luigi bianchi")).toBe("L.B.");
    expect(getInitials("Sofia  verdi")).toBe("S.V.");
});

test("La funzione createSlug restituisce una stringa in lowercase.", () => {
    expect(createSlug("fRAse CoN MaiUSCole")).toBe("frase-con-maiuscole");
});

test("La funzione average calcola la media aritmetica di un array di numeri.", () => {
    expect(average([5, 15])).toBe(10);
    expect(average([2, 4, 6])).toBe(4);
    expect(() => average([2, 4, "ciao"])).toThrow();
});

test("La funzione createSlug sostituisce gli spazi con -.", () => {
    expect(createSlug("Questo è un test")).toBe("questo-è-un-test");
});

test("La funzione isPalindrome verifica se una stringa è un palindromo.", () => {
    expect(isPalindrome("Anna")).toBeTruthy();
    expect(isPalindrome("I topi non avevano nipoti")).toBeTruthy();
    expect(isPalindrome("Boolean")).toBeFalsy();
});

test("La funzione createSlug lancia un errore se il titolo è vuoto o non valido.", () => {
    expect(() => createSlug("")).toThrow("Titolo non valido!");
    expect(() => createSlug(null)).toThrow("Titolo non valido!");
});

const posts = [
    {
        id: 1,
        title: "Introduzione a JavaScript",
        slug: "introduzione-a-javascript",
    },
    {
        id: 2,
        title: "Introduzione a React",
        slug: "introduzione-a-react",
    },
];

test("La funzione findPostById restituisce il post corretto dato l’array di post e l’id", () => {
    expect(findPostById(posts, 2)).toEqual({
        id: 2,
        title: "Introduzione a React",
        slug: "introduzione-a-react",
    });
    expect(findPostById(posts, 3)).toEqual(null);
    expect(() => findPostById(posts, "ciao")).toThrow("ciao non è un id");
    expect(() => findPostById([3, 6], 2)).toThrow(
        "Array nel formato sbagliato!"
    );
});
