## Notifications

EduLab LMS delivers in-app notifications to all user types (Admin, Instructor, Organization, Student). Notifications appear in the top-right bell icon of each portal.

---

## Notification Events

| Event | Admin | Instructor | Organization | Student |
|---|---|---|---|---|
| New enrollment | ✅ | ✅ | ✅ | — |
| New support ticket | ✅ | ✅ | — | — |
| Ticket reply | ✅ | ✅ | — | ✅ |
| Payment received | ✅ | — | — | — |
| Instructor registration | ✅ | — | — | — |
| Student registration | ✅ | — | — | — |
| Course published | ✅ | — | — | — |
| Certificate issued | — | — | — | ✅ |

---

## Email Notifications

Each in-app notification has a corresponding email notification. Email delivery requires a configured SMTP driver — see [Email Template](./email-template) for setup instructions.

To disable email notifications for a specific event while keeping in-app notifications active, set the email template body to empty in **Admin → Email Template**.

---

## Notice Board

The **Notice Board** is a broadcast announcement feature separate from individual notifications.

Go to **Admin → Notice Board** to create notices visible to all users on their portal dashboards.

Instructors and Organizations can also post notices visible only to their enrolled students.
