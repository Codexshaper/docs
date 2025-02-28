# Custom CSS

## Overview
The Custom CSS feature in the CodexShaper framework allows developers to add specific styling directly to containers and elements through the Elementor interface. This functionality provides granular control over the appearance of your content without modifying theme files.

## Location
Go To `Elementor` → `Advanced tab` → `Custom CSS`

<p class="cmf--img-wrapper w-max">
    <img src="/public/assets/framework/images/extensions/elementor/custom-css.png" alt="Elementor Custom CSS Interface">
</p>

## Usage

#### Targeting Elements
Add the "selector" prefix to target specific child elements within the targeted element, For example:

```css
selector .your-target-class {
    property: value;
}
```
>[!WARNING]
>Never forget to add `selector` prefix. Otherwise it will apply **globally**.

#### Example
```css
selector .cmf--link {
    color: #aabbcc;
    font-size: 18px;
}

selector .cmf--link:hover {
    text-decoration: underline;
}
```