import {
  createFeatureSelector,
  createSelector,
  MemoizedSelector
} from '@ngrx/store';

import { State } from './cameras.state';
import { Camera } from '../../models';
import { getItems, getError, getIsLoading } from '../selectors';

export const selectCameraById = id =>
  createSelector(
    getItems,
    cameras => {
      return cameras.find(c => c[id] === id);
    }
  );

export const selectCamerasState: MemoizedSelector<
  object,
  State
> = createFeatureSelector<State>('cameras');

export const selectCamerasError: MemoizedSelector<
  object,
  string
> = createSelector(
  selectCamerasState,
  getError
);

export const selectCamerasIsLoading: MemoizedSelector<
  object,
  boolean
> = createSelector(
  selectCamerasState,
  getIsLoading
);

export const selectCameras: MemoizedSelector<object, Camera[]> = createSelector(
  selectCamerasState,
  getItems
);
