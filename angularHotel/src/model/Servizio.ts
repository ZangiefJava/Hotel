import { PrenotazioneCamera } from "./PrenotazioneCamera";

export class Servizio {
    constructor(
        public id: number,
        public descrizione?: string,
        public costo?: number,
        public arrPrenotazioneCamera?: PrenotazioneCamera        
    ) { }
}