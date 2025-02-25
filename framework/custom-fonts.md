# Adding Custom Fonts

## Introduction

The **Custom Fonts** feature in the CodexShaper Framework allows you to upload and manage unique fonts directly in the WordPress admin area. By providing multiple file formats (TTF, OTF, WOFF, WOFF2, EOT), you ensure that your custom fonts are compatible across different browsers and devices.

## Accessing the Custom Fonts Panel
Go to `CodexShaper Framework >> Custom Fonts`.

<p class="cxf--img-wrapper">
  <img src="/assets/framework/images/custom-fonts/custom-font-list.png" alt="Custom Font List Interface">
</p>

After Click `Add New Custom Fonts`, Then you should see an interface like below.

<p class="cxf--img-wrapper">
  <img src="/assets/framework/images/custom-fonts/custom-font.png" alt="Custom Font List Interface">
</p>

## Uploading Font Variations
In the **Custom Fonts Meta Box**, you can upload multiple font file types:

| Name                  | Default 	    | Description |
|-----------------------|---------------|-------------|
| `Font Weight`         | 400 Regular   | Font Variation (e.g., `100` ... `900`). |
| `Font Style`         	| Normal       	| Font Style (e.g., `Italic`, `Oblique`). |
| `TTF FILE`         	  | -       	    | TrueType Font. |
| `OTF FILE`         	  | -       	    | OpenType Font. |
| `WOFF2 / WOFF2 FILE`  | -       	    | Recommended for modern browsers. |
| `EOT FILE`         	  | -       	    | For older versions of Internet Explorer. |

> [!NOTE]
> Including multiple file formats helps maintain consistent typography across different browsers.

Never forget to `Publish` your new custom font.

## Applying Your Custom Fonts

Once you have uploaded your fonts, there are several ways to use them in your theme:

### 1. Theme Customizer / Theme Options

- Go to **Appearance > Customize** (or your theme’s settings).  
- Find a **Typography** or **Fonts** section where you can select your uploaded font.

### 2. Custom CSS

If your theme doesn’t offer a built-in typography option, apply your font using CSS:
```css
body {
  font-family: "MyBrand Sans Regular", sans-serif;
}
```
Be sure to use the exact font name as defined in the Custom Fonts panel.

### 3. Page Builders / Theme Builders

If you’re using a page builder (or the CodexShaper Theme Builder), look for typography or style settings within the builder’s interface. Select your newly uploaded font for specific elements or entire sections.

## FAQ

**Q1: Do I need to upload all font formats (TTF, OTF, WOFF, WOFF2, EOT)?**  
A: Not necessarily. WOFF/WOFF2 usually suffice for modern browsers, but uploading multiple formats maximizes compatibility.

**Q2: Can I mix custom fonts with Google Fonts?**  
A: Yes. Simply apply both as needed—just ensure you reference the correct font-family names in your CSS or theme settings.
