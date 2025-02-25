# Text Field

## Overview
The `text` field type is used to capture single-line textual input from users. It is ideal for short text entries such as names, titles, or other brief data. This field type offers customization for default values and placeholder text, ensuring a user-friendly input experience.

## Field Configuration
A simple implementation of the `text` field type:

```php
array(
    'id'    => 'text_key',
    'type'  => 'text',
    'title' => 'Text',
),
```

### Specific Parameters

| Parameter     | Type      | Default Value | Description |
|---------------|-----------|---------------|-------------|
| `default`     | `string`  | -             | Sets the initial text value for the field. |
| `placeholder` | `string`  | -             | Provides hint text when the field is empty. |

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

#### Basic Text Field
```php
array(
    'id'          => 'text_key',
    'type'        => 'text',
    'title'       => 'Text',
    'default'     => 'Hello CodexShaper.',
    'placeholder' => 'Hello CodexShaper.',
),
```

#### Extended Text Field with Additional Details
```php
array(
    'id'           => 'text_key_extended',
    'type'         => 'text',
    'title'        => 'Extended Text',
    'default'      => 'Default text',
    'placeholder'  => 'Enter your text here...',
    'description'  => 'This is a detailed description of the text field.',
    'help'         => 'Please enter a valid string.',
),
```

## Notes
- The `default` parameter sets the initial value displayed in the field, while the `placeholder` provides a prompt when the field is empty.
- The Text field is best suited for short textual inputs.
- You can combine the Text field with dependency parameters to conditionally display it based on other field values.