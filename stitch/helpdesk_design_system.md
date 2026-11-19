---
name: "HelpDesk SaaS Design System"
description: "A premium, precision-crafted SaaS design system for modern customer support workflows across customer, agent, and administrator roles."
---

## Overview

HelpDesk is a high-performance customer support and ticketing platform built for speed, transparency, and operational clarity. Inspired by tools like Linear, Zendesk, Intercom, and Freshdesk, the interface balances high-density data handling with approachable customer submission flows. The visual language conveys reliability and razor-sharp clarity: dark navy structural navigation anchors the workspace, neutral light gray backgrounds focus attention on interactive white work-cards, and high-contrast electric blue drives primary workflows.

## Colors

The color system is calibrated for enterprise-grade contrast, fast scanning, and unambiguous priority triage.

- **Primary:** Electric blue (`#1D4ED8`) providing punchy, accessible focal points and active state anchors.
- **Sidebar & Surface Base:** Deep dark navy (`#111827`) for navigation chrome, pairing with crisp light canvas (`#F8FAFC`) and card surfaces (`#FFFFFF`).
- **Semantic Badges:** Strict status and priority mapping ensuring color is reinforced by iconography and explicit typography.

```yaml
colors:
  primary: "#1D4ED8"
  primary-hover: "#1E40AF"
  primary-subtle: "#EFF6FF"
  on-primary: "#FFFFFF"
  nav-dark: "#111827"
  nav-border: "#1F2937"
  text-main: "#0F172A"
  text-muted: "#64748B"
  border-subtle: "#E2E8F0"
  success: "#166534"
  success-surface: "#DCFCE7"
  warning: "#9A3412"
  warning-surface: "#FFEDD5"
  error: "#991B1B"
  error-surface: "#FEE2E2"
  info: "#1E40AF"
  info-surface: "#DBEAFE"
  light:
    surface: "#FFFFFF"
    on-surface: "#0F172A"
    surface-container: "#F8FAFC"
    on-surface-container: "#334155"
    outline: "#CBD5E1"
  dark:
    surface: "#111827"
    on-surface: "#F8FAFC"
    surface-container: "#1F2937"
    on-surface-container: "#E2E8F0"
    outline: "#374151"
```

## Typography

The dual-pairing of **Red Hat Text** for geometric structure and brand presence with **Instrument Sans** for interface legibility ensures flawless readability across high-volume ticket tables, timelines, and message threads. **Spline Sans Mono** handles ticket IDs, timestamps, and metadata tokens.

```yaml
typography:
  display-lg:
    fontFamily: "Red Hat Text"
    fontSize: 36px
    fontWeight: 700
    lineHeight: 44px
    letterSpacing: -0.5px
  display-lg-mobile:
    fontFamily: "Red Hat Text"
    fontSize: 28px
    fontWeight: 700
    lineHeight: 36px
    letterSpacing: -0.25px
  headline-xl:
    fontFamily: "Red Hat Text"
    fontSize: 28px
    fontWeight: 700
    lineHeight: 36px
  headline-xl-mobile:
    fontFamily: "Red Hat Text"
    fontSize: 22px
    fontWeight: 700
    lineHeight: 28px
  headline-lg:
    fontFamily: "Red Hat Text"
    fontSize: 22px
    fontWeight: 600
    lineHeight: 30px
  headline-lg-mobile:
    fontFamily: "Red Hat Text"
    fontSize: 18px
    fontWeight: 600
    lineHeight: 24px
  title-md:
    fontFamily: "Red Hat Text"
    fontSize: 16px
    fontWeight: 600
    lineHeight: 24px
  body-lg:
    fontFamily: "Instrument Sans"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 24px
  body-md:
    fontFamily: "Instrument Sans"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 20px
  body-sm:
    fontFamily: "Instrument Sans"
    fontSize: 12px
    fontWeight: 400
    lineHeight: 16px
  label-lg:
    fontFamily: "Instrument Sans"
    fontSize: 14px
    fontWeight: 600
    lineHeight: 20px
  label-md:
    fontFamily: "Instrument Sans"
    fontSize: 12px
    fontWeight: 600
    lineHeight: 16px
    letterSpacing: 0.2px
  label-sm:
    fontFamily: "Instrument Sans"
    fontSize: 11px
    fontWeight: 600
    lineHeight: 14px
    letterSpacing: 0.4px
  code-sm:
    fontFamily: "Spline Sans Mono"
    fontSize: 12px
    fontWeight: 500
    lineHeight: 16px
```

## Layout & Spacing

A structured 8px baseline rhythm organizes the interface with purposeful visual grouping. Dashboards utilize a fixed 260px collapsible dark sidebar, an integrated top header with search, notifications, and user profiles, and a responsive fluid grid.

```yaml
spacing:
  gutter-xs: 4px
  gutter-sm: 8px
  gutter-md: 16px
  gutter-lg: 24px
  gutter-xl: 32px
  section: 48px
  page-margin: 24px
```
## Elevation & Depth

Layering relies on crisp 1px borders (`#E2E8F0`) backed by subtle ambient dropshadows for floating menus, dialog modals, and ticket flyouts. This prevents heavy, muddy interfaces while delivering tactile hierarchy for interactive elements.

## Shapes

Corners reflect a balanced modern SaaS aesthetic with standard 8px radii on inputs, buttons, and cards, 12px on prominent metric cards and dialog containers, and full pill badges for statuses.

```yaml
rounded:
  sm: 4px
  DEFAULT: 8px
  md: 12px
  lg: 16px
  xl: 20px
  full: 9999px
```

## Motion & Micro-interaction

Micro-interactions feel crisp, instantaneous, and business-focused. Transition states respect system accessibility preferences.

```yaml
motion:
  state-change:
    duration: 120ms
    delay: 0ms
    timingFunction: ease-out
  surface-enter:
    duration: 200ms
    delay: 0ms
    timingFunction: cubic-bezier(0.16, 1, 0.3, 1)
  surface-exit:
    duration: 140ms
    delay: 0ms
    timingFunction: cubic-bezier(0.4, 0, 1, 1)
```

## Voice & Content Strategy

The voice is authoritative, helpful, and concise. Labels use actionable verbs ("Create Ticket", "Assign to Me", "Resolve Ticket", "Export Report"). Statuses are standardized across all roles: Open, In Progress, Waiting for Customer, Resolved, and Closed. Ticket IDs strictly use the standard format `TCK-1001`.

## Components

Component implementations live as individual HTML sticker sheet files in
`components/`. Each file contains the canonical, styled HTML components with
`<!-- COMPONENT: name -->` comment markers. Read each file before use.

- **Badge** → `@components/badge.html`: `badge-numeric`, `badge-dot`
- **Button** → `@components/button.html`: `button-primary`, `button-icon`, `button-with-icon`
- **Card** → `@components/card.html`: `card-elevated`, `card-action`, `card-interactive`, `card-interactive-2`
- **Input Field** → `@components/input-field.html`: `input-field-text`, `input-field-icon`
- **Modal** → `@components/modal.html`: `modal-standard`, `modal-alert`, `modal-drawer`
- **Table** → `@components/table.html`: `table-standard`, `table-interactive`, `table-selectable`
