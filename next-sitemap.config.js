/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: 'https://dilangvidal.dev',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
  changefreq: 'monthly',
  priority: 1.0,
};

module.exports = config;
