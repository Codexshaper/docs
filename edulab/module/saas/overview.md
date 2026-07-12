# Tenanta Module Overview

LMS Hub Tenanta is a premium add-on module for EduLab LMS that transforms your single-tenant LMS installation into a full **multi-tenant Tenanta platform**. Instead of running one LMS for your own students, you can sell LMS instances to other schools, businesses, and trainers — each getting their own fully isolated LMS.

---

## What It Does

When the Tenanta module is installed and active, your EduLab application gains:

- A **public landing site** with a pricing page and marketing sections
- A **self-service registration form** where customers pick a plan and create their own subdomain
- **Automated tenant provisioning** — a new, fully isolated LMS instance is created in the background
- **Subscription billing** — plans, invoices, and payment processing for each tenant
- A **Tenanta admin panel** for managing all tenants, subscriptions, and platform settings
- A **tenant owner billing portal** where customers manage their own subscription
- **Two database modes** — separate databases per tenant or a single shared database
- **Module manager** — install, enable/disable, and uninstall LMS modules across the platform
- **System tools** — cache management, storage link, license management

---

## Key Concepts

| Term | Meaning |
|------|---------|
| **Tenant** | A customer's LMS instance. Each tenant has its own database (or shared with `tenant_id` isolation) and subdomain (e.g. `acme.yourdomain.com`) |
| **Tenant Owner** | The person who registered and pays for the tenant account (a `User` with the `TenantOwner` role) |
| **Plan** | A subscription tier with defined limits (max users, max courses, storage) and a price |
| **Billing** | A subscription record — which plan a tenant is on, when it renews, and its status |
| **Invoice** | A billing document generated each billing cycle |
| **Payment** | A record of a payment transaction against an invoice |
| **Trial** | A period where a tenant uses a paid plan for free before their card is charged |
| **Central Domain** | Your main domain (e.g. `yourdomain.com`) where the Tenanta admin panel and landing pages live |
| **Tenant Domain** | A subdomain (e.g. `acme.yourdomain.com`) or custom domain assigned to a tenant |

---

## Architecture

```
Central Domain (yourdomain.com)
│
├── Landing + Pricing          ← LandingController
├── /tenant/register           ← TenantProvisioningController
├── /tenant/login              ← Auth\LoginController (web + admin guard)
├── /billing                   ← Redirects to first owned tenant billing
├── /billing/{tenantId}/*      ← Tenant owner billing portal
└── /tenanta/admin/*              ← Tenanta admin panel (admin guard)

Tenant Subdomains (*.yourdomain.com)
└── Full EduLab LMS per tenant (isolated DB or tenant_id scoping)
```

---

## Feature List

### Tenancy
- Multi-tenant architecture using **Stancl Tenancy v3**
- **Separate database** mode (one MySQL DB per tenant) — default
- **Single database** mode (shared DB with automatic `tenant_id` scoping)
- Automatic tenant column synchronization when switching modes
- Session isolation per tenant domain via `SessionTenancyBootstrapper`

### Billing & Subscriptions
- Subscription plans with monthly / annual billing cycles
- Free plan + paid plans with trial support
- Payment-first provisioning for paid signups (tenant is created only after verified payment)
- Optional trial-with-card verification flow before provisioning
- 7 payment gateways: **Stripe, PayPal, Razorpay, Paystack, PayU, Xendit, Offline/Bank Transfer**
- Automated invoice generation and PDF download
- Auto-renewal with configurable retry and reminder scheduling

### Admin Management
- Admin: suspend, reactivate, cancel, renew any subscription
- Tenant owner: upgrade, downgrade, cancel, toggle auto-renew
- Tenanta admin dashboard with stats (total tenants, revenue, recent activity)
- Module manager with license activation
- System tools: cache clear/optimize, storage link

### Landing & Marketing
- Landing pages: Home, Pricing, About, Contact, Blog, Plan Detail
- Pricing toggle (monthly / annual) with savings badge

### Security
- Central admin vs tenant admin authentication isolation
- Session fixation protection on all login paths
- Audit logging for billing settings changes
- Payment data encryption at rest

---

## Requirements

- EduLab LMS **v2.0+** fully installed and working
- PHP **8.2+**
- MySQL **8.0+**
- Laravel Scheduler running (`php artisan schedule:run` every minute via cron) or Laravel Queue Work running (`php artisan queue:work`)
- DNS wildcard record `*.yourdomain.com` pointing to your server (for subdomains)
- **Separate DB mode only:** MySQL user with `CREATE DATABASE` / `DROP DATABASE` privileges

> **Note:** The Tenanta module is a separate purchase from the base EduLab LMS. You need a working EduLab installation before installing this module.

---

## Module Documentation

| Page | Description |
|------|-------------|
| [Quick Start](./quick-start) | Step-by-step setup guide |
| [Database Modes](./database-modes) | Separate vs single database configuration |
| [SaaS Settings](./saas-settings) | Platform settings (database mode, routes, module controls) |
| [Billing Settings](./billing-settings) | Currency, trials, auto-renewal, gateways, security |
| [Authentication](./authentication) | Login guards, session isolation, tenant vs central auth |
| [Admin Dashboard](./admin-dashboard) | Tenanta admin panel overview |
| [Tenants](./tenants) | Tenant management (create, view, custom domains) |
| [Billing](./billing) | Subscription lifecycle, trials, renewal, suspension |
| [Invoices](./invoices) | Invoice generation, viewing, and PDF export |
| [Provisioning Console](./provisioning-console) | Real-time tenant setup console |
| [Tenant Portal](./tenant-portal) | Self-service registration and billing portal |
| [Landing Site](./landing-site) | Landing page layout and customisation |
| [System Tools](./system-tools) | Cache, storage, license management |
| [Module Manager](./module-manager) | Installing and managing LMS modules |
| [Module Compatibility](./module-tenant-compatibility-rules) | Module-tenant compatibility rules |
| [Plans & Subscriptions](./plans) | Creating and managing subscription plans |
| [Payment Gateways](./payment-gateways) | Gateway configuration and API keys |
| [ENV Reference](./env-reference) | All environment variables with defaults |
| [Route Context Rules](./route-context-rules) | Middleware and route scoping rules |

---

## Important Behaviour Notes

- Disabling **Trial Enabled** affects new signups only; existing trial tenants are not deleted or auto-moved to free.
- When a trial expires, subscription status is moved to inactive and tenant access is locked until renewal/upgrade.
- Enterprise-style plans are typically configured as custom pricing (`price = 0` + CTA link), and handled by sales/contact flow.
- In **single database mode**, all tenant data is scoped by `tenant_id` — no cross-tenant leakage is possible as long as queries go through Eloquent models.
