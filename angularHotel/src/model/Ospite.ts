import { PrenotazioneCamera } from "./PrenotazioneCamera";

export class Ospite {

    constructor(
        public id: number,
        public codiceFiscale?: string,
        public nome?: string,
        public cognome?: string,
        public prenotazioneCamera?:PrenotazioneCamera
    ) { }
}