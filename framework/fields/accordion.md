# Accordion Field

## Overview
The `accordion` field type allows you to group multiple fields under collapsible accordion sections. 
This is useful for organizing form elements in a structured and user-friendly way.

## Field Configuration
Below is the general structure for defining an `accordion` field:

```php
array(
    'id'         => 'example_accordion',
    'type'       => 'accordion',
    'title'      => 'Example Accordion',
    'accordions' => array(
        array(
            'title'  => 'Accordion 1',
            'fields' => array(
                array(
                    'id'    => 'text_one',
                    'type'  => 'text',
                    'title' => 'Text',
                ),
                array(
                    'id'    => 'textarea_one',
                    'type'  => 'textarea',
                    'title' => 'Text Area',
                ),
            )
        ),
    )
),
```

#### Specific Parameters
| Parameter                     | Type        | Default                 | Description |
|-------------------------------|-------------|-------------------------|-------------|    
| `accordions`                  | `array`     | -                       | Contains an array of accordion sections. |
| `icon`                        | `string`    | `fas fa-angle-right`    | Icon for each individual section. |
| `fields`                      | `array`     | -                       | Array of fields contained within the accordion section. |

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
Here’s an example of how an accordion field might be defined in a settings panel:

```php
array(
    'id'    => 'custom_settings',
    'type'  => 'accordion',
    'title' => 'Custom Settings',
    'accordions' => array(
        array(
            'title'  => 'General Settings',
            'fields' => array(
                array(
                    'id'    => 'site_name',
                    'type'  => 'text',
                    'title' => 'Site Name',
                ),
                array(
                    'id'    => 'site_description',
                    'type'  => 'textarea',
                    'title' => 'Site Description',
                ),
            )
        ),
    )
),
```

## Notes
- Each `accordion` section can contain multiple fields of various types.
- You can customize each section with different fields as required.
- This structure helps in keeping form fields organized and user-friendly.