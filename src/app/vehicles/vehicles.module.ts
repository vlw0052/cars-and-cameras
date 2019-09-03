import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VehiclesComponent } from './vehicles.component';
import { MatModule } from '../mat.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [VehiclesComponent],
  imports: [CommonModule, MatModule, SharedModule],
  exports: [VehiclesComponent]
})
export class VehiclesModule {}
