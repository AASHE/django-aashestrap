[![Issue Count](https://codeclimate.com/github/AASHE/django-aashestrap/badges/issue_count.svg)](https://codeclimate.com/github/AASHE/django-aashestrap)

aashestrap
==========

aashestrap is a simple Django app to include common templates
and JS files common to many AASHE by providing an easily
installable package.

Installation
------------

1.  Add "django-aashestrap" to requirements.txt in your project.

2.  Add "aashestrap" to your INSTALLED_APPS setting like this:
    INSTALLED_APPS = (
        ...
        'aashestrap',
    )

3.  Run "pip install -r requirements.txt" from your project's
    directory to install required packages.

4. Extend the "new_base.html" template from your project's base template.