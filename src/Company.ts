import faker from "faker";
import {Mappable} from "./Maps";

export class Company implements Mappable{
    name: string;
    location: {lat:number; lng: number} = {
        lat: 0,
        lng: 0,
    };

    constructor(){
        this.name = faker.company.companyName();
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude()),
        };
    }
}