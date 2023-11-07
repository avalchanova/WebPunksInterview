Webpunks Coding Interview

The Webpunks Coding Interview project is a multi-part web development initiative that showcases your proficiency in various web technologies. This project is designed to demonstrate your skills in building a content management system (CMS) application, creating a backend REST API, and developing a frontend application using React and Next.js.

### Project Components

CMS Application (app/cms) a CMS application built with Sanity. It enables users to create, edit, and delete blog posts.

Backend Application (app/backend): The backend is developed using Node.js and NestJS, exposing REST APIs for various functionalities.

Blog Application (app/blog): The frontend is a React-based Next.js application responsible for displaying the blog posts created in the CMS.


The homepage displays a list of the ten most recent blog posts. Each post displays as a card with the cover image, title, and the first 100 characters of the post content and is linked to the post detail page.

Dynamic post detail page with URLs like `/posts/<post_slug>`, displays the title, cover image, and the full post text, including the meta title and meta description fetched from Sanity.

Responsive Layout for mobile, tablet, and desktop devices, ensuring that the correct blog post image is displayed for each device.

Integrated backend `trackPageView` API call into the Next.js application, which triggers on each page view and includes the page title and URL

Sanity Schema Enhancement: an additional Sanity schema object for storing the website logo, title, and background color, which are later rendered to the website layout component

Persists the data in a PostgreSQL database.

With implemented backend API that returns the number of page views for each page.

