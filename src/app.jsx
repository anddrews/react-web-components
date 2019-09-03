import React from 'react';

import 'web-components';
import {styleNames} from 'utils/stylenames';

import {WidgetOpener} from './components/widget-opener/widgetOpener';

import styles from './app.scss'

const sn = styleNames(styles);

export const App = () => (
  <div className={sn('main')} style={{width: '300px'}}>
    <cb-chat-header data-greeting=";k;k;k;k"/>
    <cb-chat-header data-greeting="hhhhhhhhhh"/>
    <cb-chat-header data-greeting="eeeeeeeee"/>
    Hello world
    <WidgetOpener
      animation={true}
      messengers={[{code: 8}, {code: 7}, {code: 6}]}
      onClick={() => {}}
    />
  </div>
);
