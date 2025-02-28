# Field Type: Backup

## Overview
The `backup` field type provides a way to export and import your framework settings or module configurations. This feature allows users to create a backup of their current settings (in JSON format or another structure) and restore them when needed.


## Field Configuration
A simple implementation of the `backup` field type:

```php
array(
    'id'   => 'backup_key',
    'type' => 'backup',
);
```

#### Specific Parameters

| Parameter     | Type      | Default       | Description |
|---------------|-----------|---------------|-------------|
| `option_name` | `string`  | `field_id`    | The option key under which data is stored and retrieved. |
| `json_pretty` | `boolean` | `false`       | If `true`, the exported JSON is formatted for readability. |

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
    'id'          => 'module_backup',
    'type'        => 'backup',
    'option_name' => 'cmf_module_settings',
    'json_pretty' => true,
);
```