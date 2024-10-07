const paragraph: string =
    "Urania. Qué nombre. A la gente le gusta, le parece sonoro, original, raro. A ella también, aunque le evoca sólo cosas tristes. Todo le evoca cosas tristes, ahora que ha vuelto. Pero ¿cuándo no, desde que se fue de esta ciudad, a la que creía no volvería nunca? ¿Y cómo era posible que alguien se llamara así en una familia de dominicanos católicos, que adoraban a la Virgen del Rosario y a la Virgen de Altagracia? Su padre le contó que su madre era quien escogió su nombre. Urania: la Musa de la astronomía. Nadie se atrevió a contradecirla. A él le parecía bien, se lo dijo como si la elección del nombre hubiera sido cosa de poca importancia. En aquellos días no había problemas en la casa. Las cosas cambiaron después, claro. Cambiaron tanto.";

function isTextInPara(fullText: string, searchTerm: string): boolean {
    return fullText.toLowerCase().includes(searchTerm.toLowerCase());

}

let contador: number = 0;

function howManyTextInPara(fullText: string, searchTerm: string): number {


    const lowerFullText = fullText.toLowerCase();
    const lowerSearchTerm = searchTerm.toLowerCase();
    const palabrasArray = lowerFullText.split(" ");
    console.log(palabrasArray);
    for (let i: number = 0; i < palabrasArray.length; i++) {
        if (palabrasArray[i] == lowerSearchTerm) {
            contador++;
        }
    }
    return contador;
}
console.log(howManyTextInPara(paragraph, "la"));










