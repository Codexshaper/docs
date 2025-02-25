# Custom Taxonomy

## 1. Create Using CLI

##### General Command:
```sh
php wp cxf-make:taxonomy {custom_taxonomy_name}
```
##### With Custom Post Type:
```sh
php wp cxf-make:taxonomy {custom_taxonomy_name} --object={post_type_name}
```

- **`{custom_taxonomy_name}`** → Your taxonomy name.
- **`{post_type_name}`** → The custom post type name under which you want to set your taxonomy. If omitted, the default post type is `post`.

##### Naming Conventions:
- **UpperCamelCase**: `CustomTaxonomyName` (Recommended)
- **camelCase**: `customTaxonomyName`
- **snake_case**: `custom_taxonomy_name`
- **kebab-case**: `custom-taxonomy-name`
- **Mixed**: `customTaxonomy_Name`, `custom-taxonomy_name`, `Custom_taxonomy-name`

> [!INFO]
> All formats are converted to `UpperCamelCase` to follow the PSR-4 standard.

> [!IMPORTANT]
> You **cannot** use `Taxonomy` as a name since it is a reserved word in the framework.
>  Check [reserved words here](/framework/reserved-words.html).

##### Example:
```sh
php wp cxf-make:taxonomy PortfolioCategory
```

This command will generate all necessary files and directories to register the Taxonomy.

##### Expected CLI Response:
```
Success: The taxonomy PortfolioCategory's taxonomy directory has been created at ... <!-- Skipped if Taxonomies directory already exists -->
Success: The taxonomy PortfolioCategory's taxonomy file has been created at ...
```

##### Generated Files and Directories:
- **Taxonomy Directory (Skipped if Taxonomies directory already exists):** `/wp-content/plugins/codexshaper-framework/src/Taxonomies`
- **Taxonomy File:** `/wp-content/plugins/codexshaper-framework/src/Taxonomies/PortfolioCategory.php`

## 2. Using Option Builder

A powerful **Option Builder** allows easy creation of taxonomies. 

##### Example: Creating `portfolio-category` taxonomy for `portfolio` post type.
```php
use CodexShaper\Framework\Builder\CustomTaxonomy;

CustomTaxonomy::create(
    'custom_taxonomy',
    array(
        "taxonomy" => "custom_taxonomy",
        "name" => "Custom Taxonomies",
        "singular_name" => "Custom Taxonomy",
        "search_items" => "Search Custom Taxonomies",
        "all_items" => "All Custom Taxonomies",
        "parent_item" => "Parent Custom Taxonomy",
        "parent_item_colon" => "Parent Custom Taxonomy: ",
        "edit_item" => "Edit Custom Taxonomy",
        "update_item" => "Update Custom Taxonomy",
        "add_new_item" => "Add New Custom Taxonomy",
        "new_item_name" => "New Custom Taxonomy",
        "menu_name" => "Custom Taxonomy",
        "object_type" => array("portfolio"),
        "hierarchical" => true,
        "show_ui" => true,
        "show_admin_column" => true,
        "query_var" => true,
        "rewrite" => array(
            "slug" => "portfolio-categories", 
            "with_front" => false
        ),
        "public" => true,
        "publicly_queryable" => true,
        "show_in_menu" => true,
        "show_in_nav_menus" => false,
        "show_in_rest" => false,
    )
);
```
| Argument              | Type              | Default           | Description |
|-----------------------|-------------------|-------------------|-------------|
| `taxonomy`            | `string`          | -                 | The unique identifier (slug) for the taxonomy (e.g., `custom_taxonomy`). |
| `name`                | `string`          | -                 | Plural label for the taxonomy (e.g., “Books”). |
| `singular_name`       | `string`          | -                 | Singular label (e.g., “Book”). |
| `search_items`        | `string`          | -                 | Label for the search form placeholder (e.g., “Search Custom Taxonomies”). |
| `all_items`           | `string`          | -                 | Label to display for all taxonomy terms (e.g., “All Custom Taxonomies”). |
| `parent_item`         | `string`          | -                 | Label for a parent taxonomy item (e.g., “Parent Custom Taxonomy”). |
| `parent_item_colon`   | `string`          | -                 | Label for parent taxonomy item with a colon (e.g., “Parent Custom Taxonomy:”). |
| `edit_item`           | `string`          | -                 | Label for editing a taxonomy term (e.g., “Edit Custom Taxonomy”). |
| `update_item`         | `string`          | -                 | Label for updating a taxonomy term (e.g., “Update Custom Taxonomy”). |
| `add_new_item`        | `string`          | -                 | Label for adding a new taxonomy term (e.g., “Add New Custom Taxonomy”). |
| `new_item_name`       | `string`          | -                 | Label for a newly created taxonomy term (e.g., “New Custom Taxonomy”). |
| `menu_name`           | `string`          | -                 | Label for the taxonomy menu in the WordPress admin (e.g., “Custom Taxonomy”). |
| `object_type`         | `array`           | `array()`         | An array of post types to which this taxonomy applies (e.g., `array('portfolio')`). |
| `hierarchical`        | `boolean`         | `false`           | If `true`, the taxonomy behaves like categories (parent-child relationship). If `false`, it behaves like tags. |
| `show_ui`             | `boolean`         | `true`            | If `true`, the taxonomy is displayed in the WordPress admin UI. |
| `show_admin_column`   | `boolean`         | `false`           | If `true`, displays the taxonomy in its own column on the post type listing screen. |
| `query_var`           | `boolean\|string` | `true`            | Enables using the taxonomy’s name in WP queries (e.g., `?custom_taxonomy=term`). |
| `rewrite`             | `array`           | `true`            | Controls permalink structure (e.g., `'slug' => 'portfolio-categories'`). |
| `public`              | `boolean`         | `false`           | If `true`, the taxonomy is publicly available (front-end queries, permalinks, etc.). |
| `publicly_queryable`  | `boolean`         | Matches `public`  | If `true`, allows front-end queries. |
| `show_in_menu`        | `boolean`         | `false`           | If `true`, displays the taxonomy in the admin menu. |
| `show_in_nav_menus`   | `boolean`         | `false`           | If `true`, allows this taxonomy to be used in navigation menus. |
| `show_in_rest`        | `boolean`         | `false`           | If `true`, exposes the taxonomy in the WordPress REST API. |

