import { Vehicle } from 'src/app/models';

export interface State {
  items: Vehicle[];
  isLoading: boolean;
  error: string;
}

export const initialState: State = {
  items: [],
  isLoading: false,
  error: null
};
