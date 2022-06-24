import { Camera } from "./Camera";
import { Cliente } from "./Cliente";

export class Soggiorno {
    constructor(
        public id: number,
        public cliente: Cliente,
        public camera: Camera
    ) { }
}