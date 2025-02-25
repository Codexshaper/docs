# Switcher Field

## Overview
The `switcher` field type provides a toggle input that allows users to easily switch between two states (e.g., on/off, yes/no, enabled/disabled). It is commonly used for settings and options where a binary choice is needed.

## Field Configuration
A simple implementation of the `switcher` field type:

```php
array(
    'id'    => 'switcher_key',
    'type'  => 'switcher',
    'title' => 'Switcher',
),
```

### Specific Parameters

| Parameter   | Type      | Default   | Description |
|-------------|-----------|-----------|-------------|
| `label`     | `string`  | -           | Optional text displayed alongside the switcher for additional context. |
| `default`   | `boolean` | `false`     | The default state of the switcher (true for on, false for off). |
| `text_on`   | `string`  | `on`        | Custom text displayed when the switcher is turned on. |
| `text_off`  | `string`  | `off`       | Custom text displayed when the switcher is turned off. |
| `width`     | `int`     | -           | (Optional) Sets the width of the switcher in pixels. |

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

#### Switcher with Label and Default State
```php
array(
    'id'      => 'switcher_key',
    'type'    => 'switcher',
    'title'   => 'Switcher',
    'label'   => 'Do you want to activate it?',
    'default' => true,
),
```

#### Switcher with Dependency
```php
array(
    'id'      => 'switcher_key',
    'type'    => 'switcher',
    'title'   => 'Switcher',
    'default' => true,
),

array(
    'id'            => 'text_key',
    'type'          => 'text',
    'title'         => 'Text',
    'dependencies'  => array(
        array(
            'controller' => 'switcher_key',
            'operator'   => '===',
            'value'      => 1,
            'action'     => 'show',
        ),
    ),
),
```

#### Switcher with Custom Width and Text
```php
array(
    'id'       => 'switcher_key',
    'type'     => 'switcher',
    'title'    => 'Switcher with Enabled/Disabled',
    'text_on'  => 'Enable',
    'text_off' => 'Disable',
    'width'    => 70,
),
```

## Notes
- The `default` parameter determines the initial state of the switcher.
- `text_on` and `text_off` allow you to customize the labels for the on and off states.
- The `dependency` parameter can be used to conditionally display or hide other fields based on the switcher's value.
- Adjusting the `width` can help in aligning the switcher with other UI elements for better design consistency.