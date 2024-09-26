import { AboutUs } from '../../components/screens/about-us/about-us.component';
import { Home } from '../../components/screens/home/home.component';

export const ROUTES = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/about',
    component: AboutUs,
  },
  {
    path: '/auth',
    component: AboutUs, // проверка динамического импорта - не работате
  },
];
