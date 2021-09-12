declare module 'config' {
  interface Config {
    api: {
      cms: string;
    };
    get: (conf: string) => string;
  }

  const config: Config;

  export default config;
}
