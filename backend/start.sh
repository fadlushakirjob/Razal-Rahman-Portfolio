#!/usr/bin/env bash
# exit on error
set -o errexit

python manage.py migrate
gunicorn backend_config.wsgi:application
