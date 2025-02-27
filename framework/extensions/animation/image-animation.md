# Image Animation

## Introduction
The Image Animation feature in the CodexShaper Framework enables developers to add dynamic visual effects to featured images. This functionality enhances user engagement by creating smooth, professional transitions that draw attention to important visual elements.

## Location
Go To `Elementor` → `Content tab` → `Image Animation`

<p class="cxf--img-wrapper w-max">
    <img src="/public/assets/framework/images/extensions/animation/image-animation.png" alt="Elementor Image Animation Interface">
</p>

## Animation Types and Settings

#### Animation Types
| Type      | Description                                               | Best Used For |
|-----------|-----------------------------------------------------------|---------------|
| Scale     | Gradually changes image size from start to end values     | Creating focus on hero images and featured content |
| Reveal    | Progressively unveils the image using a sliding effect    | Dramatic introductions of new visual content |
| Stretch   | Distorts and then normalizes the image dimensions         | Creating dynamic, attention-grabbing effects |

##### Configuration Settings
| Parameter         | Function                  | Default       | Explanation |
|-------------------|---------------------------|---------------|-------------|
| Animation         | Sets animation style      | `none`        | Choose from animation types above |
| Start Scale       | Initial size ratio        | `0.7`         | Starting size as a proportion of final size (0.7 = 70%) |
| End Scale         | Final size ratio          | `1`           | Target size when animation completes (1 = 100%) |
| Animation From    | Origin point of animation | `Top Top`     | First value is element position, second is display position |
| Ease              | Movement pattern          | `Power2.out`  | Controls the acceleration/deceleration curve |

## Implementation Guide

### Basic Scale Animation
For example, with the default settings:

- The image begins at 70% of its final size
- It smoothly scales up to 100%
- The animation originates from the top of both the element and display
- The Power2.out easing creates a natural slowing at the end of the animation

### Configuration Tips

- **For Subtle Effects**: Use close values for Start/End Scale (e.g., 0.9 to 1)
- **For Dramatic Impact**: Use more contrasting values (e.g., 0.5 to 1)
- **For Different Directions**: Change Animation From to control the origin
- **For Timing Adjustments**: Select different Ease options to change how the animation accelerates
