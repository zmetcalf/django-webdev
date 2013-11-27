from django.test import TestCase

from project_manager import views

class ViewTests(TestCase):
    def test_generate_stub(self):
      self.assertEqual(views.generate_stub('foo', 'bar'), 'project_manager/foo/bar.html')
