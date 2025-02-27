# Wrapper Link

## Introduction
The Wrapper Link feature is a powerful functionality within the CodexShaper Framework that transforms entire elements into interactive, clickable areas.

## Location
Go To `Elementor` → `Advanced tab` → `Wrapper Link`

<p class="cxf--img-wrapper w-max">
    <img src="/public/assets/framework/images/extensions/elementor/wrapper-link.png" alt="Elementor Wrapper Link Interface">
</p>

## Configuration Guide

| Parameter | Function                                  | Example                   | Explanation |
|-----------|-------------------------------------------|---------------------------|-------------|
| Link      | Destination URL for the entire element    | `https://codexshaper.com` | Sets the target page that opens when the element is clicked |

## Technical Implementation

The Wrapper Link functionality is implemented through specific HTML attributes applied to the container element:

```php
array(
    'data-cmf-wrapper-link' => wp_json_encode($element_link, true),
    'style'                 => 'cursor: pointer',
    'class'                 => 'cmf--wrapper-link',
)
```

This implementation:
- Stores the link data in a JSON-encoded attribute (`data-cmf-wrapper-link`)
- Automatically applies a pointer cursor to indicate clickability
- Adds a specific CSS class for potential styling or JavaScript interactions