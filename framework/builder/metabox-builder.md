# Custom Metabox

<!-- ## 1. Create Using CLI

##### General Command:
```sh
php wp cmf-make:metabox {custom_metabox_name}
```
##### With Specific Post Type:
```sh
php wp cmf-make:metabox {custom_metabox_name} --screen={post_type_name}
```

- **`{custom_metabox_name}`** → Your metabox name.
- **`{post_type_name}`** → The custom post type name under which you want to set your metabox. If **omitted**, by default it will show only under `post` **Post Type**.

##### Naming Conventions:
- **UpperCamelCase**: `CustomMetaboxName` (Recommended)
- **camelCase**: `customMetaboxName`
- **snake_case**: `custom_metabox_name`
- **kebab-case**: `custom-metabox-name`
- **Mixed**: `customMetabox_Name`, `custom-metabox_name`, `Custom_metabox-name`

> [!INFO]
> All formats are converted to `UpperCamelCase` to follow the PSR-4 standard.

> [!IMPORTANT]
> You **cannot** use `Metabox` as a name since it is a reserved word in the framework.
>  Check [reserved words here](/framework/reserved-words.html).

<p class="space"></p>

##### Example:
```sh
php wp cmf-make:metabox TestMetabox
```

This command will generate all necessary files and directories to register the Metabox.

##### Expected CLI Response:
```
Success: The metabox TestMetabox's metabox directory has been created at ...
Skipped if Metaboxes directory already exists(for comment)
Success: The metabox TestMetabox's metabox file has been created at ...
```

##### Generated Files and Directories:
- **Metabox Directory (Skipped if Metaboxes directory already exists):** `/wp-content/plugins/codexshaper-framework/src/Metaboxes`
- **Metabox File:** `/wp-content/plugins/codexshaper-framework/src/Metaboxes/TestMetabox.php`

<p class="space"></p>

##### Necessary Methods
| Method               	| Return         	| Default 	| Description |
|-----------------------|-------------------|-----------|-------------|
| `get_screen()`       	| `array\|string` 	| post    	| Specify one or more post types where the metabox should appear. |
| `register_sections()` | -             	| -       	| Register section and field for the metabox. | -->

## 1. Using Option Builder
A powerful **Option Builder** allows easy creation of Metaboxes. 

##### Example: Creating `portfolio-option` metabox for `portfolio` post type.
```php
$prefix = 'cmf_metabox';

Metabox::create(
	$prefix . '_portfolio_options',
	array(
		'title'     => esc_html__( 'Portfolio Options', 'textdomain' ),
		'post_type' => 'portfolio',
	)
);

Section::create(
	$prefix . '_portfolio_options',
	array(
		'title'  => esc_html__( 'Portfolio Info', 'textdomain' ),
		'fields' => array(
			array(
				'id'    => 'portfolio_title',
				'type'  => 'text',
				'title' => esc_html__( 'Portfolio Title', 'textdomain' ),
			),
			array(
				'id'    => 'portfolio_thumbnail',
				'type'  => 'media',
				'title' => esc_html__( 'Portfolio Thumbnail', 'textdomain' ),
			),
		),
	)
);
```

##### Arguments
| Name        	| Type            	| Default 	| Description |
|---------------|-------------------|-----------|-------------|
| `title`    	| `string`		  	| -       	| The label that appears above the field. |
| `post_type`	| `array\|string` 	| `post`   	| Specify one or more post types where the metabox should appear. |
| `fields`   	| `array`      		| -       	| Specify one or more fields for the metabox. |
| `id`       	| `string`     		| -       	| Identifier for the field. |
| `type`     	| `string`     		| `text`    | Field type. |


<!-- ## 3. Creating from Dashboard
1. In your WordPress Admin Dashboard, navigate to **CodexShaper Framework**
2. Click on **Custom Metaboxes** in the sidebar.
3. The process involves three main steps:
    - Creating the Custom Metabox
    - Adding Sections to the Metabox
    - Adding Fields to the Sections

#### 1. Creating the Custom Metabox

<p class="cmf--img-wrapper">
    <img src="/assets/framework/images/custom-metabox/create-metabox.png" alt="Custom Metabox Interface">
</p>

| Name                  | Type    	| Default 	| Description |
|-----------------------|-----------|-----------|-------------|
| `Metabox ID`         	| `string` 	| -       	| A unique identifier for your metabox (e.g., `portfolio_option`). |
| `Singular Name`      	| `string` 	| -       	| The singular label (e.g., `Portfolio Option`). |
| `Plural Name`        	| `string` 	| -       	| The plural label (e.g., `Portfolio Options`). |
| `Front Slug`        	| `string` 	| -       	| A slug that can be used for the front-end (optional). |
| `Select Object`     	| `string` 	| -       	| Choose the post type (e.g., `post`, `portfolio`, or custom type). |
| `Is Public`         	| `bool`   	| `true`    | Toggle to set if the metabox is public. |
| `Publicly Queryable` 	| `bool`   	| `true`    | Determines if this metabox can be queried in front-end requests. |
| `Show in UI`        	| `bool`   	| `true`    | Choose whether this metabox should appear in the UI. |
| `Show in Admin Menu` 	| `bool`   	| `true`    | Toggle to show or hide in admin menus. |
| `Show in Nav Menu`  	| `bool`   	| `false`	| Toggle to show or hide in navigation menus. |
| `Show in Reset`     	| `bool`   	| `false`	| - |
| `Is Active`        	| `bool`   	| `true`    | Set this to **Yes** to activate the metabox.|

