
import { Injectable } from "@angular/core";
import { Camera } from "src/model/Camera";
import { TipologiaCamera } from "src/model/TipologiaCamera";



@Injectable({ providedIn: 'root' })
export class DatiBusiness {
    arr: TipologiaCamera[] = [];
    arrCamera: Camera[] = [];


    constructor() {
        this.arr.push(
            new TipologiaCamera(1, "Superior", 100, this.arrCamera),
            new TipologiaCamera(2, "Deluxe", 150),
            new TipologiaCamera(3, "Business", 200),
            new TipologiaCamera(4, "Suite", 300)
        );
    }
}
