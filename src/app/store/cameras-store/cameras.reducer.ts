import { ActionTypes, LoadCamerasFailure } from './cameras.actions';
import { State, initialState } from './cameras.state';
import { createReducer } from '../utils';
import { LoadCamerasSuccess } from './cameras.actions';

const cameraHandlers = {
  [ActionTypes.LOAD_REQUEST]: (state: State) => ({
    isLoading: true
  }),
  [ActionTypes.LOAD_SUCCESS]: (state: State, action: LoadCamerasSuccess) => ({
    isLoading: false,
    items: [...state.items, ...action.payload.items]
  }),
  [ActionTypes.LOAD_FAILURE]: (state: State, action: LoadCamerasFailure) => ({
    isLoading: false,
    error: action.payload.error
  })
};

export const cameraReducer = createReducer(cameraHandlers, initialState);
