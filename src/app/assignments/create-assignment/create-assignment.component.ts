import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormGroupDirective
} from '@angular/forms';
import { RootState } from 'src/app/store/state';
import { Store } from '@ngrx/store';
import { AssignmentStoreActions } from 'src/app/store/assignments-store';
import { createAssignment } from 'src/app/store/utils';
import { Observable } from 'rxjs';
import { Vehicle, Camera } from 'src/app/models';
import { CameraStoreSelectors } from 'src/app/store';
import { VehicleStoreSelectors } from 'src/app/store/vehicles-store';

@Component({
  selector: 'create-assignment',
  templateUrl: './create-assignment.component.html',
  styleUrls: ['./create-assignment.component.sass']
})
export class CreateAssignmentComponent implements OnInit {
  cameras$: Observable<Camera[]>;
  vehicles$: Observable<Vehicle[]>;
  constructor(private store: Store<RootState>) {}
  assignmentForm = new FormGroup({
    camera: new FormControl(null, [Validators.required]),
    vehicle: new FormControl(null, [Validators.required])
  });
  onSubmit(form: FormGroupDirective) {
    const camera = this.assignmentForm.controls.camera.value;
    const vehicle = this.assignmentForm.controls.vehicle.value;
    form.resetForm();
    this.store.dispatch(
      new AssignmentStoreActions.AddAssignment({
        item: createAssignment(camera, vehicle)
      })
    );
  }

  ngOnInit() {
    this.cameras$ = this.store.select(
      CameraStoreSelectors.selectUnassignedCameras
    );
    this.vehicles$ = this.store.select(
      VehicleStoreSelectors.selectUnassignedVehicles
    );
  }
}
