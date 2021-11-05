export interface Mappable{
    location: {
        lat: number;
        lng: number;
    }
}
export class Maps{
    getmap: google.maps.Map;
    constructor( elmentId:string) {
       this.getmap =  new google.maps.Map(document.getElementById(elmentId), {
            zoom:1,
            center: {
                lat:0,
                lng:0,
            },
        });
    }

    addMark(elment: Mappable):void{
        new google.maps.Marker({
            map: this.getmap,
            position: {
                lat: elment.location.lat,
                lng: elment.location.lng,
            },
        })

    }
}