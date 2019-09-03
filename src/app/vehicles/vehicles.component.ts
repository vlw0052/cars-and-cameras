import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Vehicle, Assignment, Camera } from '../models';
import {
  VehicleStoreSelectors,
  VehicleStoreActions
} from '../store/vehicles-store';
import { RootState } from '../store/state';
import { Store, createSelector } from '@ngrx/store';
import { CameraStoreActions, CameraStoreSelectors } from '../store';
import {
  AssignmentStoreSelectors,
  AssignmentStoreActions
} from '../store/assignments-store';
import { createAssignment } from '../store/utils';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.sass']
})
export class VehiclesComponent implements OnInit {
  vehicles$: Observable<Vehicle[]>;
  unassignedCameras$: Observable<Camera[]>;
  assignments: Assignment[];
  cameras: Camera[];
  constructor(private store: Store<RootState>) {}

  ngOnInit() {
    this.vehicles$ = this.store.select(VehicleStoreSelectors.selectVehicles);
    this.unassignedCameras$ = this.store.select(
      CameraStoreSelectors.selectUnassignedCameras
    );
    this.store
      .select(
        createSelector(
          AssignmentStoreSelectors.selectAssignments,
          CameraStoreSelectors.selectCameras,
          (assignments, cameras) => ({ assignments, cameras })
        )
      )
      .subscribe(({ assignments, cameras }) => {
        this.assignments = assignments;
        this.cameras = cameras;
      });
    this.store.dispatch(new VehicleStoreActions.LoadVehicles());
    this.store.dispatch(new CameraStoreActions.LoadCameras());
  }
  getVehicleAssignment(vehicle: Camera) {
    const assignment = this.assignments.find(a => a.vehicleId === vehicle.id);
    if (!assignment) return false;
    const cam = this.cameras.find(v => v.id === assignment.cameraId);
    return cam;
  }
  assignCameraTo(vehicle: Vehicle, camera: Camera) {
    console.log(vehicle, camera);
    this.store.dispatch(
      new AssignmentStoreActions.AddAssignment({
        item: createAssignment(camera, vehicle)
      })
    );
  }
}
