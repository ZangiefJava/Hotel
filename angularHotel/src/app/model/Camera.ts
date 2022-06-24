import { TipologiaCamera } from "./TipologiaCamera";

export class Camera{
    constructor(
        public id:number,
        public descrizione:string,
        public tipologiaCamera:TipologiaCamera
    ){}
}