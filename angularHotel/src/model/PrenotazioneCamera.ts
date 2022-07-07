import { Camera } from "./Camera";
import { Cliente } from "./Cliente";



export class PrenotazioneCamera {

    constructor(
        public id: number,
        public dataInizio?: Date,
        public dataFine?: Date,
        public prezzo?: number,
        public camera?: Camera,
        public cliente?: Cliente
                
    ) { }
}