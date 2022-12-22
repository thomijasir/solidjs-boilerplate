import * as TYPES from './types';
import useStore from './useStore';

const useActions = () => {
  const { store, dispatch } = useStore();

  const setLoading = (isLoading: boolean, text?: string) => {
    dispatch({
      type: TYPES.SET_LOADING,
      payload: {
        ...store.loadingState,
        isLoading,
        text,
      },
    });
  };

  const setError = (isError: boolean, title?: string, message?: string) => {
    dispatch({
      type: TYPES.SET_ERROR,
      payload: {
        ...store.errorState,
        isError,
        title,
        message,
      },
    });
  };
  return { setLoading, setError };
};

export default useActions;
