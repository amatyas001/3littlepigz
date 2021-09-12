declare module 'config' {
  interface Config {
    api: {
      cms: string;
    };
  }

  const config: Config;

  export default config;
}
