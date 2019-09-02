import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Camera, Vehicle } from '../models';
import { cameraData, vehicleData } from '../mockData';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor() {}
  getCameras() {
    return new Observable<{ items: Camera[] }>(subs => {
      subs.next({ items: cameraData });
    });
  }
  getVehicles() {
    return new Observable<{ items: Vehicle[] }>(subs => {
      subs.next({ items: vehicleData });
    });
  }
}
