# Configuration & Troubleshooting

All LiveClass settings can be configured through `.env` variables. After changing any variable, run:

```bash
php artisan config:clear
```

---

## Driver

```env
# Which live-class engine to use: webrtc | livekit
LIVECLASS_DRIVER=webrtc
```

| Value | Description |
|-------|-------------|
| `webrtc` | Browser peer-to-peer via Laravel HTTP signaling. No server required. Default. |
| `livekit` | Self-hosted LiveKit SFU. Requires `LIVECLASS_PREMIUM_LIVEKIT=true` and LiveKit keys. |

---

## Premium LiveKit SFU

```env
# Set to true to enable the LiveKit driver
LIVECLASS_PREMIUM_LIVEKIT=false

LIVEKIT_API_KEY=
LIVEKIT_API_SECRET=
LIVEKIT_HOST=wss://livekit.your-domain.com
LIVEKIT_API_HOST=https://livekit.your-domain.com
LIVEKIT_WEBHOOK_API_KEY=   # defaults to LIVEKIT_API_KEY if blank
LIVEKIT_TOKEN_TTL=21600    # access token TTL in seconds (default 6 hours)
LIVEKIT_SIMULCAST=true     # enable simulcast for adaptive bitrate
```

---

## Base WebRTC Settings

```env
LIVECLASS_WEBRTC_MAX_PARTICIPANTS=10
LIVECLASS_STUN_URL=stun:stun.l.google.com:19302
LIVECLASS_SIGNALING_POLL_MS=1500
```

---

## Session Behaviour

```env
# How many minutes before scheduled start students can join
LIVECLASS_PRE_JOIN_MINUTES=10

# How many minutes after scheduled end the join button stays active
LIVECLASS_END_GRACE_MINUTES=15

# Default max participants (can be overridden per session)
LIVECLASS_MAX_PARTICIPANTS=100

# Minimum attendance percentage to count as completed (0–100)
LIVECLASS_MIN_ATTENDANCE=70
```

---

## Recording *(Premium LiveKit only)*

```env
LIVECLASS_RECORDING_ENABLED=true
LIVECLASS_RECORDING_AUTO_START=true
LIVECLASS_RECORDING_DISK=public        # storage disk (local, public, s3, etc.)
LIVECLASS_RECORDING_PREFIX=live-classes  # folder prefix inside the disk
LIVECLASS_RECORDING_FORMAT=mp4

# Automatically publish the recording as a replay topic in the linked course
LIVECLASS_RECORDING_PUBLISH_TOPIC=true
```

---

## External Providers

### Zoom (Server-to-Server OAuth)

Create a Server-to-Server OAuth app at [marketplace.zoom.us](https://marketplace.zoom.us).

```env
ZOOM_ACCOUNT_ID=
ZOOM_CLIENT_ID=
ZOOM_CLIENT_SECRET=
```

### Google Meet (Calendar API)

Create a Google Cloud project with the Calendar API enabled. Generate OAuth credentials and a refresh token.

```env
GOOGLE_MEET_CLIENT_ID=
GOOGLE_MEET_CLIENT_SECRET=
GOOGLE_MEET_REFRESH_TOKEN=
GOOGLE_MEET_CALENDAR_ID=primary
```

### Microsoft Teams (Graph API)

Register an app in [Azure Active Directory](https://portal.azure.com) with `OnlineMeetings.ReadWrite` permission.

```env
TEAMS_TENANT_ID=
TEAMS_CLIENT_ID=
TEAMS_CLIENT_SECRET=
TEAMS_ORGANIZER_USER_ID=   # the Microsoft user ID who owns the meetings
```

### Global External Settings

```env
# Set to false to hide all external provider options in the scheduling form
LIVECLASS_EXTERNAL_ENABLED=true

# When true, external meetings open in an embedded panel inside EduLab
LIVECLASS_EXTERNAL_EMBED=true
```

---

## Feature Flags

Each feature can be independently disabled. All features default to **enabled**.

| Feature | Env Variable |
|---------|-------------|
| Screen sharing | `LIVECLASS_FEAT_SCREEN_SHARE` |
| Chat | `LIVECLASS_FEAT_CHAT` |
| Reactions (emoji) | `LIVECLASS_FEAT_REACTIONS` |
| Raise hand | `LIVECLASS_FEAT_RAISE_HAND` |
| Moderation (kick/mute) | `LIVECLASS_FEAT_MODERATION` |
| Attendance tracking | `LIVECLASS_FEAT_ATTENDANCE` |
| Session reminders | `LIVECLASS_FEAT_REMINDERS` |
| Q&A and Polls | `LIVECLASS_FEAT_QA_POLLS` |
| Whiteboard | `LIVECLASS_FEAT_WHITEBOARD` |
| Breakout rooms | `LIVECLASS_FEAT_BREAKOUT` |

To disable a feature, set its variable to `false` in `.env`, then run `php artisan config:clear`.

---

## Troubleshooting

**`View [layouts.master] not found`**
Run `php artisan view:clear`. LiveClass uses the EduLab `<x-dashboard-layout>` component which requires the LMS view cache to be warm.

**The Live Classes menu does not appear in the sidebar**
Confirm LiveClass is enabled in Module Manager. After enabling, run `php artisan optimize:clear` and hard-refresh the browser.

**Classroom page is blank**
Check that `public/modules/liveclass/.vite/manifest.json` exists. If not, run `npm install && npm run build` from `Modules/LiveClass/`.

**403 on classroom or session pages**
Make sure the user is logged in with the correct guard. Students use the `web` guard; instructors use the `admin` guard. Check that the session's `require_enrollment` setting matches your intent.

**External meeting fails to create at schedule time**
Go to **Admin → Live Classes → Settings**. The settings page shows each provider's configured/ready status. Verify your `.env` credentials and that the provider API app has the correct permissions.

**Recording does not start**
Server recording requires: `LIVECLASS_PREMIUM_LIVEKIT=true`, the LiveKit Egress service running, and `LIVECLASS_RECORDING_ENABLED=true`. The base WebRTC driver does not support server recording.

**Large classes are unstable on WebRTC**
WebRTC peer-to-peer does not scale past ~10 participants. Enable Premium LiveKit for stable large sessions.

**Attendance not completing the LMS topic**
Confirm the session has a `topic_id` set. Confirm `LIVECLASS_FEAT_ATTENDANCE=true` and `LIVECLASS_MIN_ATTENDANCE` is set appropriately. For LiveKit sessions, webhooks must be configured so EduLab receives the `participant_left` event.
