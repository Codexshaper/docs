# Landing Site

The Tenanta module includes a complete public-facing landing site served from your root domain. It is built with Tailwind CSS v4 and is fully responsive.

---

## Pages

| URL | Description |
|-----|-------------|
| `/` | Home page — hero, features, how-it-works, testimonials, FAQ, CTA |
| `/pricing` | Pricing page with monthly/annual toggle and plan cards |
| `/pricing/{slug}` | Individual plan detail page |
| `/about` | About page |
| `/contact` | Contact page with form |
| `/blog` | Blog listing (ready for future posts) |
| `/blog/{slug}` | Individual blog post (coming soon placeholder) |

---

## Home Page Sections

The home page is assembled from Blade components. Each section can be customised independently.

| Component | View file |
|-----------|-----------|
| Header / Nav | `components/frontend/header.blade.php` |
| Hero | `components/frontend/hero.blade.php` |
| Client logos | `components/frontend/client.blade.php` |
| Services / Features | `components/frontend/service.blade.php` |
| Pricing preview | `components/frontend/pricing.blade.php` |
| Blog preview | `components/frontend/blog.blade.php` |
| Testimonials | `components/frontend/testimonial.blade.php` |
| Footer | `components/frontend/footer.blade.php` |

To disable a section, comment it out in `Modules/Tenanta/resources/views/index.blade.php`.

---

## Pricing Page

The pricing page at `/pricing` fetches plan data from the database via `TenantaService::getLandingData()`. It supports:

- **Monthly / Annual toggle** — switches between billing cycles via JavaScript
- **Savings badge** — shows the `yearly_discount_percent` for annual plans
- **"Most Popular" badge** — applied to plans with `is_featured = true`
- **Contact Sales button** — rendered for plans with a `cta_url` set

> **Note:** The landing CSS is a pre-compiled file at `Modules/Tenanta/resources/assets/landing/css/app.css`. If you add new utility classes, you must add them to this file — it is not processed by Tailwind JIT at runtime.

---

## Header Navigation

The header and mobile menu both include links to:

- Home (`/`)
- Pricing (`/pricing`)
- Blog (`/blog`)
- About (`/about`)
- Contact (`/contact`)

To edit the navigation, modify:
- `Modules/Tenanta/resources/views/components/frontend/header.blade.php`
- `Modules/Tenanta/resources/views/components/frontend/mobile-menu.blade.php`

---

## Customising Content

### Logo

Replace the logo files at:
```
Modules/Tenanta/resources/assets/landing/images/logo/logo-dark.png
Modules/Tenanta/resources/assets/landing/images/logo/logo-light.png
```

### Hero Image

Replace:
```
Modules/Tenanta/resources/assets/landing/images/hero/hero-primary-image.png
```

### Fonts

The landing site uses **Remix Icon** for icons. Icon font files are at:
```
Modules/Tenanta/resources/assets/landing/fonts/remix/
```

---

## CSS Customisation

The landing CSS variables control the colour scheme. Edit `variables.css`:

```css
:root {
    --primary: #6366f1;          /* Brand / accent colour */
    --foreground: #0f172a;       /* Body text */
    --background: #ffffff;       /* Page background */
    --foreground-secondary: #64748b; /* Muted text */
}
```

After editing, serve the file via the asset route (`/tenanta-landing-assets/...`) or copy it to `public/modules/tenanta/landing/`.

---

## Assets Serving

Landing assets are served dynamically by the application via the route:

```
/tenanta-landing-assets/{path}
```

The `LandingController::asset()` method streams files from `Modules/Tenanta/resources/assets/landing/`. No `php artisan storage:link` is needed for these assets.
