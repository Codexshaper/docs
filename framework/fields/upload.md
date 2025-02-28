# Upload Field

## Overview
The `upload` field type allows users to upload files to your application. It is especially useful for images, documents, and other media. This field type offers various configuration options, such as selecting a media library, enabling preview functionality, and customizing button labels, to provide a user-friendly file upload experience.

## Field Configuration
A simple implementation of the `upload` field type:

```php
array(
    'id'    => 'upload_key',
    'type'  => 'upload',
    'title' => 'Upload',
),
```

#### Specific Parameters

| Parameter        | Type               | Default Value | Description |
|------------------|--------------------|---------------|-------------|
| `library`        | `array\|string`    | `all`         | Specifies the media library to restrict uploads (e.g., `image`, `video`). |
| `preview`        | `boolean`          | `false`       | Enables a preview of the uploaded file (commonly used for images). |
| `button_title`   | `string`           | -             | Custom text for the upload button. |
| `remove_title`   | `string`           | -             | Custom text for the remove file button. |
<!-- | `placeholder`    | `string`           | -             | Placeholder URL or text when no file is uploaded. | -->
<!-- | `preview_width`  | `int`              | -             | (Optional) Width of the preview area in pixels. | -->
<!-- | `preview_height` | `int`              | -             | (Optional) Height of the preview area in pixels. | -->

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

## Example Usages

#### Enhanced Upload Field for Images
```php
array(
    'id'           => 'upload_key',
    'type'         => 'upload',
    'title'        => 'Upload',
    'library'      => 'image',
    'preview'      => true,
    'placeholder'  => 'Upload from here...',
    'button_title' => 'Add Image',
    'remove_title' => 'Remove Image',
),
```

## Notes
- The `library` parameter is particularly useful when you want to restrict file uploads to a certain type (e.g., images).
- Enabling `preview` will typically display a thumbnail of the uploaded file, and you can adjust its size using `preview_width` and `preview_height`.
- Customizing `button_title` and `remove_title` allows you to tailor the user interface to better match your application's design.