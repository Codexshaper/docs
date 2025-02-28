# Custom Attributes

## Overview
The Custom Attributes feature in the CodexShaper framework allows developers to add specific attribute directly to containers and elements through the Elementor interface. This functionality provides granular control over the appearance of your content without modifying theme files.

## Location
Go To `Elementor` → `Advanced tab` → `Attributes`

<p class="cmf--img-wrapper w-max">
    <img src="/public/assets/framework/images/extensions/elementor/custom-attribute.png" alt="Elementor Custom Attribute Interface">
</p>

## Usage

#### Syntax
```
key|value
```
>[!IMPORTANT]
>Each attribute should be on a separate line. The key and value are separated by the pipe (`|`) character.

#### Example
```
data-carousel|true
data-autoplay|3000
data-loop|true
```

This would render in HTML as:

```html
<div data-carousel="true" data-autoplay="3000" data-loop="true">
    <!-- Container contents -->
</div>
```

## Troubleshooting
If custom attributes are not rendering as expected:

1. Verify the attribute is not on the blacklist

>[!WARNING]
>**Blacklisted Attribute** `id`, `class`, `data-id`, `data-settings`, `data-element_type`, `data-model-cid`
>These are likely reserved for internal use by the CodexShaper framework.

2. Check the syntax to ensure proper `key|value` format
