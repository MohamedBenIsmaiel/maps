import faker, { fake } from "faker";
import {Mappable} from "./Maps";

export class Company implements Mappable{
    name: string;
    catchPharser: string;
    location: {lat:number; lng: number};

    constructor(){
        this.name = faker.company.companyName();
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude()),
        };
        this.catchPharser = faker.company.catchPhrase();
    }
    getContent():string{
        return `
          Company name is ${this.name} ,
          catch phrase ${this.catchPharser}
        `
    }
}