// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby. 
// l’utente inserisce il suo nome tramite un input.
// Comunicagli se può partecipare o no alla festa.

console.log('JS OK');

// Prendo gli elementi dalla pagina
const input = document.getElementById('name');
const button = document.getElementById('button');
const message = document.getElementById('message');

// Creo l'array con la lista dei nomi
const list = ['marco', 'giulio', 'federico','simone'];

// Prendo il value dell'input
const userName = input.value;