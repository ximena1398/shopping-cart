import { ContentsCart } from '../scenes/ContentsCart/ContentsCart';
import { Home } from '../scenes/Home/Home';
// import { Login } from '../scenes/Login/Login'

const PublicMap = [
  {
    restricted: true,
    exact: true,
    path: '/',
    component: Home
  },
  {
    restricted: true,
    exact: true,
    path: '/ContentsCart',
    component: ContentsCart
  },
]

const PrivateMap = [
  {
    restricted: true,
    exact: true,
    path: '/home',
    // component: Home
    component: Home
  },
  
]

export { PublicMap, PrivateMap }