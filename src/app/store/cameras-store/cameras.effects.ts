import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of as observableOf } from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';
import { DataService } from '../../services/data.service';
import * as CameraActions from './cameras.actions';

@Injectable()
export class CameraStoreEffects {
  constructor(private dataService: DataService, private actions$: Actions) {}

  @Effect()
  loginRequestEffect$: Observable<Action> = this.actions$.pipe(
    ofType<CameraActions.LoadCameras>(CameraActions.ActionTypes.LOAD_REQUEST),
    switchMap(_ =>
      this.dataService.getCameras().pipe(
        map(cameras => new CameraActions.LoadCamerasSuccess(cameras)),
        catchError(error =>
          observableOf(new CameraActions.LoadCamerasFailure({ error }))
        )
      )
    )
  );
}
