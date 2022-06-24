export class Cliente {

    constructor(
        public id: number,
        public nome: string,
        public cognome: string,
        public codiceFiscale: string,
        public mail: string,
        public user: string,
        public password: string,
        public DataNascita: Date
    ) { }
}