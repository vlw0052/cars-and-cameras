import { CameraStoreState } from './cameras-store';
import { VehicleStoreState } from './vehicles-store';

export interface RootState {
  cameras: CameraStoreState.State;
  vehicles: VehicleStoreState.State;
}
