import {
  createFeatureSelector,
  createSelector,
  MemoizedSelector
} from '@ngrx/store';

import { State } from './cameras.state';
import { Camera } from 'src/app/models';

const getError = (state: State): string => state.error;

const getIsLoading = (state: State): boolean => state.isLoading;

const getCameras = (state: State): Camera[] => state.items;

export const selectCameraById = id =>
  createSelector(
    getCameras,
    cameras => {
      return cameras[id];
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
  getCameras
);
