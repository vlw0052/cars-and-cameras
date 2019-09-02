import {
  ActionTypes,
  LoadVehiclesSuccess,
  LoadVehiclesFailure
} from './vehicles.actions';
import { State, initialState } from './vehicles.state';
import { createReducer } from '../utils';

const vehicleHandlers = {
  [ActionTypes.LOAD_REQUEST]: (state: State) => ({
    isLoading: true
  }),
  [ActionTypes.LOAD_SUCCESS]: (state: State, action: LoadVehiclesSuccess) => ({
    isLoading: false,
    items: [...state.items, ...action.payload.items]
  }),
  [ActionTypes.LOAD_FAILURE]: (state: State, action: LoadVehiclesFailure) => ({
    isLoading: false,
    error: action.payload.error
  })
};

export const vehicleReducer = createReducer(vehicleHandlers, initialState);
