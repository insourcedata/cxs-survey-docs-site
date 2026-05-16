---
sidebar_position: 1
title: Senior Management SSF Walkthrough
description: A complete Senior Management-only walkthrough for running a Singapore Skills Framework leadership 360 review in Survey360.
---

# Senior Management SSF Walkthrough

This walkthrough follows a complete cold-start Survey360 lifecycle. A platform administrator provisions East West, activates the workspace, and then Senior Management runs the full tenant process without switching to an HR account. The review uses Singapore Skills Framework Critical Core Skills, adds one cycle-level custom competency, generates and edits AI questionnaire wording, assigns rater links, collects three peer responses, generates the report, and opens governed raw-response review.

The screenshots come from a fresh local run with one organization, one Senior Management user, five imported employees, one assessed leader, three peer raters, and one completed report. They show the product surface a customer would use rather than backend setup details.

## 1. Start from the platform control plane

The platform sign-in screen is the controlled entry point for organization setup. In local development, the seeded platform admin signs in before creating any tenant data.

![Platform sign-in screen](/img/walkthroughs/sm-only-ssf/01-platform-sign-in.png)

A clean reset starts with no organizations. The Organizations dashboard confirms that the workspace has not been provisioned yet.

![Organizations dashboard](/img/walkthroughs/sm-only-ssf/02-platform-organizations-dashboard.png)

The provisioning form captures the organization name, subdomain, industry, and first Senior Management email. This is the handoff point from platform administration to tenant ownership.

![Create organization form](/img/walkthroughs/sm-only-ssf/03-platform-provision-form.png)

After creation, the organization record shows the lifecycle state and confirms that an activation link exists. The activation email is sent to the Senior Management address through MailHog in local development.

![Created organization record](/img/walkthroughs/sm-only-ssf/04-platform-organization-created.png)

Opening the activation link prepares the tenant workspace and activates the Senior Management user. From here, the tenant signs in with an email code rather than a password.

![Organization activation confirmation](/img/walkthroughs/sm-only-ssf/05-tenant-activation-success.png)

The tenant sign-in screen sends and verifies the one-time email code. This keeps the tenant workspace separate from the platform password login.

![Senior Management email code screen](/img/walkthroughs/sm-only-ssf/06-senior-management-sign-in-code.png)

After sign-in, Senior Management lands on Survey Cycles. The empty portfolio shows that this is a fresh workspace and no review has been created yet.

![Senior Management workspace overview](/img/walkthroughs/sm-only-ssf/07-survey-cycles-empty.png)

## 2. Import the employee roster

Before building the review, Senior Management imports the participant roster. The embedded CSV includes Maria Santos as the assessed leader and Rafael Cruz, Anna Mercado, and Paolo Reyes as peer raters. Camille Dizon is also imported so the directory looks like a reusable tenant roster rather than a one-off form.

The preview step validates all rows before anything is committed. This is where spelling, email, department, job title, and seniority issues can be caught safely.

![Employee import preview](/img/walkthroughs/sm-only-ssf/08-employee-import-preview.png)

After commit, the Employee Directory shows the imported employees with their departments and seniority. Raters become respondents only after personal survey links are minted later in the cycle.

![Imported employee directory](/img/walkthroughs/sm-only-ssf/09-employee-directory-imported.png)

## 3. Create the SSF leadership review

Senior Management creates `East West Leadership 360` with the goal `Assess leadership behaviours for branch managers and create practical development feedback.` The review uses Critical Core Skills from the Singapore Skills Framework, with `Decision Making` and `Developing People` selected as the standard competencies.

A cycle-level custom competency, `Digital Transformation Leadership`, is added to reflect East West's own leadership priority: leading teams through digital change while preserving customer trust and operational discipline. Custom competencies sit beside the SSF competencies for this cycle, are included in AI question drafting, appear in the respondent form, and are summarized in the report.

![Create leadership review form](/img/walkthroughs/sm-only-ssf/10-create-ssf-survey-form.png)

The cycle workspace confirms the draft status, job family, seniority, framework, selected SSF skills, and the custom competency. The cycle is ready for questionnaire generation.

![Created survey workspace](/img/walkthroughs/sm-only-ssf/11-cycle-workspace-created.png)

## 4. Generate, edit, and accept the AI proposal

Senior Management requests AI generation from the cycle workspace. The proposal is generated as a human-review artifact; AI does not publish questions directly to the active survey.

![AI proposal ready for review](/img/walkthroughs/sm-only-ssf/12-ai-proposal-ready.png)

In the review screen, Senior Management edits a question and asks the wording assistant to make it more behavior-specific while preserving the competency. The alternative is only a suggestion until the reviewer applies it.

![AI wording assistant](/img/walkthroughs/sm-only-ssf/13-ai-proposal-review-alternative.png)

After applying the wording and accepting the proposal, Survey360 creates Version 1 as a draft questionnaire. The draft is still internal; raters cannot answer until it is approved.

![Draft questionnaire version](/img/walkthroughs/sm-only-ssf/14-questionnaire-draft-version.png)

## 5. Approve the questionnaire and set response visibility

