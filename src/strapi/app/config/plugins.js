module.exports = ({ env }) => ({
  upload: {
    settings: {
      cors: {
        enabled: true,
        origin: ['*']
      },
    },
    provider: 'aws-s3',
    providerOptions: {
      accessKeyId: env('AWS_ACCESS_KEY_ID'),
      secretAccessKey: env('AWS_ACCESS_SECRET'),
      region: 'eu-west-2',
      params: {
        Bucket: 'petproject-strapi-uploads',
      },
    },
  },
});
