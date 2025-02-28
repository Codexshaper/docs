# Creating a Widget in CodexShaper Framework

## 1. Create Using CLI

You can quickly generate a widget using the command-line interface (CLI) in CodexShaper Framework.

##### Command:

```sh
php wp cmf-el-module:make {module-name} [options]
```

##### Available Flags:
- **`--skip-css` or `--skip:css`** → Skips generating the CSS file.
- **`--query`** → Creates a custom queryable widget.
- **`--slider`** → Generates a slider widget and includes a JavaScript file.

##### Example:
```sh
php wp cmf-el-module:make custom-menu
```
##### Example with Flags:
- Skipping CSS:
  ```sh
  php wp cmf-el-module:make custom-menu --skip-css
  ```
- Creating a queryable widget:
  ```sh
  php wp cmf-el-module:make custom-widget --query
  ```
- Creating a slider widget (also generates a JS file):
  ```sh
  php wp cmf-el-module:make custom-slider --slider
  ```

##### Expected CLI Response:

```sh
Success: The module {module-name}'s module directory has been created.
Success: The module file has been created.
Success: The module {module-name}'s widgets directory has been created.
Success: The widget file has been created.
Success: The module {module-name}'s view directory has been created.
Success: The view file has been created.
Success: The module {module-name}'s config file has been created.
Success: The module {module-name}'s CSS file has been created. (Skipped if --skip-css is used)
Success: The module {module-name}'s JS file has been created. (Only for --slider)
```

##### Generated Files and Directories:

- **Module Directory:** `/codexshaper-framework/widgets/elementor/modules/{module-name}`
- **Module File:** `/codexshaper-framework/widgets/elementor/modules/{module-name}/module.php`
- **Widget Directory:** `/codexshaper-framework/widgets/elementor/modules/{module-name}/widgets`
- **Widget File:** `/codexshaper-framework/widgets/elementor/modules/{module-name}/widgets/{module-name}.php`
- **View Directory:** `/codexshaper-framework/widgets/elementor/views/{module-name}`
- **View File:** `/codexshaper-framework/widgets/elementor/views/{module-name}/content.view.php`
- **Config File:** `/codexshaper-framework/widgets/elementor/modules/{module-name}/module.json`
- **CSS File:** `/codexshaper-framework/widgets/elementor/assets/css/cmf--{module-name}.min.css`
- **JS File:** `/codexshaper-framework/widgets/elementor/assets/js/cmf--{module-name}.min.js`

---

