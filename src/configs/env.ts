const ENV = {
  API_URL: process.env.NEXT_PUBLIC_API_URL,
  COOKIE: {
    ACCESS_TOKEN_NAME: process.env.NEXT_PUBLIC_ACCESS_TOKEN_NAME ?? '',
    REFRESH_TOKEN_NAME: process.env.NEXT_PUBLIC_REFRESH_TOKEN_NAME ?? '',
  },
};

export default ENV;
