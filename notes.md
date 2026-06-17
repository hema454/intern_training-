#pip package manager

1.pip used to install python packages
2.pip is slower while installing packages.
3.pip is easy to learn and use.
4.It requires seprate tool for virtual environment.
5.It is widely used.

##pip installation commands:
1.Create virtual environment using:
   python -m venv newvenv

2.Activate virtual environment:
   .\newvenv\Scripts\Activate.ps1

3.Install package:
   pip install requests

#uv package manager
1.uv is also used to install python packages
2.uv is faster while installing packages.
3.Can replace multiple tools.
4.Not yet widely use as pip.

##uv installation commands:
1.Create environment:
   uv venv

2.Activate environment

3.Install package:
   uv pip install requests