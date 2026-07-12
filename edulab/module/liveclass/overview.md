# LiveClass Module Overview

LiveClass is a premium add-on for EduLab LMS that brings real-time virtual classrooms directly into your platform — with no mandatory Zoom subscription, no per-minute SaaS fees, and no pasted meeting links. Everything from scheduling to attendance happens inside EduLab.

---

## What It Does

When the LiveClass module is installed and active, your EduLab LMS gains:

- **Native live classrooms** — browser-based video/audio powered by WebRTC (peer-to-peer, no server required) or a self-hosted LiveKit SFU (for larger classes, recording, and breakout rooms)
- **External meeting providers** — optionally connect Zoom, Google Meet, or Microsoft Teams so instructors can create and share meetings from inside EduLab without manual copy-pasting
- **Scheduling & management** — instructors schedule sessions linked to a course/topic; admins see all sessions platform-wide
- **In-room collaboration tools** — live chat, Q&A, polls, reactions, raise hand, screen sharing, whiteboard, and breakout rooms
- **Automatic attendance tracking** — participation time is recorded; when the threshold is met, the linked LMS topic is marked complete
- **Server recording** — native sessions (Premium LiveKit only) are recorded automatically and optionally published as a replay topic in the course
- **AI assistance** *(requires CourseAI module)* — auto-generate session descriptions, suggest poll questions, and summarize post-session Q&A and chat

---

## Delivery Modes

| Mode | What it needs | Max participants | Recording |
|------|---------------|-----------------|-----------|
| **Native WebRTC** (default) | Nothing — works out of the box | 10 (configurable) | No — client only |
| **Native LiveKit** (premium) | Self-hosted LiveKit server | 100+ | Yes — server-side composite |
| **Zoom** | Zoom Server-to-Server OAuth app | Provider limit | In Zoom app |
| **Google Meet** | Google Calendar API credentials | Provider limit | In Google account |
| **Microsoft Teams** | Azure app + Graph API | Provider limit | In Teams |

> **No Zoom required.** Native mode is the default and works without any third-party accounts.

---

## Feature Summary

| Feature | Base WebRTC | Premium LiveKit | External (Zoom / Meet / Teams) |
|---------|:-----------:|:---------------:|:-------------------------------|
| Live video & audio | ✅ P2P | ✅ SFU | Via provider |
| Screen sharing | ✅ | ✅ | Via provider |
| Chat | ✅ | ✅ | LMS portal only |
| Q&A | ✅ | ✅ | LMS portal only |
| Polls | ✅ | ✅ | LMS portal only |
| Reactions / raise hand | ✅ | ✅ | LMS portal only |
| Whiteboard | ✅ | ✅ | — |
| Breakout rooms | — | ✅ | — |
| Server recording | — | ✅ | — |
| Attendance tracking | ✅ (API) | ✅ (webhooks) | Manual |
| Auto topic completion | ✅ | ✅ | — |
| Host controls (transfer) | ✅ | ✅ | — |
| Host controls (kick) | ⚠️ not yet functional | ✅ | — |

---

## Requirements

- EduLab LMS fully installed and working
- PHP **8.2+**
- Node.js **18+** (to build module front-end assets)
- **For Native LiveKit (optional):** a self-hosted [LiveKit](https://livekit.io) server — Docker image or binary, Apache 2.0, free
- **For external providers (optional):** API credentials from Zoom, Google, or Microsoft
- **For AI features (optional):** the [CourseAI module](../courseai/overview) installed and configured
