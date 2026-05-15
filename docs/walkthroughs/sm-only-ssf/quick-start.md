---
sidebar_position: 2
title: Quick Start
description: Local services and URLs needed before running the SM-only SSF walkthrough.
---

# Quick Start

## Purpose

Prepare the local Survey360 stack before starting the walkthrough.

## Steps

1. Run `make dev-ps` to check the stack.
2. If it is not running, run `make dev-up`.
3. For a clean demo, run `make dev-nuke`, `make dev-up`, then `make seed-platform-admin`.
4. Use `http://localhost:3160` for platform, tenant, and respondent pages.
5. Use MailHog at `http://localhost:8026` for activation and respondent emails.

## Expected result

The local web app, worker, database, Redis, and MailHog services are available before the tenant is provisioned.
