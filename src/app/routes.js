// pages
import withLayout from '../layout';
import NotFound from '../pages/not-found';
import Home from '../pages/home';
import Upload from '../pages/upload';

export const notFound = withLayout(NotFound);
export const routes = [
  {
    name: 'Cell Viewer',
    path: '/home',
    component: withLayout(Home),
    home: true,
    secured: false,
    inNav: true
  },
  {
    name: 'Upload',
    path: '/upload',
    component: withLayout(Upload),
    secured: false,
    inNav: true
  }
];
