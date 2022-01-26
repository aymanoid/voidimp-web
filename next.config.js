module.exports = {
  i18n: {
    locales: ["en", "ar"],
    defaultLocale: "en",
  },
  images: {
    domains: ["images.prismic.io"],
  },
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};
