# Extension Management

## Introduction
The Extension Settings page allows you to enable or disable functionality extensions that enhance the CodexShaper Framework. Extensions typically add site-wide functionality or developer tools.

## Accessing Extension Settings
Go to `CodexShaper Framework >> Settings`

<p class="cxf--img-wrapper">
    <img src="/public/assets/framework/images/settings/extension-settings.png" alt="Module Settings Interface">
</p>

## Managing Extensions

<!-- #### Enable/Disable All Extensions
- To enable all extensions, toggle the **Enable All** switch to `YES`.
- To disable all extensions, toggle the **Disable All** switch to `NO`. -->


### Managing Individual Extensions (GSAP)

Each extension can be individually toggled `YES` or `NO` using the toggle switch. Below is detailed information about each available extension.

#### 1. GSAP

**Purpose:** Integrates the GreenSock Animation Platform (GSAP) for advanced animations.

**When to use:** Enable this extension when you want to implement sophisticated animations.

**Benefits:**
- Professional-quality animations
- Cross-browser compatibility
- Performance optimization
- Timeline-based animation sequencing

#### 2. Smooth Scroller

**Purpose:** Provides smooth scrolling behavior for desktop users.

**When to use:** Enable this extension when you want to enhance the browsing experience with fluid page scrolling rather than the default jump scrolling.

**Benefits:**
- Improved user experience
- More natural feeling navigation
- Enhanced parallax effect support

**Configuration options:**
- Smooth Amount: Controls the intensity of the smooth scrolling effect (higher values create slower, more pronounced smoothing)

#### 3. Mobile Smooth Scroller

**Purpose:** Extends smooth scrolling functionality to mobile devices.

**When to use:** Enable this extension when you want consistent smooth scrolling behavior across all devices, including smartphones and tablets.

**Benefits:**
- Consistent user experience across devices
- Mobile-optimized performance
- Touch gesture integration

**Configuration options:**
- Uses the same Smooth Amount setting as the standard Smooth Scroller

>[!NOTE]
> Mobile smooth scrolling should be implemented cautiously as it may interfere with native mobile scrolling behaviors on some devices. Test thoroughly on multiple devices before deploying to production.