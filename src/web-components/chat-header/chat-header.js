import {styleNames} from 'utils/stylenames';
import styles from './chat-header.web-component.scss';

const sn = styleNames(styles);
const sheet = new CSSStyleSheet();

sheet.replaceSync(styles);

const tmpl = (greeting) => `
  <div class="${sn('chat-header')}">
      <div class="${sn('chat-header__icon')}" ></div>
      ${greeting} <br/>
      Наши операторы онлайн
  </div>`;

export class ChatHeader extends HTMLElement {
  connectedCallback() {
    this.attachShadow({mode: 'open'});
    this.shadowRoot.adoptedStyleSheets = [sheet];
    this.shadowRoot.innerHTML = tmpl(this.dataset.greeting);
  }
}

