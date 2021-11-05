export interface Mappable{
    location: {
        lat: number;
        lng: number;
    };
    getContent():string;
}
export class Maps{
   private getmap: google.maps.Map;
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
        const marker = new google.maps.Marker({
            map: this.getmap,
            position: {
                lat: elment.location.lat,
                lng: elment.location.lng,
            },
        })
        //adding a listener
        marker.addListener('click', ()=>{
            const infoWindow = new google.maps.InfoWindow({
                content: elment.getContent(),
            });
            infoWindow.open(this.getmap, marker);
        })

    }
}