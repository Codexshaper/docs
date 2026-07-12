# Configuration & Troubleshooting

## AI Provider Environment Variables

Set these in your `.env` file to configure the AI provider and models:

```env
# Which provider to use: openai | gemini | claude
COURSEAI_AI_PROVIDER=openai

# OpenAI
OPENAI_API_KEY=sk-...
OPENAI_MODEL=gpt-4o-mini
OPENAI_MAX_TOKENS=2048

# Google Gemini
GEMINI_API_KEY=AI...
GEMINI_MODEL=gemini-2.0-flash

# Anthropic Claude
CLAUDE_API_KEY=sk-ant-...
CLAUDE_MODEL=claude-sonnet-4-5
CLAUDE_MAX_TOKENS=2048
```

> **Priority:** Settings saved in **Admin → Settings → AI Provider** override environment variables. Use the admin UI for live changes; use `.env` for infrastructure/CI environments.

---

## Feature Flags

Each feature can be independently disabled by adding variables to your `.env` file. All features default to **enabled**.

| Feature | Env Variable |
|---------|-------------|
| Quiz Generation | `COURSEAI_FEAT_QUIZ` |
| Content Summary | `COURSEAI_FEAT_SUMMARY` |
| Recommendations | `COURSEAI_FEAT_RECOMMENDATIONS` |
| Learning Path | `COURSEAI_FEAT_LEARNING_PATH` |
| Outline Generation | `COURSEAI_FEAT_OUTLINE` |
| Lesson Generation | `COURSEAI_FEAT_LESSON` |
| Curriculum Optimization | `COURSEAI_FEAT_CURRICULUM` |
| Prerequisite Suggestions | `COURSEAI_FEAT_PREREQUISITES` |
| Quiz per Topic | `COURSEAI_FEAT_QUIZ_TOPIC` |
| Assignment Generation | `COURSEAI_FEAT_ASSIGNMENT` |
| Quality Insights | `COURSEAI_FEAT_QUALITY` |
| Instructor Assistant | `COURSEAI_FEAT_ASSISTANT` |
| Text to Course | `COURSEAI_FEAT_TEXT_TO_COURSE` |
| SEO Optimize | `COURSEAI_FEAT_SEO_OPTIMIZE` |

To disable a feature, set its variable to `false` in `.env`, then run `php artisan config:clear`.

---

## Queue Configuration

```env
# Queue connection (sync | database | redis — default: sync)
COURSEAI_QUEUE_CONNECTION=sync

# Queue name (default: courseai-ai)
COURSEAI_QUEUE_NAME=courseai-ai
```

With a queue worker:

```bash
php artisan queue:work --queue=courseai-ai
```

---

## Draft Expiry

```env
COURSEAI_DRAFT_EXPIRE_DAYS=30
```

Drafts that have not been applied expire automatically after this many days.

---

## Troubleshooting

**AI generation fails immediately**  
Check that your API key is saved correctly under **Settings → AI Provider** and that it has sufficient credits or quota.

**Generation takes very long or times out**  
Enable a queue worker (see your Installation page). Without one, AI calls run inline and may exceed your server's PHP execution time limit.

**The AI Tools menu does not appear in the sidebar**  
Make sure the CourseAI module is enabled in **Module Manager**. After enabling, run `php artisan view:clear`.

**A draft shows as `failed`**  
Check the AI Usage Report for details. The most common causes are an invalid API key, an empty course title or description, or the AI provider being temporarily unavailable. Fix the underlying issue and retry the generation.
