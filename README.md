# Razal - Premium Personal Portfolio

A full-stack, production-ready premium personal portfolio website for Razal, Founder & CEO of TravelZync Labs.

## Project Architecture

This project is a complete full-stack application divided into two main parts:

- **Frontend**: A highly optimized, responsive, and SEO-friendly React application built with Vite, TypeScript, and Tailwind CSS.
- **Backend**: A secure, modular Python API built with Django, Django REST Framework, python-dotenv, and django-cors-headers to handle contact form submissions and automated emails.

```text
Razal portfolio/
├── appenv                # Centralized environment configuration (Do not commit)
├── appenv.example        # Template for environment configuration
├── frontend/             # Vite + React + TS Frontend
└── backend/              # Django + Python Backend
```

## Features

- **Premium UI/UX**: Custom design system using Tailwind CSS with glassmorphism, modern typography, and Framer Motion animations.
- **Strong Technical SEO**: Implemented using React Helmet for dynamic meta tags, JSON-LD structured data, Open Graph, and Twitter Cards. Static `robots.txt` and `sitemap.xml` included.
- **Full-Stack Contact Form**: Form data is validated (Zod), protected by rate limiting, stored in a database (Prisma), and sent to an inbox via SMTP (Nodemailer).
- **Mobile-First Design**: Completely responsive across all devices.

## Setup Instructions

### 1. Environment Configuration

1. Copy `appenv.example` to a new file named `appenv` in the root directory.
2. Fill in the required environment variables:
   - `DATABASE_URL`: Connection string for your database (defaults to local SQLite for development).
   - `EMAIL_*`: SMTP credentials (e.g., SendGrid, Mailgun, Gmail App Password).

### 2. Backend Setup (Django)

1. Navigate to the backend directory and create a Python virtual environment:
```bash
cd backend
python -m venv venv
venv\Scripts\activate  # On Windows
# source venv/bin/activate  # On Mac/Linux
```
2. Install dependencies:
```bash
pip install django djangorestframework django-cors-headers python-dotenv
```
3. Run migrations and start the server:
```bash
python manage.py makemigrations
python manage.py migrate
python manage.py runserver 5000
```
*(The backend will start on port 5000 to match the frontend expectations).*

### 3. Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

## API Endpoints

### `POST /api/contact`
Submits a contact message.
- **Body**: `{ name: string, email: string, subject: string, message: string }`
- **Response**: `{ success: boolean, message: string }`

### `GET /api/health`
Checks backend health.
- **Response**: `{ status: 'ok', timestamp: string }`

## Production Build

### Frontend
```bash
cd frontend
npm run build
```
The output will be in the `frontend/dist` directory, ready to be served statically.

### Backend
```bash
cd backend
# Deploy using a production WSGI server like Gunicorn or uWSGI.
# pip install gunicorn
# gunicorn backend_config.wsgi:application
```
