# bullshit static blog from Jupyter notebook generator

This is my attempt of writing a Jupyter extension which makes it possible to generate blogposts from Jupyter notepads in a simple way.

Implementation details in [Jupyter Notebook](bullshit.ipynb)

## installation (development mode)

install the python package:
  
  pip install --user -e  .

install javascript extension and enable javascript and server extension:

  jupyter nbextension install --py bullshit [--sys-prefix|--user] --symlink
  jupyter nbextension enable --py bullshit [--sys-prefix|--system]
  jupyter serverextension enable --py bullshit [--sys-prefix|--system]
