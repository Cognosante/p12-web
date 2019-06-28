import React from 'react';
import { ConfigProvider } from '../components/config-provider';
import AppRouter from '../components/router';

import { routes, notFound } from './routes';

export default () => (
  <ConfigProvider config="/config.json">
    <AppRouter routes={routes} notFound={notFound} />
  </ConfigProvider>
);
