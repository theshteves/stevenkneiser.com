from django.test import TestCase

from . import apps, views

class BlogUnitTests(TestCase):
    '''Keeping the blog NOT broken'''

    def test_truth(self):
        self.assertTrue(True)

    def test_config(self):
        self.assertEqual(apps.BlogConfig.name, 'blog')

    def test_views(self):
        self.assertTrue(200 <= views.index('request_url').status_code < 300)
