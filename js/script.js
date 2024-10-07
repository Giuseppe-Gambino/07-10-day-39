"use strict";
class User {
    constructor(nome, cognome) {
        this.credito = 0;
        this.numeroChiamata = 0;
        this.nome = nome;
        this.cognome = cognome;
    }
    ricarica(totRicarica) {
        this.credito += totRicarica;
    }
    chiamata(totMinuti) {
        if (this.credito > 0.2 * totMinuti) {
            this.credito -= 0.2 * totMinuti;
            this.numeroChiamata += 1;
        }
        else {
            console.log("non basta il credito");
        }
    }
    chiama404() {
        return this.credito;
    }
    getNumeroChiamata() {
        return this.numeroChiamata;
    }
    azzeraChiamate() {
        this.numeroChiamata = 0;
    }
}
const user1 = new User("pino", "pinolo");
console.log(user1);
user1.ricarica(10);
console.log(user1);
user1.chiamata(50);
console.log(user1);
console.log(user1.chiama404());
console.log(user1.getNumeroChiamata());
user1.azzeraChiamate();
console.log(user1.getNumeroChiamata());
