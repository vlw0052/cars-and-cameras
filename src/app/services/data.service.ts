import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Camera } from '../models';
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
}

export const cameraData = [
  {
    id: 0,
    deviceNo: 'bc849'
  },
  {
    id: 1,
    deviceNo: 'cb933'
  },
  {
    id: 2,
    deviceNo: 'cb870'
  },
  {
    id: 3,
    deviceNo: 'bc247'
  },
  {
    id: 4,
    deviceNo: 'cb720'
  },
  {
    id: 5,
    deviceNo: 'bc880'
  },
  {
    id: 6,
    deviceNo: 'cb68'
  },
  {
    id: 7,
    deviceNo: 'cb875'
  },
  {
    id: 8,
    deviceNo: 'cb650'
  },
  {
    id: 9,
    deviceNo: 'cb704'
  },
  {
    id: 10,
    deviceNo: 'cb669'
  },
  {
    id: 11,
    deviceNo: 'cb926'
  },
  {
    id: 12,
    deviceNo: 'bc433'
  },
  {
    id: 13,
    deviceNo: 'bc294'
  },
  {
    id: 14,
    deviceNo: 'cb637'
  },
  {
    id: 15,
    deviceNo: 'bc612'
  },
  {
    id: 16,
    deviceNo: 'cb811'
  },
  {
    id: 17,
    deviceNo: 'cb477'
  },
  {
    id: 18,
    deviceNo: 'bc221'
  },
  {
    id: 19,
    deviceNo: 'bc858'
  }
];
