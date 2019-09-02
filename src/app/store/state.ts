import { CameraStoreState } from './cameras-store';
import { VehicleStoreState } from './vehicles-store';
import { AssignmentStoreState } from './assignments-store';

export interface RootState {
  cameras: CameraStoreState.State;
  vehicles: VehicleStoreState.State;
  assignments: AssignmentStoreState.State;
}
