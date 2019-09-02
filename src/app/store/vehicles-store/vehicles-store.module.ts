import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { vehicleReducer } from './vehicles.reducer';
import { EffectsModule } from '@ngrx/effects';
import { VehicleStoreEffects } from './vehicles.effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('vehicles', vehicleReducer),
    EffectsModule.forFeature([VehicleStoreEffects])
  ]
})
export class VehiclesStoreModule {}
