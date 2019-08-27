import { merge } from 'lodash';
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
