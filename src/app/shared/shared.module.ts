import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatModule } from '../mat.module';

import { AssignItemComponent } from './assign-item/assign-item.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { SearchInputComponent } from './search-input/search-input.component';
import { DisplayCameraComponent } from './display-camera.component';
import { DisplayVehicleComponent } from './display-vehicle.component';

@NgModule({
  declarations: [
    AssignItemComponent,
    SearchResultsComponent,
    SearchInputComponent,
    DisplayCameraComponent,
    DisplayVehicleComponent
  ],
  imports: [CommonModule, MatModule, ReactiveFormsModule, FormsModule],
  exports: [
    AssignItemComponent,
    SearchResultsComponent,
    SearchInputComponent,
    DisplayCameraComponent,
    DisplayVehicleComponent
  ]
})
export class SharedModule {}
