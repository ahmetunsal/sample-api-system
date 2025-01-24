# API Documentation System

This project is an API documentation system built with Django for the backend and Vite for the frontend. It allows you to manage and display API documentation in a structured way using categories, titles, subtitles, and fragments.

## Features

- **Category Management**: Organize your documentation into categories.
- **Title Management**: Add titles under each category.
- **Subtitle Management**: Break down titles into subtitles.
- **Fragment Management**: Add content fragments under each subtitle with various HTML tags.
- **Admin Panel**: Easily manage all your documentation through the Django admin panel.
- **Responsive Frontend**: Built with Vite for a modern and responsive user interface.

## Technologies Used

- **Backend**: Django
- **Frontend**: Vite, HTML, CSS (Tailwind), JavaScript
- **Database**: SQLite (default), but can be configured to use other databases like PostgreSQL or MySQL.
- **Other Tools**: Bleach (for sanitizing HTML content), Slugify (for generating slugs)

## Installation

### Prerequisites

- Python 3.8 or higher
- Node.js (for Vite)
- pip (Python package manager)
- npm (Node.js package manager)

### Backend Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/api-documentation-system.git
   cd api-documentation-system
   ```
2. **Create a virtual environment**:
   ```bash
    python -m venv venv
    source venv/bin/activate  # On Windows use `venv\Scripts\activate`
   ```
3. **Install dependencies**:
   ```bash
   pip install -r requirements.txt
   ```
4. **Run migrations**:
   ```bash
   python manage.py migrate
   ```
5. **Create a superuser**:
   ```bash
   python manage.py createsuperuser
   ```
5. **Run the development server**:
   ```bash
   python manage.py runserver
   ```

### Frontend Setup

1. **Navigate to the frontend directory**:
   ```bash
   cd frontend
   ```
2. **Install dependencies**:
   ```bash
   npm install 
   ```
3. **Run development server**:
   ```bash
   npm run dev 
   ```
4. **Build for production**:
   ```bash
   npm run build
   ```

# Usage

### Admin Panel
  You can access the admin panel by navigating to `http://127.0.0.1:8000/admin/` and logging in with the superuser credentials you created earlier.

  - **Categories**: Add and manage categories.
  - **Titles**: Add titles under each category.
  - **Subtitles: Add sub-titles under each title.
  - **Fragment**: Add content fragments under each subtitle.

### Front-end
The frontend is accessible at `http://localhost:5173/`. It will display the documentation in a structured manner based on the data you've entered in the admin panel.

# Screenshots
<img src="https://github.com/ahmetunsal/sample-api-system/blob/main/img/overview.gif?raw=true" alt="Overview" />
<img src="https://github.com/ahmetunsal/sample-api-system/blob/main/img/data_save.gif?raw=true" alt="Data save" />

# Contributing
Contributions are welcome! Please follow these steps:

<ol>
  <li>Fork the repository.</li>
  <li>Create a new branch (`git checkout -b feature/YourFeatureName`).</li>
  <li>Commit your changes (`git commit -m 'Add some feature'`).</li>
  <li>Push to the branch (`git push origin feature/YourFeatureName`).</li>
  <li>Open a pull request.</li>
</ol>

# License
This project is licensed under the MIT License - see the <a href="https://github.com/ahmetunsal/sample-api-system/blob/main/LICENSE">LICENSE</a> file for details.

# Acknowledgments
<ul>
  <li>Django for the robust backend framework.</li>
  <li>Vite for the fast and modern frontend build tool.</li>
  <li>Bleach for HTML sanitization.</li>
  <li>Slugify for generating slugs.</li>
</ul>
<hr />

Feel free to customize this README.md file according to your project's specific needs. If you have any questions or need further assistance, please don't hesitate to reach out!
