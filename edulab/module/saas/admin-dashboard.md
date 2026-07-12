# Tenanta Admin Dashboard

The Tenanta admin dashboard provides an overview of your multi-tenant platform at a glance. Access it at **Tenanta Admin → Dashboard** or navigate to `/tenanta/admin/`.

---

## Dashboard Stats

The dashboard displays real-time statistics in card format:

| Card | Description |
|------|-------------|
| Total Tenants | Total number of registered tenant instances |
| Active Tenants | Tenants with an active (paid) subscription |
| Trial Tenants | Tenants currently on a free trial period |
| Suspended | Tenants suspended due to payment failure or admin action |
| Total Plans | Number of active subscription plans |
| Total Invoices | Total invoices generated across all tenants |
| Unpaid Invoices | Invoices awaiting payment |
| Overdue Invoices | Invoices past their due date |

---

## Recent Activity

Below the stats cards, the dashboard shows:

### Recent Tenants
The 8 most recently created tenants with:
- Tenant name and domain
- Subscription plan
- Billing status (active, trial, suspended, cancelled)

### Recent Invoices
The 6 most recently generated invoices with:
- Invoice number and amount
- Associated tenant and plan
- Payment status

---

## Tenant List

Click **View All Tenants** or navigate to **Tenanta Admin → Tenants** to see a paginated list of all tenants (20 per page). Each entry shows the tenant's billing status, current plan, and associated domains.

---

## Admin Panel Navigation

The Tenanta admin panel sidebar provides access to:

| Section | Path | Description |
|---------|------|-------------|
| Dashboard | `/tenanta/admin/` | Overview stats and recent activity |
| Tenants | `/tenanta/admin/tenants` | Full tenant list with management |
| Tenant CRUD | `/tenanta/` | Create, edit, view, delete tenants |
| Settings | `/tenanta/admin/settings` | Tenanta platform settings |
| Billing Settings | `/admin/billing/settings` | Currency, trials, gateways, security |
| Plans | `/admin/billing/plans` | Subscription plan management |
| Billings | `/admin/billing/billings` | Subscription management |
| Invoices | `/admin/billing/invoices` | Invoice management |
| Payments | `/admin/billing/payments` | Payment records |
| Module Manager | `/tenanta/module-manager/` | Module installation and management |
| Profile | `/tenanta/admin/profile` | Admin profile and password |
| License | `/tenanta/admin/license` | License key management |

---

## Access Control

The Tenanta admin panel is protected by:

1. **`auth:admin`** middleware — requires login with the `admin` guard
2. **`EnsureCentralTenantaAdmin`** middleware — blocks tenant-scoped admins from accessing the central panel

Only admins with a `null` value in the `tenant_id` column can access the Tenanta admin panel. See [Authentication](./authentication) for details.
