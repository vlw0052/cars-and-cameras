import { Camera } from 'src/app/models';

export interface State {
  items: Camera[];
  isLoading: boolean;
  error: string;
}

export const initialState: State = {
  items: [],
  isLoading: false,
  error: null
};
