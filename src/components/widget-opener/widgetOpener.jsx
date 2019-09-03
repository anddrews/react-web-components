import React, {useState, useEffect} from 'react';
import 'web-components';

import {styleNames} from 'utils/stylenames';

import styles from './widget-opener.scss';

import {MESSENDGERS__BUTTONS, MESSENGERS_INDEX} from 'const/messengers';
import {IconClose, IconOnlineChat} from '../common/icons';

const sn = styleNames(styles);

export const WidgetOpener = ({onClick, animation, messengers = []}) => {
  const messengerIcons = messengers.map(({code}) =>  {
    const {icon, color} = MESSENDGERS__BUTTONS[MESSENGERS_INDEX[code]]
    
    return {icon, color}
  });
  
  const [icons, setIcons] = useState([null, ...messengerIcons]);
  const [interval, handleInterval] = useState(null);
  
  useEffect(()=> {
    if(animation && icons.length) {
      handleInterval(() => {
        if (interval) {
          clearInterval(interval);
        }
        
        return setInterval(() => {
          setIcons(codes => {
            const tmp = [...codes];
            const firstItem = tmp.shift();
            return [...tmp, firstItem]
          })
        }, 1000);
      });
    } else {
      handleInterval(timeout => clearInterval(timeout));
    }
  }, [animation]);
  
  const Icon = icons.length && icons[0] ? icons[0].icon : null;
  
  return (
    <cb-widget-opener
      data-animation={animation}
      data-icon={Icon === null ? 'false' : 'true'}
      >
      <div slot="messengers-icon" className={sn('icon-container', {'main-color': animation && Icon})}>
        { Icon ? <Icon /> : <IconOnlineChat />}
      </div>
      <div slot="close-icon">
        <IconClose />
      </div>
    </cb-widget-opener>
  );
};
