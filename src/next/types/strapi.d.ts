/* eslint-disable camelcase */
declare interface StrapiResponse {
  id: string;
  created_at: string;
  updated_at: string;
}

declare interface StrapiImage extends StrapiResponse {
  name: string;
  alternativeText: string;
  url: string;
  caption: string;
  height: number;
  width: number;
  hash: string;
}

declare interface StrapiAppDetailsResponse extends StrapiResponse {
  Title: string;
  SubTitle: string;
  HeroBackground: StrapiImage;
}
