# Scheduling & Managing Sessions

---

## Instructor Workflow

### Schedule a New Session

Navigate to **Live Classes → Schedule Session** (or go to `/instructor/live-classes/create`).

<!-- ![Schedule Session Form](/assets/lms/images/module/liveclass/schedule-form.png) -->

| Field | Description |
|-------|-------------|
| **Title** | Session name shown to students |
| **Description** | Optional overview; use **Suggest with AI** if CourseAI is enabled |
| **Starts At / Ends At** | Date and time in the instructor's timezone |
| **Delivery Method** | **Native** (built-in classroom) or an external provider (Zoom, Meet, Teams) |
| **Course** | Optional — link the session to a course for enrollment gating and topic completion |
| **Topic** | Optional — link to a specific topic to auto-complete it when attendance threshold is met |
| **Co-Hosts** | Additional instructors who can manage the room |
| **Max Participants** | Overrides the global default; base WebRTC caps at 10 |
| **Recording Enabled** | Only effective with Premium LiveKit |
| **Chat / Screen Share** | Enable or disable per session |
| **Require Enrollment** | When enabled, only students enrolled in the linked course can join |
| **Sync Course Enrollments** | Pre-populate participants from enrolled students at scheduling time |

Click **Schedule** to create the session. The session enters **Scheduled** status.

---

### View a Session

Go to **Live Classes → My Sessions** and click any session to open its detail page.

<!-- ![Session Detail](/assets/lms/images/module/liveclass/session-show.png) -->

The detail page shows:

- Session status (`scheduled`, `live`, `ended`, `cancelled`)
- Participant list with roles (Host, Co-Host, Attendee)
- Attendance records (join time, leave time, duration)
- Links to host the room or edit the session

---

### Host a Session

On the session detail page (or from the sessions list), click **Host**. This:

1. Transitions the session status to **Live** (or re-joins if already live)
2. Opens the in-browser classroom (native) or the external meeting host link
3. For Premium LiveKit: starts server recording automatically if `LIVECLASS_RECORDING_AUTO_START=true`

The host can also click **End Session** from the sessions list or detail page to close the room and finalize attendance.

---

### Edit / Delete a Session

- **Edit** — available while the session is `scheduled`. Navigate to the session detail and click **Edit**.
- **Delete** — removes the session and all associated records. Available in any non-live status.

> **Warning:** Deleting a session also removes all attendance, chat, and recording records for that session. This action cannot be undone.

---

### AI Assistance *(requires CourseAI module)*

When the CourseAI module is enabled and configured, the session form shows two AI helpers:

| Button | What it does |
|--------|-------------|
| **Suggest description** | Auto-generates a 2–3 sentence description from the session title and optional course context |
| **Suggest poll questions** | Generates question ideas based on the session title and description — paste them into your polls before going live |

After the session ends, instructors can trigger a **Post-session summary** from the session detail page, which uses Q&A and chat history to produce a bullet-point instructor summary.

---

## Admin Workflow

### View All Sessions

Navigate to **Admin → Live Classes** (`/admin/live-classes`).

Admins can see all sessions across all instructors, filter by status, and delete any session.

### Create a Session (Admin)

Admins can schedule sessions the same way instructors do from `/admin/live-classes/create`.

---

## Student Workflow

### Browse Upcoming Sessions

Navigate to **Live Classes** in the student sidebar (`/student/live-classes`).

The list shows all upcoming sessions the student is eligible to join (enrolled in the linked course, or public sessions). Each row shows title, instructor, start time, and a **Join** button.

### Join a Session

The **Join** button appears within the pre-join window (default: **10 minutes before start** through **15 minutes after scheduled end**).

- **Native sessions** — clicking Join opens the in-browser classroom at `/student/live-classes/{id}/room`
- **External sessions** — clicking Join redirects to the external meeting link (Zoom / Meet / Teams). No pasting links manually.

### Topic Completion

When a student attends at least **70%** of a session's duration (configurable via `LIVECLASS_MIN_ATTENDANCE`), the linked LMS topic is automatically marked as complete. Badges and course progress update accordingly.

---

## Session Status Lifecycle

```
scheduled → live → ended
                 ↘ cancelled
```

| Status | Meaning |
|--------|---------|
| `scheduled` | Created, not yet started |
| `live` | Host has opened the room |
| `ended` | Session closed; attendance finalized |
| `cancelled` | Deleted or cancelled before starting |
