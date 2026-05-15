---
sidebar_position: 3
title: Respondent Flow and Link Rules
description: How respondent survey links behave during the SM-only SSF walkthrough.
---

# Respondent Flow and Link Rules

## Purpose

Confirm that raters use secure, single-use links without signing in to the tenant workspace.

## Steps

1. Send one respondent link per subject-rater assignment.
2. Open each full `/respondent?tenantId=...#token` URL from a fresh page load.
3. Submit one completed response per link.
4. Reopen one used link to confirm it cannot be reused.

## Expected result

Each rater can submit once, the raw token stays in the URL fragment, and a reused link shows that it is invalid or already used.
