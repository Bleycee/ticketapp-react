TicketFlow - Multi-Framework Implementation

Complete ticket management system built with three different frontend technologies to demonstrate cross-platform feature consistency and modern development practices.

🎯 Live Demos

Explore the fully deployed versions of the application:

React Version: [https://ticketapp-react-woad.vercel.app/]

Vue.js Version: [(https://ticketapp-vue-js.vercel.app/)]

Twig/PHP Version: [https://ticketflow-twig.up.railway.app/]

📁 Repositories

Each implementation resides in its own repository:

React Implementation
(https://github.com/Bleycee/ticketapp-react.git)

Vue.js Implementation
(https://github.com/Bleycee/ticketapp-vue.js)

Twig/PHP Implementation
(https://github.com/Bleycee/ticketflow-twig.git)


✨ Features (All Versions)

All three versions maintain the same core functionality and responsive design:

Public Interface: Landing page with a modern wavy hero background and responsive navigation.

Secure Authentication: User sign-up and login screens.

Dashboard: Overview of ticket statistics (e.g., counts by status).

Full CRUD: Create, Read, Update, and Delete operations for tickets.

Design: Fully responsive interface optimized for Mobile, Tablet, and Desktop.

Indicators: Clear status badges for Open, In Progress, and Closed tickets.

Validation: Robust form validation and error handling.

🛠️ Tech Stack Breakdown

Technology

Framework/Language

Key Tools

Notes

React

React 18 (Vite)

CSS Modules, React Router

Modern tooling and state management.

Vue.js

Vue 3

Composition API, Vue Router

Uses the latest Composition API syntax.

Twig/PHP

PHP 8.1+

Twig 3.0, Composer

Traditional server-side rendering approach.

⚙️ Installation & Setup

To run any of the projects locally, follow the steps below for the specific repository you want to clone.

Prerequisites (Common)

You must have the following installed on your system:

Node.js: (LTS recommended) for React and Vue projects.

PHP: Version 8.1 or higher for the Twig project.

Composer: PHP dependency manager for the Twig project.

1. React and Vue.js Implementations

These follow standard Node.js project setup:

# Clone the repository (e.g., React)
git clone [https://github.com/Bleycee/ticketapp-react.git]
cd ticketapp-react

# Install dependencies
npm install

# Run the development server
npm run dev


2. Twig/PHP Implementation

This requires PHP and Composer to manage dependencies:

# Clone the repository
git clone [https://github.com/Bleycee/ticketflow-twig.git]
cd ticketflow-twig

# Install PHP dependencies
composer install

# You will need a local PHP server (like MAMP, XAMPP, or built-in PHP server) 
# to run the application, as the Twig templates are processed server-side.
# Example using PHP's built-in server (assuming index.php is the entry point):
php -S localhost:8000


Visit http://localhost:8000 in your browser.

