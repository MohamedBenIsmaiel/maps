import faker from "faker";

export class Company{
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