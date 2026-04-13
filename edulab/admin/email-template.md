## Email Templates

Go to **Admin → Email Template**

EduLab LMS ships with a built-in email template manager. You can customise the subject and body of every transactional email sent by the platform without touching any code.

---

## Available Templates

| Template Key | When It Is Sent |
|---|---|
| `enrollment_confirmation` | Student successfully purchases / enrolls in a course |
| `enrollment_manual` | Admin manually enrolls a student |
| `password_reset` | User requests a password reset link |
| `registration_welcome` | New user registration |
| `certificate_issued` | Certificate generated after course completion |
| `payment_success` | Successful payment confirmation |
| `payment_failed` | Payment gateway returns a failure |
| `support_ticket_created` | New support ticket submitted |
| `support_ticket_replied` | Reply added to a support ticket |
| `instructor_approved` | Instructor account approved by admin |

---

## Available Placeholders

Use `{placeholder}` syntax inside the subject or body:

| Placeholder | Value |
|---|---|
| `{student_name}` | Full name of the recipient student |
| `{instructor_name}` | Full name of the instructor |
| `{course_name}` | Course title |
| `{amount}` | Transaction amount with currency symbol |
| `{site_name}` | Value set in Backend Settings → General |
| `{site_url}` | Application root URL |
| `{login_url}` | Direct link to the login page |
| `{reset_url}` | Password reset link (for password reset template only) |
| `{certificate_url}` | Public certificate download URL |

---

## SMTP Configuration

Email delivery requires a working SMTP driver. Configure it under **Admin → Backend Settings → SMTP Setting**.

For Gmail, generate an **App Password** (not your regular password) at [https://myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords).

```
Mail Driver:     smtp
Mail Host:       smtp.gmail.com
Mail Port:       587
Mail Encryption: tls
Mail Username:   your-address@gmail.com
Mail Password:   your-app-password
```

For production sites, [Mailgun](https://mailgun.com), [Postmark](https://postmarkapp.com), or [Amazon SES](https://aws.amazon.com/ses/) are recommended for higher deliverability.
