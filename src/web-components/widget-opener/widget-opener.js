import {styleNames} from 'utils/stylenames';
import styles from './widget-opener.web-component.scss';

const sn = styleNames(styles);

const sheet = new CSSStyleSheet();

sheet.replaceSync(styles);

const tmpl = ({animation, icon}) => `
  <div
      class="widget-opener"
    >
      <div class="widget-opener__static" >
        ${animation
          ? `<div class="widget-opener__carousel" >
            <div
              class="widget-opener__icons"
            >
              <div
                class="widget-opener__icon"
              >
                <slot name="messengers-icon"></slot>
              </div>
            </div>
          </div>`
      : `<slot name="icon-close"></slot>`}
      </div>
      <div class="widget-opener__pulsation" />
      <div class="widget-opener__pulsation" />
    </div>`;

export class WidgetOpener extends HTMLElement {
  static get observedAttributes() { return ['data-icon', 'data-animation']; }
  
  connectedCallback() {
    this.attachShadow({mode: 'open'});
    this.shadowRoot.adoptedStyleSheets = [sheet];
    this.shadowRoot.innerHTML = tmpl(this.dataset);
    Array.from(this.shadowRoot.querySelectorAll('.widget-opener__pulsation')).forEach(item => {
      item.classList.add('animation');
    })
  }
  
  attributeChangedCallback(attrName, oldValue, newValue) {
    if (!this.shadowRoot) {
      return;
    }
    
    if(attrName === 'data-animation') {
        Array.from(this.shadowRoot.querySelectorAll('.widget-opener__pulsation')).forEach(item => {
          item.classList.toggle('animation');
        })
    }
    
    if(attrName === 'data-icon') {
        this.shadowRoot.querySelector('.widget-opener__carousel').classList.toggle('color-white');
    }
    
    if(this.dataset.animation && this.dataset.icon) {
        this.shadowRoot.querySelector('.widget-opener__icons').classList.toggle('animation');
    }
    // if(this.dataset.animation && this.dataset.icon) {
    //   this.shadowRoot.innerHTML = tmpl(this.dataset);
    // }
  }
  
  
}
