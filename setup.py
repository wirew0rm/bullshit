from setuptools import setup, find_packages
setup(
    name = "bullshit",
    version = "0.1",
    packages = find_packages(),
    package_data = {'bullshit': ['static/*.js']},
)
