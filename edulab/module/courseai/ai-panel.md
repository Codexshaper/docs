# Course AI Panel

The Course AI Panel is embedded directly in the course edit page. It is also accessible as a standalone page via the course actions menu.

<!-- ![Course AI Panel](/assets/lms/images/module/courseai/ai-panel.png) -->

## Available Tools

### Generate Outline

Generates a complete chapter and topic structure for the course based on its title and description. Clicking **Apply** replaces all existing chapters and topics with the AI-generated outline.

<!-- ![Generate Outline Result](/assets/lms/images/module/courseai/outline-result.png) -->

> **Warning:** Applying an outline permanently replaces your current chapter structure. This action cannot be undone.

### Optimize Curriculum

Analyzes your existing chapters and suggests a reordered sequence for better pedagogical flow. Click **Apply** to reorder your chapters accordingly.

### Suggest Prerequisites

Recommends prerequisite courses from your catalog that students should complete before enrolling. Click **Apply** to link them to the course.

### Quality Score

Rates your course on a scale of 1–10 across multiple dimensions: title clarity, description completeness, chapter structure, and content balance. This is view-only — no changes are applied to the course.

<!-- ![Quality Score Result](/assets/lms/images/module/courseai/quality-score.png) -->

### Instructor Assistant

Ask any question about your course and receive an AI response. Examples:

- "What topics am I missing for this level?"
- "How can I make this course more engaging?"
- "Is the course difficulty consistent?"

This tool is view-only.

### SEO Optimizer

Enter optional target keywords, then click **Optimize**. The AI rewrites the course title and description for better search engine visibility. Click **Apply** to update the course with the optimized copy.

<!-- ![SEO Optimizer Result](/assets/lms/images/module/courseai/seo-result.png) -->

---

## Content Generation

Below the main tools, the panel provides three content generation forms:

**Lesson Content** — select a chapter and topic, then click Generate. The AI writes detailed lesson content for that topic. Click **Apply** to save it as the topic's reading content.

**Quiz for Topic** — select a topic and specify how many questions. The AI generates quiz questions with options and correct answers. This is view-only — copy the questions to your Quiz editor manually.

**Assignment** — select a topic and click Generate. The AI produces an assignment brief with objectives and deliverables. This is view-only.

---

## Draft History

Every AI generation creates a draft that is stored and can be revisited. The **Draft History** section at the bottom of the panel lists all recent drafts for the course.

<!-- ![Draft History](/assets/lms/images/module/courseai/draft-history.png) -->

| Column | Description |
|--------|-------------|
| Feature | Which AI tool created the draft |
| Status | `pending`, `ready`, `applied`, or `failed` |
| Created | When the draft was generated |
| Actions | Apply or Dismiss |

Click **Apply** on any ready draft to write its output to the course. Click **Dismiss** to discard it.

> **Note:** Drafts expire after 30 days by default. Expired drafts cannot be applied.
