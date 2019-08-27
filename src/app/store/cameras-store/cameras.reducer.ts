import { ActionTypes } from './cameras.actions';
import { State, initialState } from './cameras.state';
import { Camera } from 'src/app/models';
import { createReducer } from '../utils';

const cameraHandlers = {
  [ActionTypes.LOAD_REQUEST]: (state: State) => ({
    isLoading: true
  }),
  [ActionTypes.LOAD_SUCCESS]: (state: State, action) => {
    const oldItems = state.items;
    const newItems = action.payload.items;
    return {
      isLoading: false,
      items: [...oldItems, ...newItems]
    };
  },
  [ActionTypes.LOAD_FAILURE]: (state: State, action) => ({
    isLoading: false,
    error: action.payload.error
  })
};

export const cameraReducer = createReducer(cameraHandlers, initialState);
