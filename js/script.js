// 1. Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
// 2. Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
// 3. Creare un array di oggetti di studenti.
// 4. Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
// 5. Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.


// 1.
var student = {
    "name": "Alessandro",
    "surname": "Amara",
    "age": 23
}

// 2.
for (var key in student) {
    console.log(student[key]);
}

// 3.

var allStudents = 
[
    {
        "name": "Mario",
        "surname": "Rossi",
        "age" : 23
    },

    {
        "name": "Franco",
        "surname": "Verdi",
        "age": 32
    },

    {
        "name": "Giuseppe",
        "surname": "Bianchi",
        "age": 27
    }
];

// 4.

for ( var i = 0; i < allStudents.length; i++) {
    console.log(allStudents[i].name);
    console.log(allStudents[i].surname)
}

// 5.

var userName = prompt("inserisci il tuo nome");
var userSurname = prompt("inserisci il tuo cognome");
var userAge = parseInt(prompt("inserisci la tua età"));

allStudents.push({
    "name": userName,
    "surname": userSurname,
    "age": userAge
});

console.log(allStudents);
