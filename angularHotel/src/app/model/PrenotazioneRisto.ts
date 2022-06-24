import { Time } from "@angular/common";
import { Cliente } from "./Cliente";

export class PrenotazioneRisto{
    constructor(
        public id:number,
        public data:Date,
        public ora:Time,
        public posti:number,
        public cliente:Cliente

    ){}
}