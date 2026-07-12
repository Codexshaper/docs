# REST API Reference

The CourseAI module exposes two API surfaces, both prefixed with `/api/v1/`:

1. **Sanctum-authenticated (`/api/v1/ai-course/*`)** — for same-origin apps that already have a Laravel Sanctum session/token for a logged-in EduLab user.
2. **External API key (`/api/v1/external/ai-course/*`)** — for third-party integrations, mobile apps, or scripts that don't have an EduLab user session. See [External API Key Access](#external-api-key-access) below.

## Authentication (Sanctum)

```http
Authorization: Bearer <sanctum-token>
```

> **Current limitation:** out of the box, neither the `Admin` nor `User` model has Sanctum's `HasApiTokens` trait, so no personal access tokens can be issued yet — the `auth:sanctum` routes below only work for same-origin requests using Sanctum's cookie-based SPA authentication, not bearer tokens. To enable bearer-token access for external clients, add `use Laravel\Sanctum\HasApiTokens;` to the relevant user model and issue a token with `$user->createToken('name')->plainTextToken`. If you don't need bearer-token access, use the **External API Key** surface below instead — it works today without any code changes.

All Sanctum-authenticated routes also require the user to hold the appropriate CourseAI permissions.

---

## External API Key Access

For integrations that shouldn't (or can't) authenticate as a specific EduLab user, CourseAI also exposes a smaller endpoint set gated by an **LMS API key** instead of Sanctum:

```http
GET  /api/v1/external/ai-course/generate-quiz     (POST)
POST /api/v1/external/ai-course/summarize
GET  /api/v1/external/ai-course/recommendations
POST /api/v1/external/ai-course/learning-path
GET  /api/v1/external/ai-course/capabilities
```

Authenticate with either header or query param:

```http
Authorization: Bearer <api-key>
```
```http
GET /api/v1/external/ai-course/capabilities?api_key=<api-key>
```

Manage keys at **Admin → API Keys** (`admin/api-keys`). Each key has its own rate limit and an optional credits budget; responses include `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-Credits-Used`, and `X-Credits-Limit` headers. This surface only covers the four endpoints above — the draft-based generators (outline, lesson, curriculum, quiz-for-topic, etc.) require a full user session and are not available via API key.

---

## Rate Limiting

All API endpoints are rate-limited to **60 requests per minute** per token.

---

## Core Features

### Generate Quiz Questions

```http
POST /api/v1/ai-course/generate-quiz
```

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `content` | string | ✅ | The text content to generate questions from (max 10,000 chars) |
| `count` | integer | — | Number of questions (1–20, default 5) |

**Response:**
```json
{
  "questions": [
    {
      "question": "What is...",
      "options": ["A", "B", "C", "D"],
      "correct_index": 2,
      "explanation": "Because..."
    }
  ]
}
```

---

### Summarize Content

```http
POST /api/v1/ai-course/summarize
```

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `content` | string | ✅ | Text to summarize (max 10,000 chars) |
| `max_words` | integer | — | Target word count (50–500, default 150) |

**Response:**
```json
{ "summary": "A concise summary..." }
```

---

### Get Course Recommendations

```http
GET /api/v1/ai-course/recommendations
```

Returns personalized topic/category recommendations based on the authenticated user's completed courses.

**Response:**
```json
{
  "recommendations": [
    { "title": "Advanced React.js", "reason": "You completed..." }
  ]
}
```

---

### Get Learning Path

```http
POST /api/v1/ai-course/learning-path
```

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `goal` | string | ✅ | The user's learning goal (max 500 chars) |

**Response:**
```json
{
  "learning_path": [
    { "step": 1, "title": "HTML Basics", "description": "...", "estimated_hours": 4 }
  ]
}
```

---

## Advanced Features (Async — Draft-Based)

