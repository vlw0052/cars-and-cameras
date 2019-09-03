import {
  createFeatureSelector,
  createSelector,
  MemoizedSelector
} from '@ngrx/store';

import { State } from './cameras.state';
import { Camera } from '../../models';
import { getItems, getError, getIsLoading } from '../selectors';
import { selectActiveAssignments } from '../assignments-store/assignments.selectors';

export const selectCameraById = id =>
  createSelector(
    selectCameras,
    cameras => cameras.find(c => c['id'] === id)
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

export const selectUnassignedCameras: MemoizedSelector<
  object,
  Camera[]
> = createSelector(
  selectCameras,
  selectActiveAssignments,
  (cameras, assignments) => {
    const assignedCameraIds = assignments.map(a => a.cameraId);
    return cameras.filter(cam => !assignedCameraIds.includes(cam.id));
  }
);