After filling in all required fields, click **Save** (top-right corner).

<p class="space"></p>

#### 2. Adding Sections to the Metabox
Sections help organize fields within your metabox. You can have multiple sections inside a single metabox.

<p class="cmf--img-wrapper">
    <img src="/assets/framework/images/custom-metabox/create-metabox-section.png" alt="Custom Metabox Section">
</p>

##### Arguments
| Name            	| Type    	| Default 	| Description |
|-------------------|-----------|-----------|-------------|
| `Metabox ID`   	| `string` 	| -       	| Select the Metabox you created in the previous step (e.g., `portfolio_option`). |
| `Section ID`   	| `string` 	| -       	| A unique identifier for this section (e.g., `portfolio_info`). |
| `Section Title` 	| `string` 	| -       	| A descriptive title (e.g., `Portfolio Info`). |
| `Section Parent` 	| `string` 	| -       	| If you have multiple sections, you can nest them. Otherwise, leave blank or select “None.” |
| `Is Active`    	| `bool`   	| `true`	| Set this to **Yes** to activate the metabox. |


After filling in all required fields, click **Save** (top-right corner).

<p class="space"></p>

#### 3. Adding Fields to the Sections
Once you have a Metabox and a Section, you can add Fields to collect or display specific data.

<p class="cmf--img-wrapper">
    <img src="/assets/framework/images/custom-metabox/create-metabox-section-field.png" alt="Custom Metabox Field">
</p>

##### Arguments
| Name               	| Type    	| Default | Description |
|-----------------------|-----------|---------|-------------|
| `Section ID`      	| `string` 	| -       | Select the section you created (e.g., `portfolio_info`). |
| `Field ID`        	| `string` 	| -       | A unique identifier for the field (e.g., `portfolio_title`). |
| `Field Type`      	| `string` 	| -       | The type of field you want to create (e.g., `text`, `upload`, etc.). |
| `Field Title`     	| `string` 	| -       | The label/title of the field (e.g., `Portfolio Title`). |
| `Field Options`   	| `string` 	| -       | - |
| `Field Default`   	| `string` 	| -       | The default value of this field. |
| `Field Subtitle`  	| `string` 	| -       | A short title describing the field’s purpose. |
| `Field Description` 	| `bool`  	| -       | A short description of the field’s purpose. |
| `Field Class`     	| `string` 	| -       | Add any custom CSS classes. |
| `Field Dependency` 	| `string` 	| -       | If this field depends on another field’s value, configure it here. |
| `Field Attributes` 	| `string` 	| -       | Set additional HTML attributes or custom data attributes. |
| `Is Active`      		| `bool`   	| `true`  | Set this to **Yes** to activate the metabox. |

After filling in all required fields, click **Save** (top-right corner).


#### Viewing Your Custom Metabox
- Go to the post type or taxonomy you attached the metabox to (e.g., **Posts**, **Pages**, **Portfolio**, or a custom post type).
- Edit or add a new post. You should see your new **Custom Metabox** with the **Sections** and **Fields** you created. -->

## 2. Creating Manually

##### Steps:
1. Navigate to:
   ```sh
   {project_root}/wp-content/plugins/codexshaper-framework/src/Metaboxes
   ```
2. Create a file using `UpperCamelCase.php` naming convention (e.g., `TestMetabox.php`).
3. Open the file in a text editor and insert the following code:

```php
<?php

namespace CodexShaper\Framework\MetaBoxes;
use CodexShaper\Framework\Foundation\MetaBox;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

class TestMetabox extends MetaBox
{
	public function __construct() {
		// Do your settings here

		parent::__construct();
	}

	public function get_id() {
        return 'cmf_test_metabox';
    }

	public function get_title() {
        return 'Test Metabox';
    }

	public function get_screen() {
        return array( 'post' );
    }

	public function register_sections() {
		$this->add_section([
			'title' => esc_html__('Test Metabox Section', 'textdomain'),
			'fields' => array(
				array(
					'id'    => 'test_metabox_title',
					'type'  => 'text',
					'title' => esc_html__( 'Test Metabox Title', 'textdomain' ),
				),
				array(
					'id'    => 'test_metabox_icon',
					'type'  => 'media',
					'title' => esc_html__( 'Test Metabox Icon', 'textdomain' ),
				),
			),
		]);
	}
}
```
You should see your new **Test Metabox** with the **Sections** and **Fields** you created.
<p class="cmf--img-wrapper">
    <img src="/assets/framework/images/custom-metabox/metabox-example.png" alt="Custom Metabox Example">
</p>