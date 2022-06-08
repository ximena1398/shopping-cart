import { Home } from '../scenes/Home/Home'
// import { Login } from '../scenes/Login/Login'

const PublicMap = [
  {
    restricted: true,
    exact: true,
    path: '/',
    component: Home
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