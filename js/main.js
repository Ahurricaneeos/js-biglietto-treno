let userKilometers = parseInt(prompt("Inserire quantità chilometri da percorrere:"));
let userAge = parseInt(prompt("Inserire la propria età:"));
let pricePerKilometer = 0.21;
let fullPrice = pricePerKilometer * userKilometers;
console.log(fullPrice);

// Sconto <18 20%
// Sconto >65 40%

if (userAge <= 18) {
 console.log((fullPrice / 100) * 80);
 document.getElementById('costo').innerHTML = "Il prezzo del biglietto è di " + ((fullPrice / 100) * 80) + "€";
} else if (userAge >= 65) {
 console.log((fullPrice / 100) * 60);
 document.getElementById('costo').innerHTML = "Il prezzo del biglietto è di " + ((fullPrice / 100) * 60) + "€";
} else {
console.log(fullPrice);
 document.getElementById('costo').innerHTML = "Il prezzo del biglietto è di " + (fullPrice) + "€";
}