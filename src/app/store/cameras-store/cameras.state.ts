import { Camera } from 'src/app/models';

export interface State {
  ids: number[];
  items: HashedCameras;
  isLoading: boolean;
  error: string;
}

interface HashedCameras {
  [id: number]: Camera;
}

export const initialState: State = {
  ids: [],
  items: [],
  isLoading: false,
  error: null
};
