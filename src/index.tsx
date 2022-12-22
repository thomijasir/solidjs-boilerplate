/* @refresh reload */
import { lazy, Component } from 'solid-js';
import { render } from 'solid-js/web';
import { Router, Routes, Route } from '@solidjs/router';
import './assets/app.css';
import useStore from './stores/useStore';
import LoadingGeneral from './components/LoadingGeneral/LoadingGeneral.comp';
import ErrorGeneral from './components/ErrorGeneral/ErrorGeneral.comp';
import ClearCache from './ClearCache';
const Home = lazy(() => import('./containers/Home/Home.page'));

const App: Component = () => {
  const { store } = useStore();
  return (
    <ClearCache>
      <LoadingGeneral {...store.loadingState} />
      <ErrorGeneral {...store.errorState} />
      <Router>
        <Routes>
          <Route path="/" component={Home} />
          <Route path="*" element={<p>404 Page not Found</p>} />
        </Routes>
      </Router>
    </ClearCache>
  );
};

render(() => <App />, document.getElementById('root') as HTMLElement);
