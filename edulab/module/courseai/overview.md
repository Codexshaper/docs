# CourseAI Module Overview

CourseAI is a premium add-on module for EduLab LMS that brings AI-powered tools directly into your course creation workflow. Admins, instructors, and organizations can generate full course structures, lesson content, quizzes, assignments, and SEO copy in seconds — using OpenAI, Google Gemini, or Anthropic Claude.

---

## What It Does

When the CourseAI module is installed and active, your EduLab LMS gains:

- A **Create Course with AI** wizard — describe a topic and let AI build a complete course with chapters, topics, requirements, outcomes, and FAQs
- A **Text to Course** converter — paste any text (notes, transcripts, articles) and AI structures it into a course outline
- A **Course AI Panel** embedded in every course edit page with 6 tools: outline generation, curriculum optimization, prerequisite suggestions, quality scoring, instructor Q&A assistant, and SEO optimization
- **Content generation** for individual lessons, quizzes, and assignments
- A **Student Learning Path Builder** — students describe a goal and receive a personalized step-by-step learning plan
- An **Admin Usage Report** with full audit logs of every AI action across the platform
- Support for **three AI providers**: OpenAI, Google Gemini, and Anthropic Claude — switch without changing any code
- **14 independently toggleable feature flags** so you can enable only the tools you want

---

## Requirements

- EduLab LMS fully installed and working
- PHP **8.2+**
- An API key from at least one supported AI provider:
  - **OpenAI** — [platform.openai.com](https://platform.openai.com)
  - **Google Gemini** — [aistudio.google.com](https://aistudio.google.com)
  - **Anthropic Claude** — [console.anthropic.com](https://console.anthropic.com)
- (Recommended) A queue worker running for background AI generation jobs
