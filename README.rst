==========
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

4. Run "python manage.py migrate" to create the required models.

Menu Syncing
------------

aashestrap contains a template tag to drop the sitemap footer retrieved
from the main Drupal site into your base template. This is then used as
usual to populate the navigation drop-down menus at the top.

This sync should be run nightly by your app using the included management
command 'get_menu'. See documentation for your hosting environment for
how to implement the scheduled task on the server.

Menu Template Tag
-----------------

To include the site map footer from the Drupal site on your base template,
simply insert:

    {% load get_menu %}
    {% drupal_menu %}
