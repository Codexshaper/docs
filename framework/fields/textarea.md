# Textarea Field

## Overview
The `textarea` field type is designed for capturing multi-line textual input from users. It is ideal for longer content such as descriptions, comments, or detailed notes. The field provides options to set default content, adjust the visible size, and add placeholder text for improved user guidance.

## Field Configuration
A simple implementation of the `textarea` field type:

```php
array(
    'id'      => 'textarea_key',
    'type'    => 'textarea',
    'title'   => 'Textarea',
    'default' => 'Hello, It\'s CodexShaper!'
),
```

### Specific Parameters

| Parameter      | Type     | Default     | Description |
|----------------|----------|---------------|-----------|
| `default`      | `string` | -           | Sets the default content of the textarea. |
<!-- | `rows`         | `int`    | -           | (Optional) Number of rows to display in the textarea. | -->
<!-- | `cols`         | `int`    | -           | (Optional) Number of columns (width) for the textarea. | -->

#### General Parameters
| Parameter         | Type      | Default           | Description |
|-------------------|-----------|-------------------|-------------|
| `id`              | `string`  | -                 | Unique identifier for the field. |
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

## Example Usages

#### Basic Textarea
```php
array(
    'id'      => 'textarea_key',
    'type'    => 'textarea',
    'title'   => 'Textarea',
    'default' => 'Hello, It\'s CodexShaper!'
),
```

#### Extended Textarea with Additional Attributes
```php
array(
    'id'           => 'textarea_key_extended',
    'type'         => 'textarea',
    'title'        => 'Extended Textarea',
    'default'      => 'Default multi-line content.',
    'placeholder'  => 'Enter your text here...',
    'description'  => 'This textarea field allows for multi-line text input.',
    'help'         => 'Ensure your content is well formatted.',
    'attributes'   => array(
        'autocomplete' => 'off',
        'rows'         => 5,
        'cols'         => 50,
    ),
),
```

## Notes
- The `textarea` field is best suited for multi-line text input.
- Optional parameters like `rows`, `cols`, and `placeholder` help customize the appearance and user experience.