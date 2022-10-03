import { HomePage } from '../pages/HomePage';
import { NotFoundPage } from '../pages/NotFoundPage';
import { WrappingPage } from '../pages/WrappingPage';

interface IRoute {
  path: string;
  element: React.ElementType;
}

export enum ERouteNames {
  home = '/car-musc-react-app/',
  wrapping = '/car-musc-react-app/wrapping',
  error = '/car-musc-react-app/*',
}

export const routes: IRoute[] = [
  { path: ERouteNames.home, element: HomePage },
  { path: ERouteNames.wrapping, element: WrappingPage },
  { path: ERouteNames.error, element: NotFoundPage },
];
