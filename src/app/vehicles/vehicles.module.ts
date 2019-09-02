import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VehiclesComponent } from './vehicles.component';
import { DisplayVehicleComponent } from './display-vehicle.component';
import { MatModule } from '../mat.module';

@NgModule({
  declarations: [VehiclesComponent, DisplayVehicleComponent],
  imports: [CommonModule, MatModule],
  exports: [VehiclesComponent, DisplayVehicleComponent]
})
export class VehiclesModule {}
