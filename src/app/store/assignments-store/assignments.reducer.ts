import {
  ActionTypes,
  LoadAssignmentsSuccess,
  LoadAssignmentsFailure,
  AddAssignment,
  RemoveAssignment
} from './assignments.actions';
import { State, initialState } from './assignments.state';
import { createReducer } from '../utils';
import { Assignment } from 'src/app/models';

/**
 * Sets the deleted flag of an assignment in a list of assignments.
 * @param assignments List of assignments
 * @param assignmentId Assignmet id to be marked deleted
 */
function setDeletedOnAssignmentFrom(
  assignments: Assignment[],
  assignmentId: number
): Assignment[] {
  return assignments.map(a => {
    if (a.id === assignmentId)
      return {
        ...a,
        deleted: true
      };
    return a;
  });
}

const assignmentHandlers = {
  [ActionTypes.LOAD_REQUEST]: (state: State) => ({
    isLoading: true
  }),
  [ActionTypes.LOAD_SUCCESS]: (
    state: State,
    action: LoadAssignmentsSuccess
  ) => ({
    isLoading: false,
    items: [...state.items, ...action.payload.items]
  }),
  [ActionTypes.LOAD_FAILURE]: (
    state: State,
    action: LoadAssignmentsFailure
  ) => ({
    isLoading: false,
    error: action.payload.error
  }),
  [ActionTypes.ADD_ASSIGNMENT]: (state: State, action: AddAssignment) => ({
    items: [...state.items, action.payload.item]
  }),
  [ActionTypes.ADD_ASSIGNMENT]: (state: State, action: RemoveAssignment) => ({
    items: setDeletedOnAssignmentFrom(state.items, action.payload.assignmentId)
  })
};

export const assignmentReducer = createReducer(
  assignmentHandlers,
  initialState
);
