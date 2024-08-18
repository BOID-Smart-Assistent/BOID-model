from setuptools import setup, find_packages

setup(name='boid-model',
      version="0.0.7",
      description='Protobuf messages for BOID smart assistent',
      author='Fabio Dijkshoorn [Utrecht University]',
      author_email='f.dijkshoorn@uu.nl',
      url='https://github.com/BOID-Smart-Assistent/BOID-model',
      package_dir={'': 'dist/python/'},
      packages=find_packages(where='./dist/python/')
      )
