# Repeater Field

## Overview
The `repeater` field type allows users to create repeatable groups of fields. It is useful for dynamically adding multiple sets of input fields with defined constraints such as minimum and maximum entries.

## Field Configuration
A simple implementation of the `repeater` field type:

```php
array(
    'id'    => 'repeater_key',
    'type'  => 'repeater',
    'title' => 'Repeater',
),
```

#### Specific Parameters
| Parameter         | Type      | Default Value                         | Description |
|-------------------|-----------|---------------------------------------|-------------|
| `button_title`    | `string`  | `<i class="fas fa-plus-circle"></i>`  | Custom label for the add button. |
| `fields`          | `array`   | -                                     | Defines the fields inside the repeater. |
<!-- | `max`             | `int`     | `0`                                   | (Optional) Defines the maximum number of repeater entries. | -->
<!-- | `min`             | `int`     | `0`                                   | (Optional) Defines the minimum number of repeater entries. | -->

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

```php
array(
    'id'           => 'repeater_key',
    'type'         => 'repeater',
    'title'        => 'Repeater',
    'button_title' => 'Add',
    'fields'       => array(
        array(
            'id'    => 'title',
            'type'  => 'text',
            'title' => 'Title'
        ),
    ),
),
```

## Notes
<!-- - The `min` and `max` parameters allow control over the number of entries. -->
- The `fields` parameter defines the subfields inside the repeater.
- Error messages (`error`) should be customized for better user feedback.

