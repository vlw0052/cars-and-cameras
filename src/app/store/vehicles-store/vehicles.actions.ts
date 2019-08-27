import { Action } from '@ngrx/store';
import { Vehicle } from '../../models';

export enum ActionTypes {
  LOAD_REQUEST = '[Vehicles] Load',
  LOAD_FAILURE = '[Vehicles] Load Failure',
  LOAD_SUCCESS = '[Vehicles] Load Success'
}

export class LoadVehicles implements Action {
  readonly type = ActionTypes.LOAD_REQUEST;
}

export class LoadVehiclesFailure implements Action {
  readonly type = ActionTypes.LOAD_FAILURE;
  constructor(public payload: { error: string }) {}
}

export class LoadVehiclesSuccess implements Action {
  readonly type = ActionTypes.LOAD_SUCCESS;
  constructor(public payload: { items: Vehicle[] }) {}
}
