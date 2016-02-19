from django.db import models

class Menu(models.Model):
    """
        Model to hold the menu divs from the Drupal site
    """
    header = models.TextField()
    footer = models.TextField()
