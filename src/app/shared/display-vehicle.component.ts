import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { RootState } from '../store/state';
import { Vehicle } from '../models';
import { VehicleStoreSelectors } from '../store/vehicles-store';

@Component({
  selector: 'display-vehicle',
  template: `
    <p *ngIf="vehicle">Vehicle - {{ vehicle.name }}</p>
  `
})
export class DisplayVehicleComponent implements OnInit {
  @Input() id: number;
  vehicle: Vehicle = null;
  constructor(private store: Store<RootState>) {}

  ngOnInit() {
    this.store
      .select(VehicleStoreSelectors.selectVehicleById(this.id))
      .subscribe(veh => {
        this.vehicle = veh;
      });
  }
}
