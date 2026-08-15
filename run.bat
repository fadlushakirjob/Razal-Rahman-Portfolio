@echo off
echo Starting Razal Portfolio...

echo Starting Django Backend...
start cmd /k "cd backend && venv\Scripts\activate && python manage.py runserver 5000"

echo Starting React Frontend...
start cmd /k "cd frontend && npm run dev"

echo Both servers are starting in new windows!
echo Frontend will be available at: http://localhost:5173
