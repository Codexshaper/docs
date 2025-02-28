# Animation

## Introduction
The Animation extension in the CodexShaper Framework provides developers with comprehensive tools to implement sophisticated animations for titles and other elements. This documentation outlines the available configuration options and best practices for implementing animations effectively.

## Location
Go To `Elementor` → `Advanced tab` → `Animation`

<p class="cmf--img-wrapper w-max">
    <img src="/public/assets/framework/images/extensions/animation/animation.png" alt="Elementor Custom Attribute Interface">
</p>

## Configuration Guide

#### Core Settings

| Parameter             | Function                                  | Default   | Explanation |
|-----------------------|-------------------------------------------|-----------|-------------|
| Animation Type        | Defines the visual effect                 | `None`    | Controls how the element appears or transitions on the page |
| Enable On Editor      | Shows animation in edit mode              | `No`      | Keeping this off improves editor performance while you work |
| Delay                 | Wait time before animation starts         | `0.15s`   | Useful for creating sequential animations when multiple elements are present |
| Animation on scroll   | Activates when element becomes visible    | `Yes`     | Creates a dynamic experience as users scroll down the page |

#### Direction & Timing

| Parameter | Function                          | Default       | Explanation |
|-----------|-----------------------------------|---------------|-------------|
| Fade from | Origin point of animation         | `Top`         | Determines which direction the element fades in from |
| Duration  | Length of animation effect        | `1.5s`        | Controls how quickly or slowly the animation completes |
| Ease      | Animation acceleration pattern    | `Power2.out`  | Determines how natural and smooth the motion appears |

#### Advanced Controls

| Parameter                 | Function                          | Default   | Explanation |
|---------------------------|-----------------------------------|-----------|-------------|
| Offset                    | Distance of element movement      | `50`      | Higher values create more dramatic movement during animation |
| Breakpoint                | Device size compatibility         | `All`     | Allows you to disable animations on specific device types |
| Enable Scroll Smoother    | Enhances scroll-based animations  | `Yes`     | Creates more fluid animations during page scrolling |
| Speed                     | Scroll animation rate             | `0.9`     | Fine-tunes how animation responds to scroll speed |
| Lag                       | Intentional animation delay       | `0`       | Creates parallax effects between different page elements |

## Implementation Tips

#### For Better Performance
Animations can impact page load time and scrolling smoothness. To optimize performance:

- Use simple animations for mobile devices
- Limit the number of simultaneous animations
- Disable `Enable On Editor` when building pages
- Use shorter durations (0.3-0.8s) for small elements

#### Creating Professional Effects
To achieve polished, professional results:

- Use consistent animation types throughout your site
- Create subtle entrance effects with small offset values (20-50)
- Implement sequential animations using increasing delay values (0.1s, 0.2s, 0.3s)
- Test animations at different scroll speeds

#### Troubleshooting
If animations aren't working as expected:

- Verify "Animation on scroll" is enabled
- Check if `Enable Scroll Smoother` requires global settings activation
- Test on different devices to ensure responsive behavior
- Examine for conflicts with other animated elements