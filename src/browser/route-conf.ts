import FileList from './pages/file-list';
import Settings from './pages/settings';
import About from './pages/about';
import ToDo from './pages/todo';

type route = {
  name: string,
  icon: string,
  path: string,
  component: any,
};

const ROUTE_CONF: Array<route> = [{
  name: '浏览',
  icon: 'CompassNW',
  path: '/',
  component: FileList,
}, {
  name: '设置',
  icon: 'Settings',
  path: '/settings',
  component: Settings
}, {
//   name: 'Note',
//   icon: 'EditNote',
//   path: '/todo',
//   component: ToDo
// }, {
  name: '关于',
  icon: 'Info',
  path: '/about',
  component: About
}];

export default ROUTE_CONF;