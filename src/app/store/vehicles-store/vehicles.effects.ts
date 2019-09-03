import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of as observableOf } from 'rxjs';
import { catchError, map, startWith, switchMap, take } from 'rxjs/operators';
import { DataService } from '../../services/data.service';
import * as VehicleActions from './vehicles.actions';

@Injectable()
export class VehicleStoreEffects {
  constructor(private dataService: DataService, private actions$: Actions) {}

  @Effect()
  fetchVehiclesEffect$: Observable<Action> = this.actions$.pipe(
    ofType<VehicleActions.LoadVehicles>(
      VehicleActions.ActionTypes.LOAD_REQUEST
    ),
    switchMap(_ =>
      this.dataService.getVehicles().pipe(
        map(vehicles => {
          return new VehicleActions.LoadVehiclesSuccess(vehicles);
        }),
        catchError(error =>
          observableOf(new VehicleActions.LoadVehiclesFailure({ error }))
        )
      )
    ),
    take(1)
  );
}
