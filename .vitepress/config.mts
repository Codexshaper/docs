import { defineConfig } from "vitepress";

export default defineConfig({
  head: [
    ["link", { rel: "stylesheet", href: "/assets/css/custom.css" }],
    ["link", { rel: "stylesheet", href: "/assets/css/cmf.css" }],
    ["script", { src: "/assets/js/custom.js" }],
  ],
  title: "CodexShaper",
  base: "/",
  themeConfig: {
    nav: [
      {
        text: "Documentation",
        items: [
          { text: "Edulab LMS", link: "/edulab/overview" },
          { text: "CodexShaper Framework", link: "/framework/overview" },
        ],
      },
    ],
    search: {
      provider: "local",
    },
    socialLinks: [{ icon: "github", link: "https://github.com/CodexShaper" }],
    sidebar: {
      "/framework/": [
        {
          text: "Getting Started",
          collapsed: false,
          items: [
            { text: "Overview", link: "/framework/overview" },
            { text: "Installation", link: "/framework/Installation" },
          ],
        },

        // {
        //   text: "Architecture Concept",
        //   collapsed: true,
        //   items: [
        //     { text: "Service Container", link: "/framework/service-container" },
        //     { text: "Service Provider", link: "/framework/service-provider" },
        //     { text: "Facades", link: "/framework/facades" },
        //   ],
        // },

        {
          text: "Builders",
          collapsed: true,
          items: [
            { text: "Widget Builder", link: "/framework/builder/widget-builder" },
            { text: "CPT Builder", link: "/framework/builder/cpt-builder" },
            { text: "Taxonomy Builder", link: "/framework/builder/taxonomy-builder" },
            { text: "Metabox Builder", link: "/framework/builder/metabox-builder" },
            { text: "Option Builder", link: "/framework/builder/option-builder" },
          ],
        },

        // {
        //   text: "Dynamic Builders",
        //   collapsed: true,
        //   items: [
        //     { text: "Dynamic Post Types", link: "/framework/dynamic-post-types" },
        //     { text: "Dynamic Taxonomies", link: "/framework/dynamic-taxonomies" },
        //     { text: "Dynamic Metaboxes", link: "/framework/dynamic-metaboxes" },
        //   ],
        // },

        {
          text: "Extensions",
          collapsed: true,
          items: [
            {
              text: "Animation",
              collapsed: true,
              items: [
                { text: "Animation", link: "/framework/extensions/animation/animation" },
                // { text: "Horizontal Scroll", link: "/framework/extensions/animation/horizontal-scroll" },
                { text: "Image Animation", link: "/framework/extensions/animation/image-animation" },
                // { text: "Sticky Animation", link: "/framework/extensions/animation/sticky-animation" },
                { text: "Text Animation", link: "/framework/extensions/animation/text-animation" },
              ],
            },
            {
              text: "Elementor",
              collapsed: true,
              items: [
                { text: "Custom Attribute", link: "/framework/extensions/elementor/custom-attribute" },
                { text: "Custom CSS", link: "/framework/extensions/elementor/custom-css" },
                // { text: "Custom Icon", link: "/framework/extensions/elementor/custom-icon" },
                // { text: "Popup", link: "/framework/extensions/elementor/popup" },
                // { text: "Skin", link: "/framework/extensions/elementor/skin" },
                // { text: "Slider", link: "/framework/extensions/elementor/slider" },
                { text: "Wrapper Link", link: "/framework/extensions/elementor/wrapper-link" },
              ],
            },
            {
              text: "Wordpress",
              collapsed: true,
              items: [{ text: "Custom Font", link: "/framework/extensions/wordpress/custom-font" }],
            },
            {
              text: "Theme Builders",
              collapsed: true,
              items: [
                { text: "Overview", link: "/framework/theme-builder/overview" },
                { text: "Header", link: "/framework/theme-builder/header" },
                { text: "Footer", link: "/framework/theme-builder/footer" },
                { text: "Archive", link: "/framework/theme-builder/archive" },
                { text: "Single", link: "/framework/theme-builder/single" },
              ],
            },
          ],
        },

        {
          text: "Field Types",
          collapsed: true,
          items: [
            { text: "Accordion", link: "/framework/fields/accordion" },
            { text: "Backup", link: "/framework/fields/backup" },
            { text: "Callback", link: "/framework/fields/callback" },
            { text: "Heading", link: "/framework/fields/heading" },
            { text: "Media", link: "/framework/fields/media" },
            { text: "Repeater", link: "/framework/fields/repeater" },
            { text: "Select", link: "/framework/fields/select" },
            { text: "Switcher", link: "/framework/fields/switcher" },
            { text: "Text", link: "/framework/fields/text" },
            { text: "Textarea", link: "/framework/fields/textarea" },
            { text: "Upload", link: "/framework/fields/upload" },
          ],
        },

        {
          text: "Widgets",
          collapsed: true,
          items: [
            {
              text: "General Elements",
              collapsed: true,
              items: [
                { text: "Title", link: "/framework/widgets/general-elements/title" },
                { text: "Text", link: "/framework/widgets/general-elements/text" },
                { text: "Button", link: "/framework/widgets/general-elements/button" },
                { text: "Icon Box", link: "/framework/widgets/general-elements/icon-box" },
                { text: "Image Box", link: "/framework/widgets/general-elements/image-box" },
                { text: "Video Popup", link: "/framework/widgets/general-elements/video-popup" },
                { text: "Team Member", link: "/framework/widgets/general-elements/team-member" },
                { text: "Social Icons", link: "/framework/widgets/general-elements/social-icons" },
                { text: "Progressbar", link: "/framework/widgets/general-elements/progressbar" },
                { text: "Marquee", link: "/framework/widgets/general-elements/marquee" },
              ],
            },
            {
              text: "Special Elements",
              collapsed: true,
              items: [
                { text: "Nav Menu", link: "/framework/widgets/special-elements/nav-menu" },
                { text: "Offcanvas", link: "/framework/widgets/special-elements/offcanvas" },
                { text: "Social Share", link: "/framework/widgets/special-elements/social-share" },
                { text: "Search", link: "/framework/widgets/special-elements/search" },
                { text: "Testimonial Slider", link: "/framework/widgets/special-elements/testimonial-slider" },
              ],
            },
            {
              text: "Post Elements",
              collapsed: true,
              items: [
                { text: "Post Title", link: "/framework/widgets/post-elements/post-title" },
                { text: "Post Excerpt", link: "/framework/widgets/post-elements/post-excerpt" },
                { text: "Post Meta", link: "/framework/widgets/post-elements/post-meta" },
                { text: "Post Navigation", link: "/framework/widgets/post-elements/post-navigation" },
                { text: "Featured Image", link: "/framework/widgets/post-elements/featured-image" },
                { text: "Recent Post", link: "/framework/widgets/post-elements/recent-post" },
                { text: "Post Comments", link: "/framework/widgets/post-elements/post-comments" },
                { text: "Blog Grid", link: "/framework/widgets/post-elements/blog-grid" },
                { text: "Blog Slider", link: "/framework/widgets/post-elements/blog-slider" },
                { text: "Service Grid", link: "/framework/widgets/post-elements/service-grid" },
                { text: "Service Slider", link: "/framework/widgets/post-elements/service-slider" },
                { text: "Portfolio Grid", link: "/framework/widgets/post-elements/portfolio-grid" },
                { text: "Portfolio Slider", link: "/framework/widgets/post-elements/portfolio-slider" },
              ],
            },
          ],
        },

        {
          text: "Settings",
          collapsed: true,
          items: [
            { text: "Module", link: "/framework/settings/modules" },
            { text: "Extensions", link: "/framework/settings/extensions" },
            // { text: "Integration", link: "/framework/settings/integration" },
          ],
        },

        {
          text: "List of Reserved Words",
          link: "/framework/reserved-words",
        },

        {
          text: "Release",
          collapsed: true,
          items: [
            // { text: "v2.0.0", link: "/framework/releases/v-demo" },
            { text: "Initial Release", link: "/framework/releases/initial-release" },
          ],
        },
      ],

      "/holaa/": [
        {
          text: "Overview",
          link: "/holaa/overview",
        },

        {
          text: "Release",
          collapsed: false,
          items: [{ text: "Release Notes", link: "/holaa/releases" }],
        },

        {
          text: "Getting Started",
          collapsed: false,
          items: [{ text: "Installation", link: "/holaa/Installation" }],
        },

        {
          text: "Usage",
          collapsed: false,
          items: [
            { text: "Introduction", link: "/introduction" },
            { text: "Getting Started", link: "/getting-started" },
          ],
        },
      ],

      "/edulab/": [
        {
          text: "Overview",
          link: "/edulab/overview",
        },

        {
          text: "Release",
          collapsed: false,
          items: [{ text: "Release Notes", link: "/edulab/releases" }],
        },

        {
          text: "Getting Started",
          collapsed: false,
          items: [
            { text: "Installation", link: "/edulab/Installation" },
            { text: "Update", link: "/edulab/update" },
          ],
        },

        {
          text: "Usage",
          collapsed: false,
          items: [
            {
              text: "Admin Dashboard",
              collapsed: true,
              items: [
                { text: "Language", link: "/edulab/admin/language" },
                {
                  text: "Localization",
                  collapsed: true,
                  items: [
                    { text: "Country", link: "/edulab/admin/country" },
                    { text: "State", link: "/edulab/admin/state" },
                    { text: "City", link: "/edulab/admin/city" },
                    { text: "Time Zone", link: "/edulab/admin/time-zone" },
                  ],
                },
                {
                  text: "Icon & Provider ",
                  link: "/edulab/admin/icon-provider",
                },
                { text: "Category", link: "/edulab/admin/category" },
                {
                  text: "Meeting Provider",
                  link: "/edulab/admin/meeting-provider",
                },
                {
                  text: "Course Manage",
                  collapsed: true,
                  items: [
                    { text: "Subject", link: "/edulab/admin/subject" },
                    { text: "Level", link: "/edulab/admin/level" },
                    {
                      text: "Create Course",
                      link: "/edulab/admin/create-course",
                    },
                    {
                      text: "Create Curriculum",
                      link: "/edulab/admin/curriculum-course",
                    },
                    { text: "Topic", link: "/edulab/admin/topic" },
                    { text: "Create Quiz", link: "/edulab/admin/quiz-create" },
                    {
                      text: "Create Course Bundle",
                      link: "/edulab/admin/create-course-bundle",
                    },
                  ],
                },

                {
                  text: "Student Manage",
                  link: "/edulab/admin/student-manage",
                },
                {
                  text: "Organization Manage",
                  link: "/edulab/admin/organization-manage",
                },
                {
                  text: "Instructor Manage",
                  link: "/edulab/admin/instructor-manage",
                },
                {
                  text: "Business Marketing",
                  collapsed: false,
                  items: [
                    {
                      text: "Coupon Manage",
                      link: "/edulab/admin/coupon-manage",
                    },
                  ],
                },
                {
                  text: "Testimonial Manage",
                  link: "/edulab/admin/testimonial-manage",
                },
                {
                  text: "Blog Manage",
                  collapsed: false,
                  items: [
                    {
                      text: "Blog Category",
                      link: "/edulab/admin/blog-category",
                    },
                    { text: "Blog", link: "/edulab/admin/blog-manage" },
                  ],
                },

                { text: "Notices board", link: "/edulab/admin/notice-board" },
                {
                  text: "Backend Settings",
                  link: "/edulab/admin/backend-settings",
                },

                {
                  text: "Theme Settings",
                  collapsed: false,
                  items: [
                    {
                      text: "Theme Activation",
                      link: "/edulab/admin/theme/theme-settings",
                    },
                    { text: "Setting", link: "/edulab/admin/theme/setting" },
                  ],
                },

                {
                  text: "Staff Manage",
                  collapsed: false,
                  items: [
                    {
                      text: "Permissions",
                      link: "/edulab/admin/staff-permissions",
                    },
                    { text: "Roles", link: "/edulab/admin/staff-role" },
                    { text: "Users", link: "/edulab/admin/staff-users" },
                  ],
                },
                {
                  text: "Payment Method",
                  link: "/edulab/admin/payment-method",
                },
                {
                  text: "Certificate Manage",
                  link: "/edulab/admin/certificate-manage",
                },
                { text: "Faq Manage", link: "/edulab/admin/faq-manage" },
              ],
            },

            {
              text: "Instructor Dashboard",
              collapsed: true,
              items: [
                {
                  text: "Course Manage",
                  collapsed: true,
                  items: [
                    { text: "Course", link: "/edulab/instructor/course" },
                    {
                      text: "Create Curriculum",
                      link: "/edulab/instructor/create-curriculum",
                    },
                    {
                      text: "Topic",
                      link: "/edulab/instructor/topic",
                    },
                    {
                      text: "Create Quiz",
                      link: "/edulab/instructor/quiz-create",
                    },
                    {
                      text: "Create Course Bundle",
                      link: "/edulab/instructor/bundle-course",
                    },
                  ],
                },
                {
                  text: "Student Manage",
                  link: "/edulab/instructor/student-manage",
                },
                {
                  text: "Quizes",
                  link: "/edulab/instructor/quizes",
                },
                {
                  text: "Assignments",
                  link: "/edulab/instructor/assignment",
                },
                {
                  text: "Noties Board",
                  link: "/edulab/instructor/notiesboard",
                },
                {
                  text: "Notifications",
                  link: "/edulab/instructor/notifications",
                },
                {
                  text: "Support Ticket",
                  collapsed: true,
                  items: [
                    {
                      text: "Support Ticket",
                      link: "/edulab/instructor/support-ticket",
                    },

                    {
                      text: "Student Support",
                      link: "/edulab/instructor/student-support",
                    },
                  ],
                },
              ],
            },

            {
              text: "Organization Dashboard",
              collapsed: true,
              items: [
                {
                  text: "Instructor Manage",
                  link: "/edulab/organization/instructor-manage.md",
                },
                {
                  text: "Course Manage",
                  collapsed: true,
                  items: [
                    { text: "Course", link: "/edulab/organization/course" },
                    {
                      text: "Create Curriculum",
                      link: "/edulab/organization/create-curriculum",
                    },
                    {
                      text: "Topic",
                      link: "/edulab/organization/topic",
                    },
                    {
                      text: "Create Quiz",
                      link: "/edulab/organization/create-quiz",
                    },
                    {
                      text: "Create Course Bundle",
                      link: "/edulab/organization/bundle-course",
                    },
                  ],
                },
                {
                  text: "Student Manage",
                  link: "/edulab/organization/student-manage",
                },

                {
                  text: "Noties Board",
                  link: "/edulab/organization/notiesboard",
                },
                {
                  text: "Notifications",
                  link: "/edulab/organization/notifications",
                },
                {
                  text: "Support Ticket",
                  collapsed: true,
                  items: [
                    {
                      text: "Support Ticket",
                      link: "/edulab/organization/support-ticket",
                    },
                  ],
                },
              ],
            },

            {
              text: "Student Dashboard",
              collapsed: true,
              items: [
                {
                  text: "Course Manage",
                  link: "/edulab/student/course-manage",
                },

                {
                  text: "Notifications",
                  link: "/edulab/student/notifications",
                },
                {
                  text: "Quizzes",
                  link: "/edulab/student/quizzes",
                },
                {
                  text: "Support Ticket",
                  collapsed: true,
                  items: [
                    {
                      text: "Support Ticket",
                      link: "/edulab/student/support-ticket",
                    },

                    {
                      text: "Course Support",
                      link: "/edulab/student/course-support",
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],

      "/dashkit-laravel": [
        {
          text: "Overview",
          collapsed: false,
          items: [
            {
              text: "Overview",
              link: "/dashkit-laravel/overview",
            },
          ],
        },

        {
          text: "Realese",
          collapsed: false,
          items: [
            {
              text: "Realese Note",
              link: "/dashkit-laravel/releases",
            },
          ],
        },

        {
          text: "Getting Started",
          collapsed: false,
          items: [
            {
              text: "Installation",
              link: "/dashkit-laravel/installation",
            },
            {
              text: "Update",
              link: "/dashkit-laravel/update",
            },
          ],
        },

        {
          text: "Usage",
          collapsed: false,
          items: [
            {
              text: "Dashboard",
              collapsed: false,
              items: [
                {
                  text: "LMS-Admin Dashboard",
                  link: "/dashkit-laravel/dashboard/lms-admin-dashboard",
                },
                {
                  text: "Analytic Dashboard",
                  link: "/dashkit-laravel/dashboard/analytic-dashboard",
                },
                {
                  text: "Online Course Dashboard",
                  link: "/dashkit-laravel/dashboard/online-course-dashboard",
                },
                {
                  text: "Ecommerce Dashboard",
                  link: "/dashkit-laravel/dashboard/ecommerce-dashboard",
                },
                {
                  text: "Project Manager Dashboard",
                  link: "/dashkit-laravel/dashboard/project-manager-dashboard",
                },
              ],
            },
            {
              text: "Blog",
              collapsed: false,
              items: [
                {
                  text: "Blog",
                  link: "/dashkit-laravel/blog/blog",
                },
                {
                  text: "Blog Detail",
                  link: "/dashkit-laravel/blog/blog-detail",
                },
              ],
            },

            {
              text: "Payment",
              collapsed: false,
              items: [
                {
                  text: "Payment Info",
                  link: "/dashkit-laravel/payment/payment-info",
                },
                {
                  text: "Payment History",
                  link: "/dashkit-laravel/payment/payment-history",
                },
                {
                  text: "Payout History",
                  link: "/dashkit-laravel/payment/payout-history",
                },
              ],
            },
            {
              text: "LMS",
              collapsed: false,
              items: [
                {
                  text: "All Course",
                  link: "/dashkit-laravel/lms/all-course",
                },
                {
                  text: "Create Course",
                  link: "/dashkit-laravel/lms/create-course",
                },
                {
                  text: "Edit Course",
                  link: "/dashkit-laravel/lms/edit-course",
                },
                {
                  text: "Course Detail",
                  link: "/dashkit-laravel/lms/course-details",
                },
              ],
            },
            {
              text: "Email",
              link: "/dashkit-laravel/email/email",
            },
            {
              text: "Chat",
              link: "/dashkit-laravel/chat/inbox",
            },
            {
              text: "Widget",
              link: "/dashkit-laravel/widget/widget",
            },
          ],
        },
      ],
    },
  },
});
