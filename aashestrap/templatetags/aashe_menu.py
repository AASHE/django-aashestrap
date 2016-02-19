"""
    A template tag to insert the drupal sitemap div into a base template.
"""
from django import template
from aashestrap.models import Menu

register = template.Library()


@register.simple_tag
def drupal_footer_menu():
    menu = Menu.objects.get(pk=1)
    return menu.footer

@register.simple_tag
def drupal_header_menu():
    menu = Menu.objects.get(pk=1)
    return menu.header
