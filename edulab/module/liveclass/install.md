# Installing LiveClass

Follow these steps to install and enable the LiveClass module.

---

## Step 01 — Upload the Module

In your admin dashboard, navigate to **Module Manager → Modules** and click **Add New Module**.

<!-- ![Add New Module](/assets/lms/images/module/liveclass/add-new-module.png) -->

Upload the `LiveClass.zip` file you downloaded from CodeCanyon, then click **Install**.

---

## Step 02 — Enable the Module

After installation, locate LiveClass in the module list and click **Enable**.

<!-- ![Enable LiveClass Module](/assets/lms/images/module/liveclass/enable-module.png) -->

Enabling the module runs its database migrations, which create:

| Table | Purpose |
|-------|---------|
| `live_sessions` | Session schedule and settings |
| `live_session_participants` | Invited co-hosts |
| `live_session_attendance` | Per-user join/leave timestamps |
| `live_session_messages` | In-room chat |
| `live_session_recordings` | Recording metadata |
| `live_session_polls` | Polls and votes |
| `live_session_questions` | Q&A questions and upvotes |
| `live_session_breakout_rooms` | Breakout room assignments (Premium) |
| `live_session_signals` | WebRTC signaling payloads |

---

## Step 03 — Build Front-End Assets

LiveClass requires a one-time asset build after installation:

```bash
cd Modules/LiveClass
npm install
npm run build
```

On **Windows PowerShell**, run commands separately (do not chain with `&&`).

The built assets are published to `public/modules/liveclass/`. Verify `public/modules/liveclass/.vite/manifest.json` exists after the build.

---

## Step 04 — Choose Your Delivery Mode

LiveClass works out of the box with native **WebRTC** (no external accounts needed). Read the options below and set the appropriate `.env` variables.

### Option A — Native WebRTC (default, no setup required)

```env
LIVECLASS_DRIVER=webrtc
```

Supports up to 10 concurrent participants per room (browser peer-to-peer). No server, no API keys.

### Option B — Native LiveKit (self-hosted SFU, recommended for 10+ participants)

1. Run your own LiveKit server:
   ```bash
   docker run -d --network host livekit/livekit-server --dev
   ```
   See [LiveKit self-hosting docs](https://docs.livekit.io/realtime/self-hosting/) for production setup.

2. Add to `.env`:
   ```env
   LIVECLASS_DRIVER=livekit
   LIVECLASS_PREMIUM_LIVEKIT=true
   LIVEKIT_API_KEY=devkey
   LIVEKIT_API_SECRET=devsecret_at_least_32_chars
   LIVEKIT_HOST=wss://livekit.your-domain.com
   LIVEKIT_API_HOST=https://livekit.your-domain.com
   ```

3. Configure LiveKit to call back into EduLab (`livekit.yaml`):
   ```yaml
   webhook:
     urls: ['https://app.your-domain.com/webhooks/liveclass/driver']
     api_key: devkey
   ```

4. Enable recordings (optional):
   ```env
   LIVECLASS_RECORDING_ENABLED=true
   LIVECLASS_RECORDING_AUTO_START=true
   LIVECLASS_RECORDING_DISK=s3   # or: local, public
   ```

### Option C — External Providers (Zoom / Google Meet / Teams)

See the [Configuration page](configuration) for credential setup. External providers are **optional** and can be combined with native mode — instructors choose delivery method per session.

---

## Step 05 — Enable the Scheduler (Recommended)

LiveClass uses a scheduler command (`liveclass:tick`) to auto-start/end sessions and send reminders. Add it to your EduLab scheduler:

```php
// In your app/Console/Kernel.php or a module kernel
$schedule->command('liveclass:tick')->everyMinute();
```

Or via cron directly:

```bash
* * * * * php /path/to/artisan liveclass:tick >> /dev/null 2>&1
```

> Without the scheduler, sessions must be manually started/ended by the host. Reminders will not be sent.

---

## Step 06 — Clear Caches

```bash
php artisan optimize:clear
```

After the cache is cleared, **Live Classes** menu items appear in the admin, instructor, and student sidebars.

<!-- ![Admin Sidebar LiveClass](/assets/lms/images/module/liveclass/admin-sidebar.png) -->

---

## Verify Installation

| Check | Expected |
|-------|---------|
| `php artisan module:list` | LiveClass shows as **Enabled** |
| `public/modules/liveclass/.vite/manifest.json` | File exists |
| Instructor sidebar | **Live Classes** section visible |
| Admin sidebar | **Live Classes** section with Settings |
