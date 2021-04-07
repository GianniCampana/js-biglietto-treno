var chilometri = parseInt(prompt("quanti chilometri vuoi percorrere?"));

var eta = parseInt(prompt("quanti anni hai?"));

var prezzoAlKm = 0.21;

var prezzoBiglietto = chilometri * prezzoAlKm;
document.getElementById('prezzoBiglietto').innerHTML ="Il prezzo è " + prezzoBiglietto + "€";

var prezzoMinorenni = prezzoBiglietto * 0.8;
var prezzoOver65 = prezzoBiglietto * 0.6;



if(eta < 18){
    prezzoMinorenni;
    document.getElementById('prezzoBiglietto').innerHTML ="Per i minorenni il prezzo è " + prezzoBiglietto + "€";
}



if(eta > 65){
    prezzoOver65;
    document.getElementById('prezzoBiglietto').innerHTML ="Per gli over 65 il prezzo è " + prezzoBiglietto + "€";
}









