// @ts-nocheck
import React from 'react';
import { ApplyPluginsType } from '/Users/jiangjianyuan/work_space/组件库/wx-component/docs/node_modules/@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';

export function getRoutes() {
  const routes = [
  {
    "path": "/",
    "component": (props) => require('react').createElement(require('../../../node_modules/@umijs/preset-dumi/lib/themes/default/layout.js').default, {
      ...{"menus":{"*":{"*":[{"path":"/","title":"Hello dumi!","meta":{}}]}},"locales":[],"navs":{},"title":"Albert.Jiang","desc":"每天比昨天进步一点","mode":"doc"},
      ...props,
    }),
    "routes": [
      {
        "path": "/",
        "component": require('../../index.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/index.md",
          "updatedTime": 1607161919871,
          "slugs": [
            {
              "depth": 1,
              "value": "Hello dumi!",
              "heading": "hello-dumi"
            }
          ],
          "title": "Hello dumi!"
        },
        "title": "Hello dumi!"
      }
    ],
    "title": "Albert.Jiang"
  }
];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}
