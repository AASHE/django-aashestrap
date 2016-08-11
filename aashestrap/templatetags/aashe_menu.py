"""
    A template tag to insert the drupal sitemap div into a base template.
"""
from django import template
from aashestrap.models import Menu
from django.core.exceptions import ObjectDoesNotExist

register = template.Library()


@register.simple_tag
def drupal_footer_menu():
    try:
        menu = Menu.objects.get(pk=1)
        return menu.footer
    except ObjectDoesNotExist:
        return None

@register.simple_tag
def drupal_header_menu():
    try:
        menu = Menu.objects.get(pk=1)
        return menu.header
    except ObjectDoesNotExist:
        return None
