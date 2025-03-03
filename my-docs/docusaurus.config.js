module.exports = {
  title: 'Crypto Price Tracker Docs',
  tagline: 'Documentation for Crypto Price Tracker',
  url: 'https://your-docs-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'your-org', // Usually your GitHub org/user name.
  projectName: 'crypto-docs', // Usually your repo name.

  themeConfig: {
    navbar: {
      title: 'Crypto Price Tracker',
      logo: {
        alt: 'Crypto Price Tracker Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/setup',
          label: 'Docs',
          position: 'left',
        },
        {
          href: 'https://github.com/MinKhantKyaw2005/crypto-price-tracker',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Setup',
              to: 'docs/setup',
            },
            {
              label: 'API Integration',
              to: 'docs/api',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/MinKhantKyaw2005/crypto-price-tracker',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Crypto Price Tracker. Built with Docusaurus.`,
    },
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // Remove the sidebarPath option
          editUrl: 'https://github.com/MinKhantKyaw2005/crypto-price-tracker',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};