// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'CORE Engineering Handbook',
  tagline: 'Values, principles, and practices for how we work',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  // Production URL. For GitHub Pages project sites this is
  // https://<org>.github.io. Override if Focus uses a custom/internal domain.
  url: 'https://focusconsulting.github.io',
  // Served under /<repo-name>/ on GitHub Pages project sites.
  // If you deploy to a custom domain or org root, set this back to '/'.
  baseUrl: '/core-eng-handbook/',

  // GitHub org/repo that owns this site.
  organizationName: 'focusconsulting',
  projectName: 'core-eng-handbook',

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang.
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Docs are served at the site root.
          routeBasePath: '/',
          // Remove this to remove the "edit this page" links.
          editUrl: undefined,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Engineering Handbook',
        logo: {
          alt: 'CORE Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'handbookSidebar',
            position: 'left',
            label: 'Handbook',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Handbook',
            items: [
              {label: 'Values', to: '/values'},
              {label: 'Principles', to: '/principles'},
              {label: 'Practices', to: '/practices'},
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Focus Consulting. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
