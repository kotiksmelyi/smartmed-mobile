import { HistoryIcon } from '@components/UI/icons/nav-icons/HistoryIcon';
import { HomeIcon } from '@components/UI/icons/nav-icons/HomeIcon';
import { NewsIcon } from '@components/UI/icons/nav-icons/NewsIcon';
import { PillsIcon } from '@components/UI/icons/nav-icons/PillsIcon';

import { ClientUrls } from '@utils/routes';

export const footerIcons = [
  {
    name: 'Главная',
    icon: <HomeIcon />,
    link: ClientUrls.HOME,
  },
  {
    name: 'Дневник',
    icon: <HistoryIcon />,
    link: ClientUrls.HISTORY,
  },
  // {
  //   name: 'Экстренный вызов',
  //   icon: <ExclamationCircleOutlined />,
  //   link: ClientUrls.ALERT,
  // },
  {
    name: 'Назначения',
    icon: <PillsIcon />,
    link: ClientUrls.PRESCRIPTION,
  },
  {
    name: 'Полезные статьи',
    icon: <NewsIcon />,
    link: ClientUrls.ARTICLES,
  },
];
