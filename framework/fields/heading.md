# Heading Field

## Overview
The `heading` field is used to display a heading within your interface. You can also extend this field to include additional types like `subheading` or `submessage` in the future. This allows for flexibility and adaptability to different content needs.

## Field Configuration
Below is the general structure for defining a `heading` field:

```php
array(
    'type'    => 'heading',
    'content' => 'This is a heading'
),
```

#### Specific Parameters
| Parameter     | Type       | Default          | Description |
|---------------|------------|------------------|-------------|
| `content`     | `string`   | -                | Content for the heading section. |
| `tag`         | `string`   | `h3`             | HTML tag for the heading. (e.g., `h1`, `h2`, `h3`, `h4`,`h5`, `h6`,) |
| `class`       | `string`   | `cmf--heading`   | Specific CSS Class for heading. |

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

## Example Usage
Here’s an example of how a heading field might be defined in a settings panel:

```php
array(
    'id'      => 'example_heading',
    'type'    => 'heading',
    'content' => 'This is a heading for section',
),
```

## Notes
- The `content` can be a string of any length, and it will be rendered as a text value within the interface.
- Keep an eye out for future updates that may introduce more types to further enhance content customization.