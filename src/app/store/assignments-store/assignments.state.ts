import { Assignment } from 'src/app/models';

export interface State {
  ids: number[];
  items: HashedAssignments;
  isLoading: boolean;
  error: string;
}

interface HashedAssignments {
  [id: number]: Assignment;
}

export const initialState: State = {
  ids: [],
  items: [],
  isLoading: false,
  error: null
};
