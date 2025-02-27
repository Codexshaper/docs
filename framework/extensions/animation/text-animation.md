# Text Animation
## Introduction
The Text Animation feature in **CodexShaper Framework** enables developers to create dynamic, attention-grabbing text effects that enhance user engagement. This documentation provides a clear overview of available animation types and configuration options.

## Location
Go To `Elementor` → `Content tab` → `Text Animation`

<p class="cxf--img-wrapper w-max">
    <img src="/public/assets/framework/images/extensions/animation/text-animation.png" alt="Elementor Text Animation Interface">
</p>

## Animation Types

| Type          | Description                                       | Best Used For |
|---------------|---------------------------------------------------|---------------|
| Character     | Animates each letter individually                 | Creating playful, high-energy effects |
| Word          | Animates each word as a separate unit             | Emphasizing specific terms in a phrase |
| Text Move     | Slides entire text blocks into position           | Clean, professional entrances for headlines |
| Text Reveal   | Gradually unveils text with a reveal effect       | Creating suspense or focus on important content |
| Text Invert   | Flips or inverts text during animation            | Making dramatic statements or transitions |

## Configuration Settings

| Parameter             | Function                              | Default           | Explanation |
|-----------------------|---------------------------------------|-------------------|-------------|
| Animation             | Sets animation style                  | `none`            | Choose from the five animation types above |
| Delay                 | Initial pause before animation starts | `0.15s`           | Controls when text begins animating after trigger |
| Duration              | Total animation time                  | `1s`              | Adjusts how quickly the full animation completes |
| Stagger               | Time between elements                 | `0.02s`           | For Character/Word: timing between each element |
| Animation on scroll   | Triggers on viewport entry            | `Yes`             | Activates animation when user scrolls to text |
| Rotation Direction    | Axis of rotation                      | `X`               | Determines rotation plane (X or Y axis) |
| Rotation Value        | Degree of rotation                    | `-80`             | Sets rotation angle in degrees |
| Transform Origin      | Initial point for transforms          | `top center -50`  | Defines the anchor point for movements |
| Breakpoint            | Device compatibility                  | `All`             | Controls which device sizes show the animation |

## Implementation Tips

### For Maximum Impact
- Use Character animations sparingly for standout headlines
- Apply Text Move for clean, professional section intros
- Implement Text Reveal for important calls-to-action
- Keep animations under 1.5 seconds for optimal user experience

### Technical Considerations
- Lower stagger values (0.01-0.03s) create smoother sequences
- Match rotation direction with animation type for natural movement
- Consider disabling complex animations on mobile devices
- Test animations at various scroll speeds