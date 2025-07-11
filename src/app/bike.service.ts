import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BikeService {

  constructor() { }

  private bikeNameSubject = new BehaviorSubject<string[]>([])
  bikeName$=this.bikeNameSubject.asObservable()
  addbikeName(name: string){
    const currentNames = this.bikeNameSubject.getValue();
    const updatedNames= [...currentNames,name];
    this.bikeNameSubject.next(updatedNames)
  }
}
