import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Vehicle } from '../models';
import {
  VehicleStoreSelectors,
  VehicleStoreActions
} from '../store/vehicles-store';
import { RootState } from '../store/state';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.sass']
})
export class VehiclesComponent implements OnInit {
  vehicles$: Observable<Vehicle[]>;
  constructor(private store: Store<RootState>) {}

  ngOnInit() {
    this.vehicles$ = this.store.select(VehicleStoreSelectors.selectVehicles);
    this.store.dispatch(new VehicleStoreActions.LoadVehicles());
  }

  getCamera() {}
}
