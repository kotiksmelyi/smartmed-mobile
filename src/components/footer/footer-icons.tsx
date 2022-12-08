import { HistoryIcon } from '@components/UI/icons/nav-icons/HistoryIcon';
import { HomeIcon } from '@components/UI/icons/nav-icons/HomeIcon';
import { NewsIcon } from '@components/UI/icons/nav-icons/NewsIcon';
import { PillsIcon } from '@components/UI/icons/nav-icons/PillsIcon';

export const footerIcons = [
  {
    name: 'Главная',
    icon: <HomeIcon />,
    link: '/',
  },
  {
    name: 'Дневник',
    icon: <HistoryIcon />,
    link: '/history',
  },
  {
    name: 'Назначения',
    icon: <PillsIcon />,
    link: '/prescription',
  },
  {
    name: 'Полезные статьи',
    icon: <NewsIcon />,
    link: '/articles',
  },
];
