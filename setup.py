#!/usr/bin/env python
from setuptools import setup, find_packages
import os

from aashestrap import get_version


# Utility function to read README file
def read(fname):
    return open(os.path.join(os.path.dirname(__file__), fname)).read()

setup(name='aashestrap',
      version=get_version().replace(' ', '-'),
      description='AASHE package containing templates and JS used with AASHE properties',
      author='AASHE',
      author_email='webdev@aashe.org',
      url='http://pypi.aashe.org/',
      long_description=read("README.rst"),
      packages=['aashestrap'],
      include_package_data=True,
      license="MIT License",
      install_requires=[
            "Django>=1.8",
      ],
      dependency_links=[('git+https://github.com/AASHE/')]
      )
