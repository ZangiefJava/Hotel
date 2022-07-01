export class Cliente {

    constructor(
        public id?: number,
        public user?: string,
        public nome?: string,
        public cognome?: string,     
        public password?: string,
        public dataNascita?: Date
    ) { }
}