The following endpoints dispatch background jobs and return **HTTP 202** immediately. Poll the `poll_url` to check when the draft is ready. `poll_url` always matches the surface you called from — `/api/v1/ai-course/draft/{id}/status` when called via the Sanctum API, or `/ai-course/draft/{id}/status` when called from the web UI.

### Common Response (HTTP 202)

```json
{
  "draft_id": 42,
  "status": "pending",
  "poll_url": "/api/v1/ai-course/draft/42/status"
}
```

### Common Polling Response

```http
GET /api/v1/ai-course/draft/{draft_id}/status
```

```json
{
  "id": 42,
  "status": "ready",
  "output": { ... }
}
```

Status values: `pending` → `processing` → `ready` / `failed`

---

### Generate Course Outline

```http
POST /api/v1/ai-course/generate/outline
```

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `course_id` | integer | ✅ | ID of the course |
| `title` | string | — | Override the course title for the AI |
| `description` | string | — | Override the course description |
| `chapter_count` | integer | — | Number of chapters (1–20, default from course) |

**Draft output:**
```json
{
  "chapters": [
    { "title": "Introduction", "topics": ["What is...", "Why..."] }
  ]
}
```

---

### Generate Lesson Content

```http
POST /api/v1/ai-course/generate/lesson
```

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `course_id` | integer | ✅ | ID of the course |
| `chapter_title` | string | ✅ | Title of the chapter |
| `topic_title` | string | ✅ | Title of the topic |
| `topic_id` | integer | — | Optional: scope the draft to a specific topic |

**Draft output:**
```json
{
  "content": "<p>HTML lesson content...</p>",
  "key_points": ["Point 1", "Point 2"],
  "activities": ["Activity 1"]
}
```

---

### Optimize Curriculum

```http
POST /api/v1/ai-course/generate/curriculum
```

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `course_id` | integer | ✅ | ID of the course |
| `chapters` | array | — | Override with `[{ id, title, order }]`; defaults to course chapters |

**Draft output:**
```json
{
  "optimized_order": [
    { "id": 5, "title": "Introduction", "reason": "Should come first because..." }
  ]
}
```

---

### Suggest Prerequisites

```http
POST /api/v1/ai-course/generate/prerequisites
```

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `course_id` | integer | ✅ | ID of the course |

**Draft output:**
```json
{
  "prerequisites": [
    { "title": "Basic HTML", "reason": "Students need to understand..." }
  ]
}
```

---

### Generate Quiz for Topic

```http
POST /api/v1/ai-course/generate/quiz-topic
```

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `course_id` | integer | ✅ | ID of the course |
| `topic_content` | string | ✅ | Text content of the topic (max 10,000 chars) |
| `count` | integer | — | Number of questions (1–20, default 5) |
| `chapter_id` | integer | — | Optional: scope to a chapter |
| `topic_id` | integer | — | Optional: scope to a topic |

**Draft output:** Same shape as `/generate-quiz` — an array of question objects.

---

### Generate Assignment

```http
POST /api/v1/ai-course/generate/assignment
```

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `course_id` | integer | ✅ | ID of the course |
| `topic_title` | string | ✅ | Topic the assignment covers |
| `topic_content` | string | ✅ | Topic content for context |

**Draft output:**
```json
{
  "title": "Build a REST API",
  "instructions": "Create a...",
  "rubric": ["Correct endpoints", "Proper error handling"],
  "estimated_hours": 3.5
}
```

---

### Analyze Course Quality

```http
POST /api/v1/ai-course/generate/quality
```

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `course_id` | integer | ✅ | ID of the course |

**Draft output:**
```json
{
  "score": 78,
  "strengths": ["Clear learning outcomes", "Logical chapter flow"],
  "improvements": ["Add more practical exercises"],
  "suggestions": ["Consider splitting Chapter 3 into two parts"]
}
```

---

### Instructor Assistant

```http
POST /api/v1/ai-course/generate/assistant
```

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `course_id` | integer | ✅ | ID of the course |
| `question` | string | ✅ | Free-form question about the course (max 2,000 chars) |

