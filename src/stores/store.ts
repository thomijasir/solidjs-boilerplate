import { createStore } from 'redux';
import * as TYPES from './types';

export interface rootState {
  loadingState: {
    isLoading: boolean;
    text: string;
  };
  errorState: {
    isError: boolean;
    title: string;
    message: string;
  };
}

// Initial State
const initState: rootState = {
  loadingState: {
    isLoading: false,
    text: 'Loading...',
  },
  errorState: {
    isError: false,
    title: 'Something Wrong!',
    message:
      'Opps, please check app configuration or service that might cause this error.',
  },
};
// Reducer
const mainReducer = (state = initState, action: any) => {
  const caseObject: { [index: string]: any } = {
    [TYPES.SET_LOADING]: {
      loadingState: action.payload,
    },
    [TYPES.SET_ERROR]: {
      errorState: action.payload,
    },
  };
  const newState = caseObject[action.type] ?? {};
  return { ...state, ...newState };
};

export default createStore(mainReducer);
