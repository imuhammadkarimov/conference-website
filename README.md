# Conference Website

This Django project implements a full-featured conference website with user management, blog posts, and a detailed conference page.

## Features

- **Conference Information**: Event details, schedule, and speaker information
- **User Management**: Registration, login, and user profiles with profile pictures
- **Blog System**: Create, read, update, and delete blog posts

## Project Structure

- **ConferencePage/**: Static conference page with HTML, CSS, and JavaScript
- **posts/**: Django app for managing blog posts
- **users/**: Django app for user authentication and profiles
- **templates/**: HTML templates for the Django apps
- **static/**: Static files (CSS, JavaScript, images)
- **media/**: User-uploaded content

## Setup and Installation

### Prerequisites
- Python 3.10 or higher
- Django 4.2 or higher

### Installation

1. Clone the repository
```
git clone <repository-url>
cd django-template
```

2. Create a virtual environment
```
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

3. Install dependencies
```
pip install -r requirements.txt
```

4. Run migrations
```
python manage.py migrate
```

5. Create a superuser (admin)
```
python manage.py createsuperuser
```

6. Run the development server
```
python manage.py runserver
```

7. Access the site at http://127.0.0.1:8000/

## Running Tests

Run tests with:
```
python manage.py test
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add your feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request
