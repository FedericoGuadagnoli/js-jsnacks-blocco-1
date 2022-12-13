// Il software deve chiedere per 10 volte all’utente di inserire un numero. (qui potete usare un prompt).
// Il programma stampa la somma di tutti i numeri inseriti.

//Prendo l'elemento dalla pagina
const targetElement = document.getElementById('target');

// Creo l'array vuoto e la variabile per la somma
let userNumbers = [];
let sum = 0;

// Chiedo all'utente per 10 volte di inserire un numero
for (let i = 0; i < 10; i++) {
    userNumbers.push(parseInt(prompt('Scrivi un numero', '10')));
}
console.log(userNumbers);

// Sommo i numeri dell'array dati dall'utente
for (let n = 0; n < userNumbers.length; n++){
    sum += userNumbers[n];
    console.log(sum);
}

// Stampo in pagina
target.innerText = `La somma dei tuoi numeri è ${sum}`;