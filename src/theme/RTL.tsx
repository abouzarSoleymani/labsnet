'use client';

import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { prefixer } from 'stylis';
// eslint-disable-next-line import/no-extraneous-dependencies
import rtlPlugin from 'stylis-plugin-rtl';

// Create rtl cache
const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin],
});
const RTL = ({ children }: any) => {
  return <CacheProvider value={cacheRtl}>{children}</CacheProvider>;
};
export default RTL;
