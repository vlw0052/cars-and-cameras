import { Action } from '@ngrx/store';
import { Assignment } from '../../models';

export enum ActionTypes {
  LOAD_REQUEST = '[Assignments] Load',
  LOAD_FAILURE = '[Assignments] Load Failure',
  LOAD_SUCCESS = '[Assignments] Load Success',
  ADD_ASSIGNMENT = '[Assignments] Add',
  REMOVE_ASSIGNMENT = '[Assignments] Remove'
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

export class AddAssignment implements Action {
  readonly type = ActionTypes.ADD_ASSIGNMENT;
  constructor(public payload: { item: Assignment }) {}
}
export class RemoveAssignment implements Action {
  readonly type = ActionTypes.REMOVE_ASSIGNMENT;
  constructor(public payload: { assignmentId: number }) {}
}
