import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AssignmentsComponent } from './assignments.component';
import { CamerasModule } from '../cameras/cameras.module';
import { VehiclesModule } from '../vehicles/vehicles.module';
import { CreateAssignmentComponent } from './create-assignment/create-assignment.component';
import { MatModule } from '../mat.module';

@NgModule({
  declarations: [AssignmentsComponent, CreateAssignmentComponent],
  imports: [
    CommonModule,
    MatModule,
    ReactiveFormsModule,
    CamerasModule,
    VehiclesModule
  ]
})
export class AssignmentsModule {}
