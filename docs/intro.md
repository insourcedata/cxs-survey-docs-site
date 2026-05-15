---
sidebar_position: 1
title: Survey360 at a glance
description: A high-level overview of the Survey360 actors and survey lifecycle.
slug: /
---

# Survey360 at a glance

Survey360 moves from an empty system to a trusted 360 report through Super Admin, Senior Management, HR, and Respondent handoffs. Employees are the roster population; respondents are employees temporarily acting through single-use survey links.

## What 360 feedback means here

360 feedback collects structured input about an assessed employee from the people around them: managers, peers, direct reports, and sometimes the employee themselves. Instead of relying on one manager's view, it combines multiple perspectives into a competency-based picture of strengths, gaps, and development priorities.

Survey360 is built around trust in that process. HR can coordinate the survey without seeing sensitive answers, respondents can give honest feedback through protected single-use links, and Senior Management receives reports only after governance, approval, and anonymity rules have been applied.

<section className="intro-actors" aria-label="Survey360 actors">
  <article className="intro-actor intro-actor-admin">
    <h2>Super Admin</h2>
    <p>Platform operator. Provisions, suspends, reactivates, and inspects lifecycle metadata. Does not see tenant survey data.</p>
  </article>
  <article className="intro-actor intro-actor-sm">
    <h2>Senior Management</h2>
    <p>Tenant executive. Activates the organization, invites HR, approves questionnaires, manages governed raw-response policy, generates reports, and views reports.</p>
  </article>
  <article className="intro-actor intro-actor-hr">
    <h2>HR Admin</h2>
    <p>Survey coordinator. Imports employees, creates cycles, requests AI, reviews proposals and alternatives, creates rater links, and tracks completion without seeing answers.</p>
  </article>
  <article className="intro-actor intro-actor-respondent">
    <h2>Respondent</h2>
    <p>A temporary access mode for invited raters. Usually these are employees answering through single-use links without tenant accounts.</p>
  </article>
</section>

## Journey Swimlanes

<section className="intro-swimlane" aria-label="Survey360 journey swimlane summary">
  <div className="intro-swimlane-head"><span>Lane</span>Actor</div>
  <div className="intro-swimlane-head"><span>Stage 1</span>Platform Setup</div>
  <div className="intro-swimlane-head"><span>Stage 2</span>Tenant Activation</div>
  <div className="intro-swimlane-head"><span>Stage 3</span>HR Onboarding</div>
  <div className="intro-swimlane-head"><span>Stage 4</span>Survey Build</div>
  <div className="intro-swimlane-head"><span>Stage 5</span>Approval</div>
  <div className="intro-swimlane-head"><span>Stage 6</span>Rater Links</div>
  <div className="intro-swimlane-head"><span>Stage 7</span>Feedback</div>
  <div className="intro-swimlane-head"><span>Stage 8</span>Report</div>

  <div className="intro-lane intro-admin-line"><span>Platform</span>Super Admin</div>
  <div className="intro-step intro-admin-line" data-step="1">
    <h4>Start platform</h4>
    <p>Runs the clean stack and seeds only the platform admin login.</p>
  </div>
  <div className="intro-step intro-admin-line" data-step="2">
    <h4>Provision org</h4>
    <p>Creates the tenant, subdomain, industry, and first SM activation email.</p>
  </div>
  <div className="intro-step intro-empty"></div>
  <div className="intro-step intro-empty"></div>
  <div className="intro-step intro-empty"></div>
  <div className="intro-step intro-empty"></div>
  <div className="intro-step intro-empty"></div>
  <div className="intro-step intro-empty"></div>

  <div className="intro-lane intro-sm-line"><span>Tenant executive</span>Senior Management</div>
  <div className="intro-step intro-empty"></div>
  <div className="intro-step intro-sm-line" data-step="3">
    <h4>Activate tenant</h4>
    <p>Claims activation link, signs in by OTP, and lands in an empty tenant workspace.</p>
  </div>
  <div className="intro-step intro-sm-line" data-step="4">
    <h4>Invite HR</h4>
    <p>Sends HR Admin invitation so survey coordination can start.</p>
  </div>
  <div className="intro-step intro-empty"></div>
  <div className="intro-step intro-sm-line" data-step="8">
    <h4>Approve questionnaire</h4>
    <p>Reviews draft version and approves it, moving the cycle to active.</p>
  </div>
  <div className="intro-step intro-empty"></div>
  <div className="intro-step intro-sm-line" data-step="12">
    <h4>Monitor completion</h4>
    <p>Can view lifecycle counts and SM-only governance controls while HR remains counts-only.</p>
  </div>
  <div className="intro-step intro-sm-line" data-step="13">
    <h4>Report and raw review</h4>
    <p>Creates threshold-safe reports and, only if policy allows it, reviews access-logged raw rows.</p>
  </div>

  <div className="intro-lane intro-hr-line"><span>Coordinator</span>HR Admin</div>
  <div className="intro-step intro-empty"></div>
  <div className="intro-step intro-empty"></div>
  <div className="intro-step intro-hr-line" data-step="5">
    <h4>Accept invite</h4>
    <p>Claims invitation link and signs in with email OTP as HR Admin.</p>
  </div>
  <div className="intro-step intro-hr-line" data-step="6">
    <h4>Import employees</h4>
    <p>Previews CSV, commits valid rows, and confirms the assessed employee plus raters.</p>
  </div>
  <div className="intro-step intro-hr-line" data-step="7">
    <h4>Create survey</h4>
    <p>Creates cycle, requests AI generation, reviews alternatives, applies one wording option, edits, saves, and accepts proposal.</p>
  </div>
  <div className="intro-step intro-hr-line" data-step="9">
    <h4>Create rater links</h4>
    <p>Selects Maria Santos and three peer raters, then sends respondent links.</p>
  </div>
  <div className="intro-step intro-empty"></div>
  <div className="intro-step intro-empty"></div>

  <div className="intro-lane intro-respondent-line"><span>Invited rater</span>Respondent</div>
  <div className="intro-step intro-empty"></div>
  <div className="intro-step intro-empty"></div>
  <div className="intro-step intro-empty"></div>
  <div className="intro-step intro-empty"></div>
  <div className="intro-step intro-empty"></div>
  <div className="intro-step intro-respondent-line" data-step="10">
    <h4>Receive link</h4>
    <p>The invited rater becomes a respondent through <code>/respondent?tenantId=...#token</code>.</p>
  </div>
  <div className="intro-step intro-respondent-line" data-step="11">
    <h4>Submit feedback</h4>
    <p>The respondent acknowledges active raw-visibility policy when shown, answers the 7-point questions, and sees Response submitted.</p>
  </div>
  <div className="intro-step intro-empty"></div>
</section>

Use this page as the map, then follow the walkthroughs for the detailed cold-start run.
