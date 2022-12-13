// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby. 
// l’utente inserisce il suo nome tramite un input.
// Comunicagli se può partecipare o no alla festa.

console.log('JS OK');

// Prendo gli elementi dalla pagina
const input = document.getElementById('name');
const button = document.getElementById('button');
const target = document.getElementById('message');

// Creo l'array con la lista dei nomi
const list = ['marco', 'giulio', 'federico','simone'];



// Creo la funzione al click del bottone con la callback
button.addEventListener('click', function(){

    // Prendo il value dell'input
    let userName = input.value.trim();

    // Validazione
    if (!userName || !isNaN(userName)) {
        target.innerText = 'Devi inserire solo testo!'
        return;
    }

    // Preparo una variabile booleana
    let Isvalid = false;

    // Creo il ciclo per la verifica del nome
    for ( i=0; i < list.length; i++){
        const validName = list[i];
        
        // Verifico se il nome dato dall'utente sia nella lista
        if (validName === userName ) {
            Isvalid = true; 
        }
    }
    // Stabilisco cosa stampare in pagina
    target.innerText = Isvalid ? 'Sei invitato alla festa' : 'Non sei invitato alla festa';

});