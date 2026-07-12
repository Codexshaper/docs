# REST API Reference

LiveClass exposes two types of API endpoints:

1. **In-room JSON API** — authenticated via session cookie + CSRF (web middleware). Used by the browser classroom.
2. **Sanctum API** — authenticated via bearer token (`Authorization: Bearer <token>`). For mobile apps and external integrations.

All endpoints require an authenticated user.

---

## Sanctum (Bearer Token) Endpoints

Base prefix: `/api/liveclass/` (registered by `RouteServiceProvider::mapApiRoutes()`).

### Issue a Room Access Token

```http
POST /api/liveclass/sessions/{session}/token
```

Returns a signed JWT access token for the given session (LiveKit) or the room identity (WebRTC). The client uses this token to connect to the live classroom.

```json
{
  "token": "eyJhbGci...",
  "ws_url": "wss://your-livekit-host",
  "room": "liveclass-session-42",
  "identity": "user-7",
  "expires_at": 1735689600
}
```

---

### Get Chat Messages

```http
GET /api/liveclass/sessions/{session}/messages
```

Returns the chat history for the session.

```json
[
  { "id": 1, "user_id": 7, "body": "Hello!", "created_at": "2026-06-01T10:05:00Z" }
]
```

---

### Send a Chat Message

```http
POST /api/liveclass/sessions/{session}/messages
```

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `body` | string | ✅ | Message text (max 2,000 chars) |

```json
{ "id": 42, "user_id": 7, "body": "Hello!", "created_at": "2026-06-01T10:05:12Z" }
```

---

### List Polls

```http
GET /api/liveclass/sessions/{session}/polls
```

Returns active polls for the session.

---

### Create a Poll

```http
POST /api/liveclass/sessions/{session}/polls
```

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `question` | string | ✅ | Poll question |
| `options` | array of strings | ✅ | Between 2 and 4 options |

Requires `manage` permission on the session (host or co-host).

---

### List Questions

```http
GET /api/liveclass/sessions/{session}/questions
```

Returns Q&A questions, ordered by upvote count descending.

---

### Ask a Question

```http
POST /api/liveclass/sessions/{session}/questions
```

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `body` | string | ✅ | Question text (max 2,000 chars) |

---

## In-Room JSON API (Session Cookie + CSRF)

These endpoints are used by the browser classroom and require session authentication (not bearer tokens). All are under the `/liveclass/sessions/{session}/` prefix.

### Get Room Access Token

```http
POST /liveclass/sessions/{session}/token
```

Issues the access token for the requesting user. Used at classroom load time.

---

### WebRTC Signaling

```http
GET  /liveclass/sessions/{session}/signals   # Poll for new signals
POST /liveclass/sessions/{session}/signals   # Send a signal
```

Used internally by the WebRTC driver for offer/answer/ICE exchange. Not needed when using the LiveKit driver (LiveKit uses its own SDK transport).

---

### Chat

```http
GET  /liveclass/sessions/{session}/messages        # List messages
POST /liveclass/sessions/{session}/messages        # Send a message
```

---

### Polls

```http
GET  /liveclass/sessions/{session}/polls             # List active polls
POST /liveclass/sessions/{session}/polls             # Create a poll (host only)
POST /liveclass/sessions/{session}/polls/{poll}/vote # Vote on a poll
GET  /liveclass/sessions/{session}/polls/{poll}/results # Get results
```

---

### Q&A

```http
GET  /liveclass/sessions/{session}/questions                      # List questions
POST /liveclass/sessions/{session}/questions                      # Ask a question
POST /liveclass/sessions/{session}/questions/{question}/upvote   # Upvote
POST /liveclass/sessions/{session}/questions/{question}/answer   # Answer (host only)
```

---

### Host Controls

```http
POST /liveclass/sessions/{session}/kick            # Kick a participant
POST /liveclass/sessions/{session}/transfer-host   # Transfer host role
```

Both require `manage` permission (host or co-host).

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `user_id` | integer | ✅ | Target participant's user ID |

---

### Screen-Share Permission

By default only the host and co-hosts can share their screen. Any other participant sees an **"Ask for Share"** button; the host grants or revokes access per participant, and the grant/pending-request state is persisted so it survives a leave/rejoin.

```http
GET  /liveclass/sessions/{session}/screen-share-state       # Current grant/pending state for all participants
POST /liveclass/sessions/{session}/screen-share-request     # Request permission (any joined participant)
POST /liveclass/sessions/{session}/screen-share-permission  # Grant/revoke (host or co-host only)
```

`GET screen-share-state` returns one row per participant:

```json
[
  { "user_id": 7, "allowed": false, "requested": true }
]
```

`POST screen-share-permission` requires:

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `user_id` | integer | ✅ | Target participant's user ID |
| `allowed` | boolean | ✅ | `true` to grant, `false` to revoke |

---

### Breakout Rooms *(Premium LiveKit only)*

```http
GET  /liveclass/sessions/{session}/breakouts              # List breakout rooms
POST /liveclass/sessions/{session}/breakouts              # Create breakouts (host only)
POST /liveclass/sessions/{session}/breakouts/{breakout}/join  # Join a breakout room
```

---

## AI Endpoints *(requires CourseAI module)*

These endpoints are available to instructors and require the CourseAI module to be enabled and configured.

### Suggest Session Description

```http
POST /instructor/live-classes/ai/suggest-description
```

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `title` | string | ✅ | Session title (max 255 chars) |
| `context` | string | — | Optional course context for better suggestions (max 2,000 chars) |

```json
{ "description": "In this session we will cover..." }
```

---

### Suggest Poll Questions

```http
POST /instructor/live-classes/ai/suggest-polls
```

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `title` | string | ✅ | Session title |
| `description` | string | — | Session description for context |
| `count` | integer | — | Number of questions to suggest (1–10, default 3) |

```json
{ "questions": ["What is...", "Which of the following...", "How would you..."] }
```

---

### Summarize Session (Post-session)

```http
POST /instructor/live-classes/ai/sessions/{session}/summarize
```

Uses the session's Q&A questions and recent chat messages to generate a bullet-point instructor summary. Returns `503` if CourseAI is not available.

```json
{ "summary": "Key points covered:\n- ...\n\nAction items:\n- ..." }
```

---

## Webhook (LiveKit Events)

LiveClass registers a webhook endpoint for the LiveKit server to call when room events occur. This is used for attendance finalization, recording completion, and topic publishing.

```http
POST /webhooks/liveclass/driver
```

This endpoint:
- Is outside the `web` middleware (no session, no CSRF)
- Verifies the LiveKit JWT signature in the `Authorization` header
- Rejects replays via `exp`/`iat` claim validation
- Should be added to your LiveKit server configuration (`livekit.yaml`)
