import { onCleanup } from 'solid-js';
import { createStore } from 'solid-js/store';
import mainStore, { rootState } from './store';

const useStore = () => {
  const { dispatch, getState, subscribe } = mainStore;
  const [store, setStore] = createStore<rootState>(getState());

  const unsubscribe = subscribe(() => setStore(getState()));
  onCleanup(() => unsubscribe());

  return { store, dispatch };
};

export default useStore;
