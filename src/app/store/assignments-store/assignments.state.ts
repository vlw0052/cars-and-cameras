import { Assignment } from 'src/app/models';

export interface State {
  items: Assignment[];
  isLoading: boolean;
  error: string;
}

export const initialState: State = {
  items: [],
  isLoading: false,
  error: null
};
