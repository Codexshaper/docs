# Module Manager

The SaaS Module Manager allows platform administrators to install, activate, enable/disable, and uninstall LMS modules from the SaaS admin panel.

Navigate to **SaaS Admin → Module Manager** or go to `/saas/module-manager/`.

---

## Module List

The main page shows all installed modules with:

| Column | Description |
|--------|-------------|
| Module Name | The module's display name |
| Status | Current state: enabled, disabled, or not installed |
| License | Whether the module has an active license |
| Actions | Available operations based on module state |

---

## Installing Modules

There are three ways to install a new module:

### Upload ZIP

Click **Upload Module** and select a `.zip` file containing the module package. The module will be extracted to the `Modules/` directory.

### Install from URL

Provide a direct download URL to a module ZIP file. The system will download and install the module.

### Install from Envato

Enter your Envato purchase code to download and install a module directly from the Envato marketplace.

---

## Enabling / Disabling

| Action | What Happens |
|--------|-------------|
| **Enable** | The module is activated in `modules_statuses.json` and its service provider is registered. Routes, views, and migrations become available. |
| **Disable** | The module is deactivated. Its routes and features stop being available, but files and database tables remain intact. |

Enabling and disabling are safe, non-destructive operations. The module's data is preserved.

---

## License Activation

Some modules require license activation before they can be used.

### Activate

Navigate to **Module Manager → {Module} → Activate** or `GET /saas/module-manager/{module}/activate`.

Enter your purchase code and email. The system validates the license and marks the module as activated.

### Deactivate

Use the **Deactivate** button to remove the license binding. This does not uninstall the module — it only removes the license record. You can re-activate with the same or a different license code.

> **Note:** If a module is marked as activated but its license data is missing or corrupted, the system will automatically deactivate it and show an error.

---

## Uninstalling Modules

Uninstalling a module removes it from the system. This operation is controlled by two SaaS settings:

| Setting | Effect |
|---------|--------|
| **Allow Module Uninstall** = off | Uninstall button is hidden entirely |
| **Allow Resource Deletion** = on | Uninstall also removes database tables and files. Requires typing `DELETE` to confirm |
| **Allow Resource Deletion** = off | Uninstall removes the module from `modules_statuses.json` but preserves files and data |

> **Warning:** With **Allow Resource Deletion** enabled, uninstalling is irreversible. Always back up before proceeding.

### SaaS Module Self-Protection

The SaaS module has special protections when uninstalling itself:
- Tenant cleanup is attempted before removal
- If SaaS classes are unavailable (e.g., autoloader removed), a fallback cleanup runs
- The module dynamically re-registers its autoloader if needed during uninstall

---

## Console Output

All module operations (enable, disable, install, uninstall) run through a console process with real-time output. After starting an operation, you'll be redirected to a console page where you can monitor progress.

| Route | Purpose |
|-------|---------|
| `GET /saas/module-manager/console/{id}` | View console output |
| `POST /saas/module-manager/console/{id}/start` | Start the queued operation |
| `GET /saas/module-manager/console/{id}/poll` | Poll for output updates (AJAX) |
