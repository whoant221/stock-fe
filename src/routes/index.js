import config from '~/config';

// Pages
import Home from '~/pages/Home';
import Search from '~/pages/Search';
import User from '~/pages/User';
import Zingchart from '~/pages/Zingchart';
import Radio from '~/pages/Radio';
import Nhacmoi from '~/pages/Nhacmoi';
import Types from '~/pages/Types';
import Top100 from '~/pages/Top100';

// Public routes
const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.search, component: Search },
    { path: config.routes.user, component: User },
    { path: config.routes.following, component: User },
    { path: config.routes.zingchart, component: Zingchart },
    { path: config.routes.radio, component: Radio },
    { path: config.routes.nhacmoi, component: Nhacmoi},
    { path: config.routes.types, component: Types},
    { path: config.routes.top100, component: Top100},
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };