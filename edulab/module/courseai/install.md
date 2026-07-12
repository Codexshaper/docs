# Installing CourseAI

Follow these steps to install and enable the CourseAI module.

---

## Step 01 — Upload the Module

In your admin dashboard, navigate to **Module Manager → Modules** and click **Add New Module**.

<!-- ![Add New Module](/assets/lms/images/module/courseai/add-new-module.png) -->

Upload the `CourseAI.zip` file you downloaded from CodeCanyon, or paste the module URL, then click **Install**.

<!-- ![Upload CourseAI Module](/assets/lms/images/module/courseai/upload-module.png) -->

---

## Step 02 — Enable the Module

After installation, locate CourseAI in the module list and click **Enable**.

<!-- ![Enable CourseAI Module](/assets/lms/images/module/courseai/enable-module.png) -->

Enabling the module runs its database migrations, which create the `courseai_drafts` and `courseai_audit_logs` tables.

---

## Step 03 — Configure Your AI Provider

Navigate to **Admin → Settings → AI Provider**.

<!-- ![AI Provider Settings](/assets/lms/images/module/courseai/ai-settings.png) -->

| Field | Description |
|-------|-------------|
| AI Provider | Select `OpenAI`, `Gemini`, or `Claude` |
| API Key | Paste the API key for your chosen provider |
| Model | Optional. Leave blank to use the default model for each provider |

Click **Save**.

> **Tip:** You can change the provider at any time without reinstalling. All existing drafts are unaffected.

---

## Step 04 — (Optional) Configure a Queue

By default, AI generation jobs run synchronously (inline during the request). For a smoother user experience — especially for slower AI providers — configure a background queue.

Add the following to your `.env` file:

```env
COURSEAI_QUEUE_CONNECTION=database   # or: redis
COURSEAI_QUEUE_NAME=courseai
```

Then run a queue worker:

```bash
php artisan queue:work --queue=courseai
```

> **Note:** Without a queue worker, generation will still work — it just runs in-request and the user waits on the page until the AI responds.

---

## Step 05 — Clear Caches

```bash
php artisan optimize:clear
```

The AI Tools menu will now appear in the admin sidebar.

<!-- ![Admin Sidebar CourseAI](/assets/lms/images/module/courseai/admin-sidebar.png) -->
