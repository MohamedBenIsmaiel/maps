import faker from "faker";
import { Mappable } from "./Maps";

export class User implements Mappable{
    name:string;
    localtion:{lat:number; lng:number} = {
        lat: 0,
        lng: 0,
    };

    constructor(){
        this.name = faker.name.firstName();
        this.localtion = {
            lng: parseFloat(faker.address.longitude()),
            lat: parseFloat(faker.address.latitude()),
        };
    }
}