import { Vehicle } from 'src/app/models';

export interface State {
  ids: number[];
  items: HashedVehicles;
  isLoading: boolean;
  error: string;
}

interface HashedVehicles {
  [id: number]: Vehicle;
}

export const initialState: State = {
  ids: [],
  items: [],
  isLoading: false,
  error: null
};
