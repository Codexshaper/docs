# Callback Field

## Overview
The `callback` field type allows you to execute a custom function or piece of code in the context of your settings or meta box. This is especially useful when you need to display complex UI elements, run custom logic, or output dynamic HTML.

## Field Configuration
A simple implementation of the `callback` field type:

```php
// 2. Callback field
array(
    'type'     => 'callback',
    'function' => 'cmf_callback_function',
),

// 1. Define your callback function any where
function cmf_callback_function() {
    echo '<h1>Welcome to CodexShaper Framework.</h1>';
};
```

### Specific Parameters

| Parameter   | Type        | Default       | Description |
|-------------|-------------|---------------|-------------|
| `function`  | `string`    | -             | The name of the function to be called. This function is responsible for rendering or processing output. |

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

#### Simple Callback
```php
array(
    'type'     => 'callback',
    'function' => 'my_callback_function',
),

function cmf_callback_function() {
    echo '<h1>Welcome to CodexShaper Framework.</h1>';
};
```

#### Advanced Callback with Additional Logic
```php
array(
    'id'       => 'cmf_advanced_callback_field',
    'type'     => 'callback',
    'function' => 'cmf_advanced_callback',
    'desc'     => 'This field outputs a custom HTML block using a callback function.',
),

function cmf_advanced_callback() {
    // Perform some checks or retrieve data
    $dynamic_value = 'Some dynamic data';

    // Output HTML
    echo '<div class="my-advanced-callback">';
    echo '<h2>Dynamic Data:</h2>';
    echo '<p>' . esc_html($dynamic_value) . '</p>';
    echo '</div>';
};
```