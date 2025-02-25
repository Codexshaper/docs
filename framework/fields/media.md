# Media Field

## Overview
The `media` field type allows users to upload and manage media files. It includes options for previewing, setting dimensions, adding alt text, and customizing button labels. This field provides flexible configuration options to suit different use cases.

## Field Configuration
A simple implementation of the `media` field type:

```php
array(
    'id'    => 'media_id',
    'type'  => 'media',
    'title' => 'My Media',
),
```

#### Specific Parameters

| Parameter         | Type          | Default           | Description |
|-------------------|---------------|-------------------|-------------|
| `url`             | `boolean`     | `true`            | Enables or disables the URL input field for the media file. |
| `preview`         | `boolean`     | `true`            | Enables or disables previewing of the media file. |
| `library`         | `array`       | `array()`         | Specifies allowed media types (e.g., `image`, `video`). |
| `button_title`    | `string`      | `Upload`          | Custom label for the upload button. |
| `remove_title`    | `string`      | `Remove`          | Custom label for the remove button. |
| `alt`             | `string`      | -                 | (Optional) Provides alternative text for accessibility. |
<!-- | `preview_size`    | `string`      | `thumbnail`       | Specifies the preview size. It can be a named size (e.g., `thumbnail`, `full`). | -->
<!-- | `width`           | `int`         | -                 | (Optional) Sets the media width in pixels. | -->
<!-- | `height`          | `int`         | -                 | (Optional) Sets the media height in pixels. | -->

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

```php
array(
    'id'            => 'media_key',
    'type'          => 'media',
    'title'         => 'Field Title',
    'library'       => array('image', 'video'),
),
```

## Notes
- The `library` parameter can be restricted to specific media types (e.g., `array('image')` for images only).
- Error messages (`error`) should be customized for better user feedback.