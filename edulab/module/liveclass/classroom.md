# Live Classroom

The live classroom is a fully in-browser experience — no plugins or downloads required. It runs on native WebRTC (peer-to-peer) for small sessions, or LiveKit SFU for larger classes when the premium driver is enabled.

---

## Joining the Classroom

Students and co-hosts click **Join** from the session list within the pre-join window. The host clicks **Host** from their session detail page.

The classroom is available at `/student/live-classes/{id}/room` (students) and `/instructor/live-classes/{id}/host` (host).

> The join window opens **10 minutes before** the scheduled start and closes **15 minutes after** the scheduled end. Both values are configurable — see [Configuration](configuration).

---

## Room Layout

The classroom page contains:

| Area | Description |
|------|-------------|
| **Video grid** | All participants' video tiles; host tile is pinned |
| **Toolbar** | Mic, camera, screen share, reactions, raise hand |
| **Chat panel** | Persistent chat; messages are stored in the DB |
| **Q&A panel** | Students submit questions; host answers; others upvote |
| **Polls panel** | Host creates polls; participants vote; results shown live |
| **Breakout rooms** | Host assigns participants to sub-rooms (Premium LiveKit only) |
| **Participants list** | Shows who is in the room with their role |

---

## Chat

All participants can send messages during the session. Messages are stored in the `live_session_messages` table and visible after the session ends (for the instructor).

---

## Q&A

Students submit questions via the Q&A panel. Other participants can **upvote** questions to surface the most popular ones. The host can **Answer** a question to mark it as resolved and post the answer text.

Q&A questions are stored in `live_session_questions` and are used in the post-session AI summary (when CourseAI is enabled).

---

## Polls

The **host** creates polls during the session:

1. Open the Polls panel and click **New Poll**
2. Enter a question and up to 4 options
3. Click **Launch** — all participants see the poll immediately
4. Results appear live as participants vote
5. Click **End Poll** to close voting and show final results

Poll data is stored in `live_session_polls` and `live_session_poll_votes`.

---

## Screen Sharing

Screen sharing follows the same host-approval model as Zoom/Meet/Teams:

- **Host and co-hosts** can always share — their button reads **Share screen**.
- **Everyone else** sees **Ask for Share**. Clicking it sends a request to the host and the button changes to **Requested for Sharing** (disabled) until the host responds — it will not prompt again on a page reload or a leave/rejoin.
- The host sees a highlighted **Allow share** button next to any participant with a pending request, in the Participants panel. Clicking it grants (or **Revoke share** removes) the permission immediately, live, for that participant.
- Only **one** screen share is active at a time — if a second person starts sharing, the previous sharer's stream is stopped automatically.
- Screen sharing overall is gated by the `screen_share_enabled` session setting and the `LIVECLASS_FEAT_SCREEN_SHARE` feature flag; the per-participant grant described above is a separate, additional layer on top of that.

The Participants panel also prefixes each name with their role — **[Host]**, **[Co-host]**, or **[Student]** — so it's clear at a glance who can moderate.

---

## Reactions & Raise Hand

Participants can send quick emoji reactions (applause, thumbs up, etc.) visible to all. The **Raise Hand** button alerts the host that a participant wants to speak. Both are cosmetic UI interactions — no backend storage.

---

## Whiteboard

A shared whiteboard canvas is available in the room. All participants can draw; drawings are visible to everyone in real time. No server-side persistence — whiteboard state is lost when the room closes.

---

## Breakout Rooms *(Premium LiveKit only)*

The host can split participants into smaller groups:

1. Open **Breakout Rooms** from the host controls panel
2. Click **Create Breakouts** and assign participants to rooms
3. Participants are moved to their sub-room automatically
4. The host can visit any breakout room
5. Click **End Breakouts** to bring everyone back to the main room

---

## Host Controls

The session host (and co-hosts) have additional controls:

| Action | Description |
|--------|-------------|
| **Kick participant** | Removes a participant from the room immediately *(Premium LiveKit only — see note below)* |
| **Transfer host** | Assigns the host role to another participant |
| **End Session** | Closes the room and triggers attendance finalization |

> **Note:** On the base WebRTC driver, "Kick" is not yet wired to a working removal mechanism — the participant is not disconnected and can rejoin. Use the Premium LiveKit driver if you need reliable participant removal.

---

## Attendance Tracking

Join and leave timestamps are recorded per participant in `live_session_attendance`. Attendance duration is calculated when the session ends.

If a student's attendance duration meets or exceeds the configured threshold (default **70%** of session length), the system:

1. Fires `lms.topic.completed` for the linked topic — updates LMS progress
2. Fires `lms.badge.evaluate` — evaluates any badge criteria

---

## Server Recording *(Premium LiveKit only)*

When `LIVECLASS_RECORDING_ENABLED=true` and the LiveKit Egress service is running:

- Recording starts automatically when the host opens the room (if `LIVECLASS_RECORDING_AUTO_START=true`)
- The recording is stored on the configured disk (`LIVECLASS_RECORDING_DISK`) in the format set by `LIVECLASS_RECORDING_FORMAT` (default `mp4`)
- When the recording finishes, if `LIVECLASS_RECORDING_PUBLISH_TOPIC=true`, a new **Live Class** topic is added to the parent course so students can replay it through the standard course curriculum

> Recording requires your LiveKit server to have the [Egress service](https://docs.livekit.io/egress/) deployed.

---

## External Meetings (Zoom / Meet / Teams)

When a session is scheduled with an external delivery method:

- The meeting is **automatically created** via the provider's API at schedule time — no manual link copy-paste
- Students click **Join** in EduLab and are redirected to the provider
- Host controls (chat, Q&A, polls) remain available in the EduLab portal alongside the provider's meeting

If `LIVECLASS_EXTERNAL_EMBED=true`, the external meeting is shown in an embedded panel inside EduLab (with a fallback open-in-tab button if the provider blocks embedding).