> [!WARNING]
> The JS file is not generated automatically unless the `--slider` flag is used. 
> You have to create and register it manually for other widget types, If you need.
> Please See
> [Creating css & js](#creating-css-js)


## 2. Creating Manually

#### Step 1: Navigate to Module Directory

```sh
## Go to:

/{project-root}/wp-content/plugins/codexshaper-framework/widgets/elementor/modules
```

#### Step 2: Create the Module Directory

Create a directory with your module name `{module-name}`.

<pre>
├── custom-menu
│   ├── --
│   ├── --
</pre>

#### Step 3: Create `module.php`

Inside your module directory, create a `module.php` file and add the following code:

<pre>
├── custom-menu
│   ├── module.php
</pre>

```php
<?php
namespace CodexShaper\Framework\Widgets\Elementor\Modules\CustomMenu;

if (!defined('ABSPATH')) {
    exit;
}

use CodexShaper\Framework\Foundation\Elementor\Module as BaseModule;

class Module extends BaseModule {
    public function get_name() {
        return 'cmf--custom-menu';
    }

    public function get_widgets() {
        return ['Custom_Menu'];
    }
}
```

#### Step 4: Create `module.json`

Inside your module directory, create a `module.json` file and add the following code:

<pre>
├── custom-menu
│   ├── module.json
│   ├── module.php
</pre>

```json
{
  "name": "custom-menu",
  "slug": "custom-menu",
  "title": "Custom Menu",
  "icon": "eicon-archive",
  "version": "1.0.0",
  "widgets": ["Custom_Menu"],
  "author": "CodexShaper",
  "author_uri": "https://framework.codexshaper.com",
  "description": "Custom Menu Module for Elementor",
  "module_uri": "https://framework.codexshaper.com/elementor/modules/custom-menu",
  "is_pro": false,
  "is_active": true
}
```

#### Step 5: Create `widgets` Directory

Inside your module directory, create a `widgets` directory

<pre>
├──custom-menu
|   ├── widgets
│   ├── module.json
│   ├── module.php
</pre>

#### Step 6: Create Widget File

Inside the `widgets` directory, create a PHP file named `{module-name}.php`. In our example, the file name will be `custom-menu.php`.

<pre>
├── custom-menu
|   ├── widgets
|   |   ├── custom-menu.php
│   ├── module.json
│   ├── module.php
</pre>

###### Example `custom-menu.php`:

```php
<?php
namespace CodexShaper\Framework\Widgets\Elementor\Modules\CustomMenu\Widgets;

use CodexShaper\Framework\Foundation\Elementor\Widget;
use Elementor\Controls_Manager;

if (!defined('ABSPATH')) {
    exit();
}

class Custom_Menu extends Widget {
    public function get_name() {
        return 'cmf--custom-menu';
    }

    public function get_title() {
        return __('CMF Custom Menu', 'textdomain');
    }

    public function get_icon() {
        return 'eicon-apps';
    }

    public function get_keywords() {
        return ['Custom Menu', 'CodexShaper', 'Framework', 'CMF'];
    }

    public function get_categories() {
        return ['cmf--widget'];
    }

    public function get_style_depends(): array {
        return ['cmf--custom-menu'];
    }

    protected function register_controls() {
		// Register layout controls.
        $this->register_layout_controls();
		// Register style controls.
        $this->register_style_controls();
    }

    protected function register_layout_controls() {
		$this->start_controls_section( 'section_layout', [
                'label' => __('Layout', 'textdomain'),
                'tab' => Controls_Manager::TAB_CONTENT,
            ]
        );
        $this->end_controls_section();
	}

    protected function register_style_controls() {
        $this->start_controls_section('section_style', [
            'label' => __('Style', 'textdomain'),
            'tab' => Controls_Manager::TAB_STYLE,
        ]);
        $this->end_controls_section();
    }

    protected function render() {
        $settings = $this->get_settings_for_display();
        cmf_view('custom-menu.content', compact('settings'));
    }
}
```

#### Step 7: Create the views Directory

```sh
## Go to:

{project-root}/wp-content/plugins/codexshaper-framework/widgets/elementor/views
```
Inside your views directory, create a directory with same module name `{module-name}`. (e.g. custom-menu)

<pre>
├── views
│   ├── custom-menu
|   |   ├── --
</pre>

#### Step 8: Create Views File

Inside the `views` directory, create a PHP file named `content.view.php`.

<pre>
├── views
|   ├── custom-menu
|   |   ├── content.view.php
│   
</pre>

###### Example `content.view.php`:

```php
<?php if (!defined('ABSPATH')) exit; ?>

<div class="cmf-custom-menu">
    <p><?php echo esc_html__('This is the Custom Menu widget view.', 'textdomain'); ?></p>
</div>
```

## 3. Creating CSS and JS Files (Optional){#creating-css-js}

###### CSS:

```sh
## Go to:

/{project-root}/wp-content/plugins/codexshaper-framework/widgets/elementor/assets/css/
```

Inside css directory, create a CSS file `cmf--{module-name}.min.css`.

<pre>
├── assets
|   ├── css
|   |   ├── cmf--custom-menu.min.css
|   |   ├── --
│   ├── js
│   |
</pre>

Register the CSS file in `module.php`:

```php
public function register_styles() {
    wp_register_style(
        'cmf--custom-menu',
        $this->get_css_assets_url('cmf--custom-menu', null, true, true),
        [],
        CMF_APP_VERSION
    );
}
```

###### JS (Required for --slider, Manual for Others):



```sh
# Go to:

/{project-root}/wp-content/plugins/codexshaper-framework/widgets/elementor/assets/js/
```

Inside js directory, create a JS file `cmf--{module-name}.min.js`.

<pre>
├── assets
│   ├── css
|   ├── js
|   |   ├── cmf--custom-menu.min.js
|   |   ├── --
│   |
</pre>

Register the JS file in `module.php`:

```php
public function register_scripts() {
    $widget_js_file = CMF_PATH . 'widgets/elementor/assets/js/cmf--custom-menu.min.js';
    $version = file_exists($widget_js_file) ? filemtime($widget_js_file) : CMF_VERSION;

    wp_register_script(
        'cmf--custom-menu',
        $this->get_js_assets_url('cmf--custom-menu', null, true, true),
        array(),
        $version,
        $widget_js_file,
        array('in_footer' => true)
    );
}
```

---

Now, your custom widget is successfully created and ready to be used in Elementor with CodexShaper Framework!