Senior Management approves Version 1. Approval moves the questionnaire to `approved` and the cycle to `active`, which unlocks rater assignment and report readiness tracking.

![Approved active cycle](/img/walkthroughs/sm-only-ssf/15-cycle-approved-active.png)

Before respondent links are minted, Senior Management decides the response visibility policy. In this run, anonymous individual response review is enabled: Senior Management may inspect individual rows, but rater names stay hidden. Once links are created, the policy locks so respondents receive a consistent visibility promise.

Cycle Operations shows the active cycle before responses: assigned, invited, and completed counts are all zero; completion is 0%; the raw-response policy is still unlocked until links are minted; and the Senior Management controls are visible.

![Completion before responses](/img/walkthroughs/sm-only-ssf/17-completion-before-responses.png)

## 6. Assign peer raters and send personal links

With the questionnaire active, Senior Management creates three peer assignments for Maria Santos:

- Rafael Cruz rates Maria Santos.
- Anna Mercado rates Maria Santos.
- Paolo Reyes rates Maria Santos.

Each assignment mints a personal respondent link and sends a feedback request email. The links use the `/respondent?tenantId=...#token` shape, so the raw token stays in the URL fragment rather than the query string.

![Assigned peer raters](/img/walkthroughs/sm-only-ssf/16-rater-links-assigned.png)

## 7. Raters submit feedback

Each rater opens a personal link and completes the approved questionnaire. The respondent form includes the SSF questions and the custom `Digital Transformation Leadership` questions in the same survey.

Because anonymous raw-response review was enabled before links were sent, the respondent also sees a response visibility notice and must acknowledge the policy before submitting.

![Respondent survey form](/img/walkthroughs/sm-only-ssf/18-respondent-rating-form.png)

After submission, the respondent receives a confirmation. The link cannot be used for another response.

![Respondent submission confirmation](/img/walkthroughs/sm-only-ssf/19-respondent-submitted.png)

Opening a used link from a fresh page shows the invalid-or-used message. This confirms the single-use respondent token behavior.

![Used survey invitation message](/img/walkthroughs/sm-only-ssf/20-respondent-link-used.png)

## 8. Track completion and generate the report

After all three peer raters submit feedback, Cycle Operations shows `Assigned 3`, `Invited 3`, `Completed 3`, and `Completion 100%`. The response visibility policy is locked, and the anonymity threshold of 3 is satisfied for Maria Santos' peer report.

![Completion after all responses](/img/walkthroughs/sm-only-ssf/21-completion-after-responses.png)

The cycle workspace now marks the report path as ready. Senior Management can generate the report from the cycle hero or from the Individual Reports section.

![Report ready action](/img/walkthroughs/sm-only-ssf/22-report-ready-action.png)

The generated report summarizes the completed feedback for Maria Santos. It includes response count, average rating, competency breakdowns for both SSF and custom competencies, skill scores, cluster scores, and AI development suggestions.

![Generated leadership report](/img/walkthroughs/sm-only-ssf/23-report-generated.png)

## 9. Review governed raw responses

Because anonymous individual response review was enabled before links were minted, Senior Management can open governed raw-response review. Every successful view creates an access log, shown as the `LOG_ID` chip on the page. The policy banner confirms that this is Senior Management-only reviewer-level information and that rater identity is hidden.

![Governed raw response review](/img/walkthroughs/sm-only-ssf/24-governed-raw-response-review.png)

The raw-response page includes a competency radar, exact-score matrix, and rater group summary so Senior Management can inspect the distribution without exporting raw data.

![Governed raw response radar and score matrix](/img/walkthroughs/sm-only-ssf/25-governed-raw-response-radar.png)

The audit table shows every individual response row with the rater anonymized, the rater type, competency, question, answer, and completion timestamp. This makes raw review inspectable while preserving the cycle's anonymous identity policy.

![Governed raw response layout](/img/walkthroughs/sm-only-ssf/26-governed-raw-response-layout.png)

## Closeout checklist

Use this checklist before closing the review:

- The organization was provisioned and activated from a clean platform state.
- Senior Management signed in through the tenant email-code flow.
- No HR invitation, HR sign-in, or tenant custom framework switch was used.
- The employee roster includes Maria Santos plus the selected peer raters.
- The cycle uses Critical Core Skills (SSF) and includes a cycle-level custom competency.
- AI generation was requested by a human, reviewed, edited, assisted with an alternative wording, and accepted.
- Version 1 was approved before links were sent.
- Anonymous raw-response review was decided before respondent links were minted and then locked.
- Three personal peer links were sent, with raw tokens kept in URL fragments.
- Each respondent completed the survey and acknowledged the visibility notice.
- Reusing a respondent link failed.
- Cycle Operations moved from 0% to 100% completion.
- The report was generated only after three completed peer responses satisfied the anonymity threshold.
- The final report includes standard SSF skills, the custom competency, scores, and AI development suggestions.
- Governed raw-response review is Senior Management-only, access-logged, and anonymized under the selected policy.

The walkthrough is complete when Senior Management can see the generated report and, when enabled, the governed raw-response review page with the expected access log and identity policy.
