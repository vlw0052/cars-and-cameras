import {
  createFeatureSelector,
  createSelector,
  MemoizedSelector
} from '@ngrx/store';

import { State } from './assignments.state';
import { Assignment } from '../../models';
import { getItems, getError, getIsLoading } from '../selectors';

export const selectAssignmentById = id =>
  createSelector(
    getItems,
    cameras => {
      return cameras.find(c => c[id] === id);
    }
  );
export const selectAssignmentsState: MemoizedSelector<
  object,
  State
> = createFeatureSelector<State>('assignments');

export const selectAssignmentsError: MemoizedSelector<
  object,
  string
> = createSelector(
  selectAssignmentsState,
  getError
);

export const selectAssignmentsIsLoading: MemoizedSelector<
  object,
  boolean
> = createSelector(
  selectAssignmentsState,
  getIsLoading
);

export const selectAssignments: MemoizedSelector<
  object,
  Assignment[]
> = createSelector(
  selectAssignmentsState,
  getItems
);
