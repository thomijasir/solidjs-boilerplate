import { Component, JSXElement, createSignal, onMount, Show } from 'solid-js';
import axios, { AxiosResponse } from 'axios';
import packageJson from '../package.json';

const ClearCache: Component<{ children: JSXElement }> = (props) => {
  const [isLatestBuildDate, setIsLatestBuildDate] =
    createSignal<boolean>(false);

  onMount(() => {
    axios.get('/meta.json').then((response: AxiosResponse) => {
      const latestBuild = response.data.buildDate;
      const currentBuild = packageJson.buildDate;
      // * CHECK CURRENT BUILD AND LATEST BUILD
      if (currentBuild > latestBuild) {
        // * CHECK CACHES BROWSER ABILITY
        if (caches)
          caches.keys().then((names) => {
            names.forEach((name) => {
              caches.delete(name);
            });
          });
        window.location.reload();
      } else {
        setIsLatestBuildDate(true);
      }
    });
  });
  return (
    <Show when={isLatestBuildDate()} fallback={null}>
      {props.children}
    </Show>
  );
};
export default ClearCache;
