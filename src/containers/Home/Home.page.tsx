import { Component, createSignal, onMount } from 'solid-js';
import LOGO_SOLID from '../../assets/images/logo.svg';
import useStore from '../../stores/useStore';
import './Home.css';
export interface IPropsHome {}
export interface IStateHome {}

const Home: Component<IPropsHome> = () => {
  const { store } = useStore();
  const [title] = createSignal('Solid Architecture');

  onMount(() => {
    console.log('Global Store: ', store);
  });

  return (
    <div class="home-page w-full h-full mt-40">
      <div class="w-full text-center">
        <img
          src={LOGO_SOLID}
          class="rotate w-60 h-60 m-auto mb-4"
          alt="solid-logo"
        />
        <h1 class="text-2xl font-bold p-4">{title}</h1>
        <span class="typing-master text-base xs:text-xs sm:text-base">
          Project Template with the latest solid js reactive hook, <br /> simple
          clean and no vulnerability package.
        </span>
        <p class="credits text-sm">
          SolidJs with vite and tailwind flavour by <b>Thomi Jasir</b>
        </p>
      </div>
    </div>
  );
};

export default Home;
