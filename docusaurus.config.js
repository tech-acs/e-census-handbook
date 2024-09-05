// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'E-Census Handbook',
  tagline: 'Digital Population and Housing Census Handbook for Africa Based on Experiences and Lessons from the 2020 Round',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://tech-acs.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/e-census-handbook',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'tech-acs', // Usually your GitHub org/user name.
  projectName: 'e-census-handbook', // Usually your repo name.

  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  deploymentBranch: 'gh-pages',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
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
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/tech-acs/e-census-handbook/tree/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'E-Census Handbook',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'experiencesLessons2020Sidebar',
            position: 'left',
            label: 'Experiences & Lessons from the 2020 Round',
          },
          {
            type: 'docSidebar',
            sidebarId: 'caseStudiesSidebar',
            position: 'left',
            label: 'Case Studies',
          },
          {
            type: 'docSidebar',
            sidebarId: 'recommendationsSidebar',
            position: 'left',
            label: 'Recommendations',
          },
          {
            type: 'docSidebar',
            sidebarId: 'resourcesSidebar',
            position: 'left',
            label: 'Resources',
          },
          {
            href: 'https://github.com/facebook/docusaurus',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Handbook',
            items: [
              {
                label: 'Experiences & Lessons',
                to: '/docs/experiences-lessons-2020/chapter-01/background',
              },
              {
                label: 'Case Studies',
                to: '/docs/case-studies/case-study-ch01/case-study-01',
              },
              {
                label: 'Recommendations',
                to: '/docs/recommendations/recommendation',
              },
              {
                label: 'Resources',
                to: '/docs/resources/resource-ch01',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/tech-acs/e-census-handbook',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} UN-ECA, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
