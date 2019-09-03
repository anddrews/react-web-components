import {
  IconMessenger,
  IconTelegram,
  IconViber,
  IconVk,
  IconOnlineChat
} from '../components/common';

export const MESSENGERS = {
  FB: 'facebook',
  VIBER: 'viber',
  TELEGRAM: 'telegram',
  VK: 'vk',
  WIDGET: 'widget'
};

export const MESSENGERS_LABEL = {
  [MESSENGERS.FB]: 'Messenger',
  [MESSENGERS.VIBER]: 'Viber',
  [MESSENGERS.TELEGRAM]: 'Telegram',
  [MESSENGERS.VK]: 'Вконтакте'
};

export const MESSENGERS_INDEX = {
  8: [MESSENGERS.FB],
  6: [MESSENGERS.VIBER],
  1: [MESSENGERS.VK],
  7: [MESSENGERS.TELEGRAM],
  9: [MESSENGERS.WIDGET],
};

export const MESSENDGERS__BUTTONS = {
  [MESSENGERS.FB]: {
    icon: IconMessenger,
    label: MESSENGERS_LABEL[MESSENGERS.FB],
    color: '#547AF5',
    link: '#'
  },
  [MESSENGERS.VIBER]: {
    icon: IconViber,
    label: MESSENGERS_LABEL[MESSENGERS.VIBER],
    color: '#59267C',
    link: '#'
  },
  [MESSENGERS.TELEGRAM]: {
    icon: IconTelegram,
    label: MESSENGERS_LABEL[MESSENGERS.TELEGRAM],
    color: '#34ABE3',
    link: '#'
  },
  [MESSENGERS.VK]: {
    icon: IconVk,
    label: MESSENGERS_LABEL[MESSENGERS.VK],
    color: '#45668E',
    link: '#'
  },
  [MESSENGERS.WIDGET]: {
    icon: IconOnlineChat,
    label: MESSENGERS_LABEL[MESSENGERS.VK],
    color: '#45668E',
    link: '#'
  }
};
