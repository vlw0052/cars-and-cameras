import { Action } from '@ngrx/store';
import { Camera } from '../../models';

export enum ActionTypes {
  LOAD_REQUEST = '[Cameras] Load',
  LOAD_FAILURE = '[Cameras] Load Failure',
  LOAD_SUCCESS = '[Cameras] Load Success'
}

export class LoadCameras implements Action {
  readonly type = ActionTypes.LOAD_REQUEST;
}

export class LoadCamerasFailure implements Action {
  readonly type = ActionTypes.LOAD_FAILURE;
  constructor(public payload: { error: string }) {}
}

export class LoadCamerasSuccess implements Action {
  readonly type = ActionTypes.LOAD_SUCCESS;
  constructor(public payload: { items: Camera[] }) {}
}
