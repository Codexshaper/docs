# CodexShaper Framework Installation Guide

You can install the **CodexShaper Framework** in two ways:

1. Using as a Plugin (Recommended)
2. Integrating Inside a Theme

---

### ✅ Using as a Plugin (Recommended)

1. **Download the Plugin**

    - Get the installable **CodexShaper Framework** ZIP file.

2. **Upload & Activate the Plugin**

    - Go to your `WordPress Dashboard` → `Plugins` → `Add New`.
    - Click `Upload Plugin`, select the downloaded ZIP file, and click `Install Now`.
    - After installation, click `Activate`.

3. **Configure the Plugin**

    - Once activated, navigate to the **CodexShaper Framework** Settings to configure the options as needed.

---

### 📂 Using Inside a Theme

1. **Download and Extract the Plugin ZIP**

    - Download the **CodexShaper Framework** ZIP file.
    - Extract the ZIP file inside your theme folder. For example:
    ```
    /wp-content/themes/theme-name/inc/codexshaper-framework
    ```
    - Or, you can place it anywhere within your theme directory.

2. **Include the Framework in Your Theme**

    - Open your theme's `functions.php` file.
    - Add the following code to include the framework:
    ```
    /**
    * CodexShaper Framework
    * An all-in-one MVC framework for WordPress Themes and Plugins
    */
    require_once get_theme_file_path() . '/inc/codexshaper-framework/codexshaper-framework.php';
    ```

3. **Done!**

    - The **CodexShaper Framework** is now integrated with your theme.
    - Customize and configure the framework as needed.

--- 

By following these steps, you can easily use the **CodexShaper Framework** either as a standalone plugin or 
seamlessly integrated into your WordPress theme.
