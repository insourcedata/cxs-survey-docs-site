import { themes as prismThemes } from "prism-react-renderer";

import type { Config } from "@docusaurus/types";
import type {
  Options as PresetOptions,
  ThemeConfig,
} from "@docusaurus/preset-classic";

const config: Config = {
  title: "Survey360 Docs",
  tagline: "TODO: Replace this placeholder when end-user documentation is ready.",
  favicon: "img/favicon.svg",

  url: "https://insourcedata.github.io",
  baseUrl: "/cxs-survey-docs-site/",
  organizationName: "insourcedata",
  projectName: "cxs-survey-docs-site",
  trailingSlash: false,

  onBrokenLinks: "throw",
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: "warn",
    },
  },

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          routeBasePath: "/",
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies PresetOptions,
    ],
  ],

  themeConfig: {
    image: "img/survey360-social-card.svg",
    navbar: {
      title: "Survey360 Docs",
      logo: {
        alt: "Survey360 placeholder logo",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "mainSidebar",
          position: "left",
          label: "Docs",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Placeholder intro",
              to: "/",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Survey360.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies ThemeConfig,
};

export default config;
