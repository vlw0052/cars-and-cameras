import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Observable } from 'rxjs';
import { Assignment, Vehicle, Camera } from '../models';

import { RootState } from '../store/state';
import { Store, createSelector } from '@ngrx/store';
import {
  AssignmentStoreSelectors,
  AssignmentStoreActions
} from '../store/assignments-store';
import { CameraStoreSelectors, CameraStoreActions } from '../store';
import {
  VehicleStoreSelectors,
  VehicleStoreActions
} from '../store/vehicles-store';

import { createAssignment } from '../store/utils';
@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.sass']
})
export class AssignmentsComponent implements OnInit {
  assignments$: Observable<Assignment[]>;
  cameras$: Observable<Camera[]>;
  vehicles$: Observable<Vehicle[]>;
  constructor(private store: Store<RootState>) {}
  assignmentForm = new FormGroup({
    camera: new FormControl(null, [Validators.required]),
    vehicle: new FormControl(null, [Validators.required])
  });
  onSubmit() {
    const camera = this.assignmentForm.controls.camera.value;
    const vehicle = this.assignmentForm.controls.vehicle.value;
    this.store.dispatch(
      new AssignmentStoreActions.AddAssignment({
        item: createAssignment(camera, vehicle)
      })
    );
  }
  ngOnInit() {
    this.assignments$ = this.store.select(
      AssignmentStoreSelectors.selectAssignments
    );
    this.cameras$ = this.store.select(
      CameraStoreSelectors.selectUnassignedCameras
    );
    this.vehicles$ = this.store.select(VehicleStoreSelectors.selectVehicles);
    this.store.dispatch(new CameraStoreActions.LoadCameras());
    this.store.dispatch(new VehicleStoreActions.LoadVehicles());
  }
}
