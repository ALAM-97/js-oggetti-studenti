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
    // console.log(allStudents[i].name);
    // console.log(allStudents[i].surname)
    document.getElementById("list").innerHTML += `<li>${allStudents[i].name}</li>`
    document.getElementById("list").innerHTML += `<li>${allStudents[i].surname}</li>`
    document.getElementById("list").innerHTML += `<hr>`
}

// 5.
var btn = document.getElementById("btn");
var regBtn = document.getElementById("btn-reg");

btn.addEventListener("click",
    function() {
        document.getElementById("inputs").style.display = "block";
        document.getElementById("btn-reg").style.display = "block";
    }
);

regBtn.addEventListener("click",
    function() {
        var userName = document.getElementById("user-name").value;
        var userSurname = document.getElementById("user-surname").value;
        var userAge = document.getElementById("user-age").value;

        allStudents.push({
            "name": userName,
            "surname": userSurname,
            "age": userAge
        })
        document.getElementById("list").innerHTML += `<li>${userName}</li>`
        document.getElementById("list").innerHTML += `<li>${userSurname}</li>`
        document.getElementById("list").innerHTML += `<hr>`
        document.getElementById("esito").style.display = "block";
        document.getElementById("inputs").style.display = "none";
        document.getElementById("btn-reg").style.display = "none";
    }
);




// allStudents.push({
//     "name": userName,
//     "surname": userSurname,
//     "age": userAge
// })

// var userName = prompt("inserisci il tuo nome");
// var userSurname = prompt("inserisci il tuo cognome");
// var userAge = parseInt(prompt("inserisci la tua età"));


console.log(allStudents);
