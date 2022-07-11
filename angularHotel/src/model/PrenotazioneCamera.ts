import { Camera } from "./Camera";
import { Cliente } from "./Cliente";
import { Ospite } from "./Ospite";
import { Servizio } from "./Servizio";



export class PrenotazioneCamera {

    constructor(
        public id: number,
        public dataInizio?: Date,
        public dataFine?: Date,
        public prezzo?: number,
        public camera?: Camera,
        public cliente?: Cliente,
        public arrServizio?:Servizio[],
        public arrOspite?:Ospite[]
                
    ) { 
        
    }
}