import { Action } from '@ngrx/store';
import { Assignment } from '../../models';

export enum ActionTypes {
  LOAD_REQUEST = '[Assignments] Load',
  LOAD_FAILURE = '[Assignments] Load Failure',
  LOAD_SUCCESS = '[Assignments] Load Success'
}

export class LoadAssignments implements Action {
  readonly type = ActionTypes.LOAD_REQUEST;
}

export class LoadAssignmentsFailure implements Action {
  readonly type = ActionTypes.LOAD_FAILURE;
  constructor(public payload: { error: string }) {}
}

export class LoadAssignmentsSuccess implements Action {
  readonly type = ActionTypes.LOAD_SUCCESS;
  constructor(public payload: { items: Assignment[] }) {}
}
