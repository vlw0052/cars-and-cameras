import { merge } from 'lodash';
import { Camera, Vehicle, Assignment } from '../models';
import uuid from 'uuid/v4';
export const createReducer = (handlers, initialState = {}) => (
  state = initialState,
  action
) => {
  const handler = handlers[action.type];
  if (!handler) {
    return state;
  }
  const nextState = handler(state, action);

  return merge({}, state, nextState);
};

export const createAssignment = (
  camera: Camera,
  vehicle: Vehicle
): Assignment => ({
  id: uuid(),
  cameraId: camera.id,
  vehicleId: vehicle.id,
  dateCreated: new Date(),
  deleted: false
});
