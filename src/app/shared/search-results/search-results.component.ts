import { Component, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';
import { Camera, Vehicle, Assignment } from 'src/app/models';
import { Store, createSelector } from '@ngrx/store';
import { RootState } from 'src/app/store/state';
import {
  AssignmentStoreSelectors,
  AssignmentStoreActions
} from 'src/app/store/assignments-store';
import {
  VehicleStoreSelectors,
  VehicleStoreActions
} from 'src/app/store/vehicles-store';
import { CameraStoreSelectors, CameraStoreActions } from 'src/app/store';

@Component({
  selector: 'search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.sass']
})
export class SearchResultsComponent implements OnInit {
  destroy$ = new Subject<boolean>();
  @Input() searchQuery: Subject<string>;
  cameras: Camera[];
  vehicles: Vehicle[];
  assignments: Assignment[];
  filteredItems: Assignment[];
  constructor(private store: Store<RootState>) {}

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  ngOnInit() {
    this.store
      .select(
        createSelector(
          AssignmentStoreSelectors.selectActiveAssignments,
          VehicleStoreSelectors.selectVehicles,
          CameraStoreSelectors.selectCameras,
          (assignments, vehicles, cameras) => ({
            assignments,
            vehicles,
            cameras
          })
        ),
        takeUntil(this.destroy$)
      )
      .subscribe(({ assignments, vehicles, cameras }) => {
        this.assignments = assignments;
        this.vehicles = vehicles;
        this.cameras = cameras;
      });

    this.store.dispatch(new VehicleStoreActions.LoadVehicles());
    this.store.dispatch(new CameraStoreActions.LoadCameras());
    this.subscribeToSearchChange();
  }
  subscribeToSearchChange() {
    this.searchQuery.pipe(debounceTime(400)).subscribe(val => {
      this.searchStore(val);
    });
  }
  searchStore(query: string) {
    let items = [];
    const filteredVehicles = this.vehicles
      .filter(v => v.name.includes(query))
      .map(v => v.id);
    const filteredCameras = this.cameras
      .filter(c => c.deviceNo.includes(query))
      .map(c => c.id);
    this.filteredItems = this.assignments.filter(
      a =>
        filteredCameras.includes(a.cameraId) ||
        filteredVehicles.includes(a.vehicleId)
    );
  }
  removeAssignment(assignment: Assignment) {
    this.store.dispatch(
      new AssignmentStoreActions.RemoveAssignment({
        assignmentId: assignment.id
      })
    );
  }
}
