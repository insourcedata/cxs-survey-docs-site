import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
  mainSidebar: [
    "intro",
    {
      type: "category",
      label: "Walkthroughs",
      items: [
        "walkthroughs/index",
        "walkthroughs/survey-lifecycle-overview",
        {
          type: "category",
          label: "SM-only SSF Walkthrough",
          items: [
            "walkthroughs/sm-only-ssf/overview",
            "walkthroughs/sm-only-ssf/quick-start",
            "walkthroughs/sm-only-ssf/reset-provision-activate",
            "walkthroughs/sm-only-ssf/import-employees",
            "walkthroughs/sm-only-ssf/create-ssf-survey",
            "walkthroughs/sm-only-ssf/build-approve-questionnaire",
            "walkthroughs/sm-only-ssf/assign-raters-send-links",
            "walkthroughs/sm-only-ssf/submit-responses-generate-report",
            "walkthroughs/sm-only-ssf/verification-checklist",
          ],
        },
        "walkthroughs/respondent-flow-link-rules",
        "walkthroughs/completion-reporting-rules",
      ],
    },
    {
      type: "category",
      label: "Placeholders",
      items: ["placeholders/getting-started", "placeholders/faq"],
    },
  ],
};

export default sidebars;
