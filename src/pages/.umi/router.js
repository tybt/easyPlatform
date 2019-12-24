import React from 'react';
import { Router as DefaultRouter, Route, Switch } from 'react-router-dom';
import dynamic from 'umi/dynamic';
import renderRoutes from 'umi/lib/renderRoutes';
import history from '@tmp/history';

const Router = require('dva/router').routerRedux.ConnectedRouter;

const routes = [
  {
    path: '/',
    component: require('../../layouts/index.js').default,
    routes: [
      {
        path: '/404',
        exact: true,
        component: require('../404.js').default,
        _title: '豆瓣',
        _title_default: '豆瓣',
      },
      {
        path: '/',
        exact: true,
        component: require('../index/index.js').default,
        _title: '豆瓣',
        _title_default: '豆瓣',
      },
      {
        path: '/login',
        exact: true,
        component: require('../login/index.js').default,
        _title: '豆瓣',
        _title_default: '豆瓣',
      },
      {
        path: '/movies',
        exact: true,
        component: require('../movies/index.js').default,
        _title: '豆瓣',
        _title_default: '豆瓣',
      },
      {
        component: () =>
          React.createElement(
            require('E:/360MoveData/Users/wxq/Desktop/doc/react/project/doubanPlatform/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
              .default,
            { pagesPath: 'src/pages', hasRoutesInConfig: false },
          ),
        _title: '豆瓣',
        _title_default: '豆瓣',
      },
    ],
    _title: '豆瓣',
    _title_default: '豆瓣',
  },
  {
    component: () =>
      React.createElement(
        require('E:/360MoveData/Users/wxq/Desktop/doc/react/project/doubanPlatform/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
          .default,
        { pagesPath: 'src/pages', hasRoutesInConfig: false },
      ),
    _title: '豆瓣',
    _title_default: '豆瓣',
  },
];
window.g_routes = routes;
const plugins = require('umi/_runtimePlugin');
plugins.applyForEach('patchRoutes', { initialValue: routes });

export { routes };

export default class RouterWrapper extends React.Component {
  unListen() {}

  constructor(props) {
    super(props);

    // route change handler
    function routeChangeHandler(location, action) {
      plugins.applyForEach('onRouteChange', {
        initialValue: {
          routes,
          location,
          action,
        },
      });
    }
    this.unListen = history.listen(routeChangeHandler);
    routeChangeHandler(history.location);
  }

  componentWillUnmount() {
    this.unListen();
  }

  render() {
    const props = this.props || {};
    return <Router history={history}>{renderRoutes(routes, props)}</Router>;
  }
}
