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

4. Run "python manage.py migrate" to create the required models.

5. Run "python manage.py get_menu" to initialize menu table data.

6. Set up daily task to keep menu table updated (see below).

Menu Syncing
------------

aashestrap contains template tags to drop the sitemap footer and drop-downs
retrieved from the main Drupal site into your base template.

This sync should be run nightly by your app using the included management
command 'get_menu'. See documentation for your hosting environment for
how to implement the scheduled task on the server.

Menu Template Tags (use outside of aashestrap)
----------------------------------------------

To include the site map footer from the Drupal site on your template,
simply insert:

    {% load aashe_menu %}
    ...
    {% drupal_header_menu %}
    ...
    {% drupal_footer_menu %}
    ...

See context in 'base_aashe.html' and 'sitemap.html' to see what tags you
may need to surround these templatetags with.
