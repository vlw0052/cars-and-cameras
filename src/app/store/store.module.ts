import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { VehiclesStoreModule } from './vehicles-store/vehicles-store.module';
import { CamerasStoreModule } from './cameras-store/cameras-store.module';
import { AssignmentsStoreModule } from './assignments-store/assignments-store.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    VehiclesStoreModule,
    CamerasStoreModule,
    AssignmentsStoreModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([])
  ]
})
export class RootStoreModule {}
