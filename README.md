# bullshit 

_static blog from Jupyter notebook generator_

This is my attempt of writing a Jupyter extension which makes it possible to generate blogposts from Jupyter notepads in a simple way.

Implementation details in [Jupyter Notebook](bullshit.ipynb)

## installation (development mode)

install the python package:
  
    pip install --user -e  .

install javascript extension and enable javascript and server extension:

    jupyter nbextension install --py bullshit --user --symlink
    jupyter nbextension enable --py bullshit --user
    jupyter serverextension enable --py bullshit

This will install and enable the python module server extension and the javascript notebook extension by linking them to the right places, so that changes in the source are reflected in the notebook after reloading the page/restarting the server.
