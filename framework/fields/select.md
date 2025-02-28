# Select Field

## Overview

The `select` field type allows users to choose one or multiple options from a predefined list. It supports grouped options, AJAX-based searches, sorting, and multiple selections. This field type is useful for selecting posts, categories, pages, or other custom-defined values.

## Field Configuration
A simple implementation of the `select` field type:

```php
array(
    'id'          => 'select_key',
    'type'        => 'select',
    'title'       => 'Select',
    'placeholder' => 'Select an option',
    'options'     => array(
        'option-1' => 'Option 1',
        'option-2' => 'Option 2',
        'option-3' => 'Option 3',
    ),
    'default'     => 'option-1',
),
```

#### Specific Parameters

| Parameter     | Type      | Default Value | Description |
|---------------|-----------|---------------|-------------|
| `options`     | `array`   | -             | Defines selectable options as key-value pairs. |
| `default`     | `mixed`   | -             | Sets the default selected option(s). |
| `placeholder` | `string`  | -             | Display text when no option is selected. |
| `multiple`    | `boolean` | `false`       | Enables multiple selections. |
| `choice`      | `boolean` | `false`       | Enhances the select field with search functionality. |
| `ajax`        | `boolean` | `false`       | Enables AJAX search for dynamically loading options. |
| `sortable`    | `boolean` | `false`       | Allows reordering selected options. |
| `query_args`  | `array`   | `array()`     | Defines parameters for querying dynamic content. |
| `settings`    | `array`   | `array()`     | Defines parameters for choice setting. |

#### Available Options (`options`)
The `options` parameter supports predefined values or dynamically loaded content. Here are some available options:

- `'pages'` - Lists available pages.
- `'posts'` - Lists posts.
- `'categories'` - Lists categories.
- `'tags'` - Lists tags.
- `'menus'` - Lists navigation menus.
- `'users'` - Lists users.
- `'sidebars'` - Lists registered sidebars.
- `'roles'` - Lists user roles.
- `'post_types'` - Lists registered post types.

<p class="space"></p>

#### Query Arguments (`query_args`)
When using AJAX-based selections, `query_args` can be used to filter the queried content. Supported arguments:

| Argument         | Description                                   |
| ---------------- | --------------------------------------------- |
| `post_type`      | Defines the post type to query.               |
| `taxonomy`       | Filters by taxonomy.                          |
| `posts_per_page` | Limits the number of results.                 |
| `max_post`       | Sets the maximum number of posts to retrieve. |
| `orderby`        | Defines sorting order (e.g., `post_title`).   |
| `order`          | Sets sorting direction (`ASC` or `DESC`).     |

<p class="space"></p>

#### Settings Arguments (`settings`)

| Arguments         | Type      | Default                       | Description |
|-------------------|-----------|-------------------------------|-------------|
| `loadingText`     | `string`  | `Loading...`                  | Show while choices are being populated via AJAX. |
| `noResultsText`   | `string`  | `No results found`            | Show when a user's search has returned no results. |
| `noChoicesText`   | `string`  | `No choices to choose from`   | Show when a user has selected all possible choices, or no choices exist. |
| `itemSelectText`  | `string`  | `Press to select`             | Show when a user hovers over a selectable choice. |

<p class="space"></p>

#### General Parameters
| Parameter         | Type      | Default           | Description |
|-------------------|-----------|-------------------|-------------|
| `id`              | `string`  | -                 | Unique identifier for the field. |
| `icon`            | `string`  | -                 | Icon for each individual section. |
| `type`            | `string`  | -                 | Defines the field type. |
| `title`           | `string`  | -                 | The title displayed for the field. |
| `subtitle`        | `string`  | -                 | The text displayed under the title. |
| `class`           | `string`  | -                 | Field additional class. |
| `data_type`       | `string`  | `serialize`       | Defines how data is stored (e.g., `serialize`). |
| `name`            | `string`  | -                 | Custom name for the field. |
| `placeholder`     | `string`  | `Not selected`    | Placeholder text for the input. |
| `attributes`      | `array`   | `array()`         | Custom HTML attributes. |
| `before`          | `string`  | -                 | Content to display before the field. |
| `after`           | `string`  | -                 | Content to display after the field. |
| `description`     | `string`  | -                 | A detailed description of the field. |
| `desc`            | `string`  | -                 | A short description, used if `description` is not set. |
| `help`            | `string`  | -                 | Additional helper text for guidance. Usually show on the top right corner of the field. |
| `error`           | `string`  | -                 | Error message to display when validation fails. |
| `dependencies`    | `array`   | -                 | Show/Hide a field base on another field value. |

## Example Usage

#### Grouped Options

```php
array(
    'id'          => 'select_2',
    'type'        => 'select',
    'title'       => 'Select Group',
    'placeholder' => 'Select an option',
    'options'     => array(
        'Group 1' => array(
            'option-1' => 'Option 1',
            'option-2' => 'Option 2',
            'option-3' => 'Option 3',
        ),
        'Group 2' => array(
            'option-4' => 'Option 4',
            'option-5' => 'Option 5',
            'option-6' => 'Option 6',
        ),
    ),
    'default' => array('option-1'),
),
```
#### Multiple Options

```php
array(
    'id'          => 'chose_select_key',
    'type'        => 'select',
    'title'       => 'Select',
    'choice'      => true,
    'multiple'    => true,
    'placeholder' => 'Select an option',
    'options'     => array(
        'option-1' => 'Option 1',
        'option-2' => 'Option 2',
        'option-3' => 'Option 3',
    ),
    'default'     => array('option-1', 'option-2'),
),
```

#### AJAX Search for Posts

```php
array(
    'id'          => 'select_6',
    'type'        => 'select',
    'title'       => 'Select with posts',
    'placeholder' => 'Select posts',
    'choice'      => true,
    'ajax'        => true,
    'multiple'    => true,
    'options'     => array('posts'),
),
```

#### Custom Post Type Query

```php
array(
    'id'          => 'select_8',
    'type'        => 'select',
    'title'       => 'Select Custom Post Type',
    'placeholder' => 'Select a post',
    'choice'      => true,
    'ajax'        => true,
    'options'     => array('posts'),
    'query_args'  => array(
        'post_type' => 'my_custom_post_type',
    ),
),
```

## Notes

- `multiple` allows users to select more than one option.
- `choice` enhances the field with a searchable dropdown.
- `ajax` should be used when dealing with large datasets to improve performance.
- `query_args` helps filter specific content dynamically.
- `sortable` is useful for managing the order of selected items.

This documentation ensures clear guidance on using the `select` field type with different configurations.