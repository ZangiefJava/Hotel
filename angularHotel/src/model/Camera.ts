import { TipologiaCamera } from "./TipologiaCamera";

export class Camera {
    constructor(
        public id: number,
        public tipologiaCamera: TipologiaCamera,
        public descrizione?: string,

    ) { }
}