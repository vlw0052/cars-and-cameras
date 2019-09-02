import {
  createFeatureSelector,
  createSelector,
  MemoizedSelector
} from '@ngrx/store';

import { State } from './vehicles.state';
import { Vehicle } from '../../models';
import { getItems, getError, getIsLoading } from '../selectors';

export const selectVehicleById = id =>
  createSelector(
    getItems,
    vehicles => {
      return vehicles.find(v => v[id] === id);
    }
  );

export const selectVehiclesState: MemoizedSelector<
  object,
  State
> = createFeatureSelector<State>('vehicles');

export const selectVehiclesError: MemoizedSelector<
  object,
  string
> = createSelector(
  selectVehiclesState,
  getError
);

export const selectVehiclesIsLoading: MemoizedSelector<
  object,
  boolean
> = createSelector(
  selectVehiclesState,
  getIsLoading
);

export const selectVehicles: MemoizedSelector<
  object,
  Vehicle[]
> = createSelector(
  selectVehiclesState,
  getItems
);