## 3. Creating from Dashboard
Navigate to `CodexShaper Framework >> Custom Taxonomies`.

<p class="cxf--img-wrapper">
    <img src="/assets/framework/images/custom-taxonomy.png" alt="Custom Taxonomy View">
</p>

| Argument              | Type              | Default       | Description |
|-----------------------|-------------------|---------------|-------------|
| `Taxonomy ID`         | `string`          | -             | The unique identifier (slug) for the taxonomy (e.g., `custom_taxonomy`). |
| `Singular Name`       | `string`          | -             | Singular label (e.g., "Book"). |
| `Plural Name`         | `string`          | -             | Plural label for the taxonomy (e.g., “Books”). |
| `Front Slug`          | `string` 	        | -             | A slug that can be used for the front-end (optional). |
| `Select Object`     	| `string` 	        | -             | Choose the post type (e.g., `post`, `portfolio`, or custom post type). |
| `Is Public`         	| `bool`   	        | `true`        | Toggle to set if the taxonomy is public. |
| `Publicly Queryable` 	| `bool`   	        | `true`        | Determines if this taxonomy can be queried in front-end requests. |
| `Show in UI`        	| `bool`   	        | `true`        | Choose whether this taxonomy should appear in the UI. |
| `Show in Admin Menu` 	| `bool`   	        | `true`        | Toggle to show or hide in admin menus. |
| `Show in Nav Menu`  	| `bool`   	        | `false`       | Toggle to show or hide in navigation menus. |
| `Show in Reset`     	| `bool`   	        | `false`       | If `true`, exposes the taxonomy in the WordPress REST API. |
| `Is Active`        	| `bool`   	        | `true`        | Set this to **Yes** to activate the taxonomy. | 

## 4. Creating Manually

##### Steps:
1. Navigate to:
   ```sh
   {project_root}/wp-content/plugins/codexshaper-framework/src/Taxonomies
   ```
2. Create a file using `UpperCamelCase.php` naming convention (e.g., `PortfolioCategory.php`).
3. Open the file in a text editor and insert the following code:

```php
<?php

namespace CodexShaper\Framework\Taxonomies;

use CodexShaper\Framework\Foundation\Taxonomy;

if (!defined('ABSPATH')) {
    exit();
}

class PortfolioCategory extends Taxonomy {
    public function __construct() {
        parent::__construct();
    }

    public function get_name() {
        return 'portfolio-category';
    }

    public function get_object_type() {
        return array('portfolio');
    }

    public function get_title() {
        return join(' ', array_map('ucfirst', explode('-', $this->taxonomy)));
    }

    public function is_public() {
        return true;
    }

    public function is_publicly_queryable() {
        return true;
    }

    public function is_hierarchical() {
        return true;
    }

    public function is_show_ui() {
        return true;
    }

    public function is_show_in_rest() {
        return true;
    }

    public function is_query_var() {
        return true;
    }

    public function is_show_in_menu() {
        return true;
    }

    public function is_show_in_nav_menus() {
        return true;
    }
}
```

Done! Your custom taxonomy is now registered.