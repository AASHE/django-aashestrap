#!/usr/bin/env python
"""
    Retrieves menu from Drupal site
"""
from aashestrap.models import Menu
from django.core.management.base import BaseCommand
import urllib2
from django.http import HttpResponse
from BeautifulSoup import BeautifulSoup
from django.core.exceptions import ObjectDoesNotExist


class Command(BaseCommand):

    def handle(self, *args, **options):
        get_menu()


def get_menu():

    # Try to retrieve the existing menu object
    try:
        menu = Menu.objects.get(pk=1)
    # If there isn't one, instantiate one
    except ObjectDoesNotExist:
        menu = Menu(pk=1)

    # Request aashe home page
    request = urllib2.Request('http://www.aashe.org/')
    response = urllib2.urlopen(request)
    # Soup it
    soup = BeautifulSoup(response)

    # Search and extract the footer
    results = soup.findAll(id="block-menu_block-3")
    footer = results[0].__str__('utf8')

    # Search and extract the navigation bar
    results = soup.findAll(id="navigation")
    header = results[0].__str__('utf8')

    menu.footer = footer
    menu.header = header
    menu.save()
