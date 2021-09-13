const { PHASE_DEVELOPMENT_SERVER, PHASE_PRODUCTION_BUILD } = require('next/constants');

module.exports = (phase) => {
  const isDev = phase === PHASE_DEVELOPMENT_SERVER;
  const isProd = phase === PHASE_PRODUCTION_BUILD && process.env.STAGING !== '1';

  return {
    env: {
      NEXT_PUBLIC_STRAPI_URL: (() => {
        if (isDev) return 'http://strapi:1337';
        if (isProd) return 'https://the-pet-project.herokuapp.com';
        return '';
      })(),
    },
    images: {
      domains: ['images.unsplash.com'],
    },
    webpackDevMiddleware: (config) => ({
      ...config,
      watchOptions: {
        poll: 1000,
        aggregateTimeout: 300,
      },
    }),
  };
};
