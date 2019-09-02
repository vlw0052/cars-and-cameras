import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';

import { AssignmentsComponent } from './assignments.component';
import { CamerasModule } from '../cameras/cameras.module';
import { VehiclesModule } from '../vehicles/vehicles.module';
import { CreateAssignmentComponent } from './create-assignment/create-assignment.component';

@NgModule({
  declarations: [AssignmentsComponent, CreateAssignmentComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    MatDividerModule,
    ReactiveFormsModule,
    CamerasModule,
    VehiclesModule
  ]
})
export class AssignmentsModule {}
