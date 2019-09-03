import {ChatHeader} from './chat-header/chat-header';
import {WidgetOpener} from './widget-opener/widget-opener';

(() => {
  customElements.define("cb-chat-header", ChatHeader);
  customElements.define("cb-widget-opener", WidgetOpener);
})();
