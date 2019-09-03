import {
  createFeatureSelector,
  createSelector,
  MemoizedSelector
} from '@ngrx/store';

import { State } from './vehicles.state';
import { Vehicle } from '../../models';
import { getItems, getError, getIsLoading } from '../selectors';
import { selectAssignments } from '../assignments-store/assignments.selectors';

export const selectVehicleById = (id): MemoizedSelector<object, Vehicle> =>
  createSelector(
    selectVehicles,
    vehicles => vehicles.find(v => v['id'] === id)
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

export const selectUnassignedVehicles: MemoizedSelector<
  object,
  Vehicle[]
> = createSelector(
  selectVehicles,
  selectAssignments,
  (vehicles, assignments) => {
    const assignedVehicleIds = assignments.map(a => a.vehicleId);
    return vehicles.filter(veh => !assignedVehicleIds.includes(veh.id));
  }
);
