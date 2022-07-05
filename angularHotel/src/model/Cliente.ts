import { PrenotazioneCamera } from "./PrenotazioneCamera";

export class Cliente {

    constructor(        
        public user: string,
        public nome?: string,
        public cognome?: string,     
        public password?: string,
        public arrPrenotazione?:PrenotazioneCamera[]     
    ) { }
}