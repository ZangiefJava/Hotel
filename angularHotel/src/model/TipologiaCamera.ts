import { Camera } from "./Camera";

export class TipologiaCamera {
    constructor(
        public id: number,
        public nome: string,
        public descrizione: string,
        public costoC: number,
        public arrCamera?: Camera[]

    ) { }
}