**Synchronous response (not draft-based):**
```json
{ "answer": "To improve engagement, you could..." }
```

---

### Text to Course

```http
POST /api/v1/ai-course/generate/text-to-course
```

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `raw_text` | string | ✅ | Source text to convert (100–30,000 chars) |
| `language` | string | — | Target language (default: `English`) |

**Draft output:**
```json
{
  "title": "Introduction to Machine Learning",
  "description": "A course about...",
  "chapters": [
    { "title": "Chapter 1", "topics": ["Topic A", "Topic B"] }
  ]
}
```

---

### Create Full Course

```http
POST /api/v1/ai-course/generate/create-course
```

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `topic` | string | ✅ | Course topic/idea (5–300 chars) |
| `audience` | string | — | Target audience |
| `level` | string | — | `beginner`, `intermediate`, or `advanced` |
| `language` | string | — | Course language (default: `English`) |
| `chapter_count` | integer | — | Number of chapters (1–15, default 5) |
| `topics_per_chapter` | integer | — | Topics per chapter (1–10, default 4) |
| `category_id` | integer | — | Category to assign |
| `instructor_ids` | array | — | User IDs of instructors to attach |
| `price_type` | string | — | `free` or `paid` |
| `extra_notes` | string | — | Additional context for the AI |

**Synchronous response** — creates the course in the DB and returns:
```json
{
  "course_id": 101,
  "course_title": "Complete Python Bootcamp",
  "redirect_url": "/admin/course/101/edit"
}
```

---

### SEO Optimize

```http
POST /api/v1/ai-course/generate/seo-optimize
```

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `course_id` | integer | ✅ | ID of the course |
| `target_keywords` | string | — | Comma-separated keywords to target (max 300 chars) |

**Draft output:**
```json
{
  "optimized_title": "Master Python Programming...",
  "optimized_description": "Learn Python from scratch...",
  "meta_description": "A 60-char SEO meta description...",
  "keywords": ["python", "programming", "beginners"],
  "seo_tips": ["Add a course promo video", "Use the keyword in the first paragraph"]
}
```

---

## Draft Management

### Get Capabilities

```http
GET /api/v1/ai-course/capabilities
```

Returns the full capability map for the current user — which features are enabled, configured, and accessible.

```json
{
  "module_active": true,
  "configured": true,
  "features": {
    "quiz_generation": { "can": true, "feature_enabled": true, "configured": true },
    "outline_generation": { "can": true, "feature_enabled": true, "configured": true }
  }
}
```

---

### List Drafts

```http
GET /api/v1/ai-course/drafts?course_id={id}
```

Returns all non-dismissed, non-expired drafts for the given course belonging to the authenticated user.

---

### Get Draft Status

```http
GET /api/v1/ai-course/draft/{draft_id}/status
```

```json
{
  "id": 42,
  "status": "ready",
  "output": { ... }
}
```

---

### Apply Draft

```http
POST /api/v1/ai-course/draft/{draft_id}/apply
```

Writes the draft output back to the course. The exact effect depends on the feature:

| Feature | Effect |
|---------|--------|
| `outline_generation` | Replaces all chapters and topics with the AI-generated outline |
| `curriculum_optimization` | Reorders existing chapters |
| `prerequisite_suggestions` | Syncs AI-suggested prerequisites to the course requirements |
| `seo_optimize` | Updates the course title and description |
| `lesson_generation` | Writes AI content to the topic's reading content |
| `quality_insights`, `quiz_per_topic`, `assignment_generation` | View-only — no DB write |

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `edited_output` | object | — | If provided, saves the edited version before applying |

```json
{ "status": "applied", "reload": true }
```

---

### Dismiss Draft

```http
POST /api/v1/ai-course/draft/{draft_id}/dismiss
```

Marks the draft as dismissed. It will no longer appear in the draft history.

```json
{ "status": "dismissed" }
```
