import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
  mainSidebar: [
    "intro",
    {
      type: "category",
      label: "Placeholders",
      items: ["placeholders/getting-started", "placeholders/faq"],
    },
  ],
};

export default sidebars;
