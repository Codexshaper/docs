# Header Builder

The **Header Builder** allows you to create custom layouts for branding and navigation of your WordPress site. Instead of relying on default theme templates, you can design and assign your own:

## Accessing the Header Builder
Go to `CodexShaper Framework >> Theme Builder`.
After Click `Add New Theme Builder` you should see an interface like below.

<p class="cmf--img-wrapper">
    <img src="/assets/framework/images/theme-builder/theme-builder.png" alt="Theme Builder Interface">
</p>

| Name                  | Default 	                    | Description |
|-----------------------|-------------------------------|-------------|
| `Type`                | Header                        | Template type. |
| `Display Location`    | Specific Pages / Posts        | Where you want to show your template. |
| `Select Post`         | -                             | Only for `Specific Pages / Posts`. |

## Types:

#### Header
- **Purpose**: The Header template typically contains your site’s logo, navigation menu, and other important links.
- **Usage**: Create multiple header designs for different pages or conditions (e.g., one for your homepage, another for landing pages).

## Display Location: 

| Type                          | Description |
|-------------------------------|-------------|
| `All Archives`                | This refers to all types of archive pages, including category archives, tag archives, date-based archives, author archives, and custom post type archives. (e.g., `archive.php`, `category.php`, `tag.php`, `taxonomy.php`, `author.php`, `date.php`). |
| `All Singular`                | This represents all single post or page views, including custom post types. (e.g., `singular.php`, `single.php`, `page.php`, `single-{post_type}.php`). |
| `Entire Website`              | This means every page of the website, covering archives, singular posts, custom post types, and error pages. (e.g., `search.php`, `404.php`). |
| `All Pages`                   | This refers specifically to WordPress pages (not posts or archives). (e.g., `page.php`, `page-{slug}.php`, `page-{ID}.php`). |
| `404 Page`                    | This is the error page displayed when a requested page is not found. (e.g., `404.php`). |
| `Author Archive`              | This page displays posts by a specific author. (e.g., `author.php`, `archive.php`). |
| `Date Archive`                | Displays posts grouped by date (year, month, day). (e.g., `date.php`, `archive.php`). |
| `Front Page`                  | This is the homepage of the website. (e.g., `front-page.php`, `home.php`). |
| `Search Page`                 | Displays search results for a user query. (e.g., `search.php`). |
| `Specific Pages / Posts`      | Custom templates for individual pages or posts. (e.g., `page-{slug}.php`, `page-{ID}.php`, `single-{post_type}.php`). |
| `{post_type}s Archive`        | The archive page for a custom post type. (e.g., `archive-{post_type}.php`). |
| `{post_type}s Singular`       | The single view for a custom post type. (e.g., `single-{post_type}.php`). |
| `{post_type}s Singulars`      | Likely refers to all singular views of a specific custom post type. (e.g., `single-{post_type}.php`, `singular.php`). |

>[!IMPORTANT]
>Make sure to carefully set these conditions to ensure your new template appears where you expect.

## Select Post

After selecting **Display Location** to `Specific Pages / Posts`, you will be able to to select multiple `Specific Post` or `Specific Page`.