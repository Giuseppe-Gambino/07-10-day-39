interface iSmartphone {
  credito: number;
  numeroChiamata: number;
  ricarica(totRicarica: number): void;
  chiamata(totMinuti: number): void;
  chiama404(): number;
  getNumeroChiamata(): number;
  azzeraChiamate(): void;
}

class User implements iSmartphone {
  nome: string;
  cognome: string;
  credito: number = 0;
  numeroChiamata: number = 0;
  constructor(nome: string, cognome: string) {
    this.nome = nome;
    this.cognome = cognome;
  }
  ricarica(totRicarica: number): void {
    this.credito += totRicarica;
  }
  chiamata(totMinuti: number): void {
    if (this.credito > 0.2 * totMinuti) {
      this.credito -= 0.2 * totMinuti;
      this.numeroChiamata += 1;
    } else {
      console.log("non basta il credito");
    }
  }
  chiama404(): number {
    return this.credito;
  }
  getNumeroChiamata(): number {
    return this.numeroChiamata;
  }
  azzeraChiamate(): void {
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
