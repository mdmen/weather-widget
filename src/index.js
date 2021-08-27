// @flow
import { createElement } from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { App } from './App';
import styles from './index.scss';

class WeatherWidget extends HTMLElement {
  connectedCallback() {
    const mountPoint = document.createElement('div');
    mountPoint.classList.add('wrapper');

    const stylesElement = document.createElement('style');
    stylesElement.textContent = styles;

    const appId = this.getAttribute('data-appid');
    if (!appId) {
      console.error(
        'Failed to load the weather widget. data-appid attribute is missing'
      );
      return;
    }

    const shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.appendChild(stylesElement);
    shadowRoot.appendChild(mountPoint);

    render(createElement(App, { appId }), mountPoint);
  }

  disconnectedCallback() {
    unmountComponentAtNode(App);
  }
}

customElements.define('weather-widget', WeatherWidget);
