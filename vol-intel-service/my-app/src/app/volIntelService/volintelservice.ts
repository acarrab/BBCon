import { Injectable } from '@angular/core'

interface Name {
    first:string;
    middle:string;
    last:string;
}

interface FormId extends String {}
interface EventId extends String {}


interface FormData {
    email: String;
    name: Name;
    hours: Number;
    formId: FormId;
}

interface VolIntelService {
    constructor();
    submit(data:FormData):FormId;
    getEvents():EventId[];
    getVolume(id:EventId):Number;
    

}



@Injectable()
export class VolIntel {
    constructor() {

    }
    submit():Guid {
        
    }
}