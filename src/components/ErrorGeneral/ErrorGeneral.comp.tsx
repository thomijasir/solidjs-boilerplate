import { Component } from 'solid-js';
import ERROR_DEFAULT from '../../assets/images/general_error_default.png';
import packageInfo from '../../../package.json';
import './ErrorGeneral.css';

export interface IPropsErrorGeneral {
  title?: string;
  message?: string;
  image?: string;
  isError: boolean;
}

const ErrorGeneral: Component<IPropsErrorGeneral> = (props) => {
  return (
    <div
      class={`error-general transition duration-150 ease-in-out ${
        props.isError ? 'on' : ''
      }`}
    >
      <div class="error-container">
        <img src={props.image || ERROR_DEFAULT} alt="errorPage" />
        <h2 class="error-title">{props.title || 'Something went wrong'}</h2>
        <p class="error-desc">
          {props.message || 'Please check you connection'}
        </p>
      </div>
      <div class="error-footer">
        <p class="text-sm">v{packageInfo.version}</p>
      </div>
    </div>
  );
};

export default ErrorGeneral;
