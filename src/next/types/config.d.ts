/* eslint-disable no-unused-vars */
declare module 'clientconfig' {
  interface Config {
    client: {
      strapi: {
        api: string;
      };
    };
  }

  const config: Config;

  export default config;
}
