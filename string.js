//Írj programot, ami bekéri a felhasználó bevét, majd keresztnevén szólítva köszönti!
let nev = prompt("Kérem adja meg a keresztnevét!");
alert("Szia " + nev + "!");

//Írj programot, mely megszámolja, hogy az inputként érkező mondatban hány darab ”a” betű van!
let mondat = prompt("Kérem adjon meg egy mondatot!");
let darab = 0;
for (let i = 0; i < mondat.length; i++) {
    if (mondat[i] === "a") {
        darab++;
    }
}
alert("A mondatban " + darab + " darab a betű van!");

//Olvass be egy szöveget, és írd ki a betűit fordított sorrendben!
let szoveg = prompt("Kérem adjon meg egy szöveget!");
let forditott = "";
for (let i = szoveg.length - 1; i >= 0; i--) {
    forditott += szoveg[i];
}
alert("A szöveg fordítva: " + forditott);