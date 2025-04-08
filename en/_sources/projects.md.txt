(projects)=
# Projects
This page describes my ongoing projects and collaborations,
for past work, talks and publications, see {ref}`about_me`.

## Open source community projects

### ArviZ

::::{sidebar}
:::{image} https://raw.githubusercontent.com/arviz-devs/arviz-project/main/arviz_logos/ArviZ.svg
:::
::::

The {doc}`ArviZ project <arviz_org:index>` provides tools for Exploratory Analysis of Bayesian Models that do not depend on the inference library nor the programming language used.
That includes visualization, sampling diagnostics, model comparison, summary statistics or model checking. ArviZ maintains several libraries in Python and Julia.

I am currently a core contributor and council member of ArviZ.
As such, I am contribute to multiple libraries maintained by ArviZ and
I am involved with other project initiatives such as grants.

Project wide, I help maintain the project website at {doc}`www.arviz.org <arviz_org:index>`,
coordinate project meetings, write grant proposals, try to make sure we follow ArviZ governance procedures...
Moreover, I am more deeply involved with some of the libraries and initiatives of
the project:

#### ArviZ Python library
I am one of the maintainers and main [contributors](https://github.com/arviz-devs/arviz/graphs/contributors) to the ArviZ python library.
I contribute on most areas of the repo, issue triaging, code, documentation or reviewing PRs,
as well as mentoring and helping other contributors work on issues and submit PRs.

I am also involved with the ongoing refactor of the library.

#### xarray-einstats
I started this smaller [library](https://einstats.python.arviz.org) to externalize and package many tricks
on executing NumPy/Scipy/Dask functions on xarray objects.

ArviZ already depends on it so it is easier for example to use summary statistics
for circular variables, and it might be used more extensively to allow a
better integration of ArviZ stats and diagnostics with xarray.

---

### PyMC

::::{sidebar}
:::{image} https://raw.githubusercontent.com/pymc-devs/brand/main/pymc/pymc_logos/PyMC.svg
:::
::::

The {doc}`PyMC project <pymc_io:index>` is a project for probabilistic programming in Python.
PyMC strives to make Bayesian modeling as simple and painless as possible,
allowing users to focus on their problem rather than the methods.

Currently I am core contributor of PyMC, having also been a member of its steering council in the past.
Similarly to ArviZ, I also contribute to multiple libraries and initiatives within the project.
However, in PyMC I try to focus much more on documentation and community efforts,
coding much less than what I do at ArviZ.

#### PyMC example gallery
I am one of the main maintainers and curators of the [PyMC example gallery](https://www.pymc.io/projects/examples/en/latest/gallery.html)
(everything within the "Examples" navigation bar section).

#### PyMCon
I am currently helping organize the [PyMCon Webseries](https://pymcon.com/) as an advisor.

I was also a Diversity Chair in [PyMCon 2020](https://pymc-devs.github.io/pymcon//).

#### PyMC Discourse
Last but not least, I also try to answer questions about PyMC, ArviZ, visualization,
model comparison... on the [PyMC Discourse](https://discourse.pymc.io/).

---

### Other
I try to contribute to other libraries, specially within the PyData ecosystem.
I have made some contributions as both issues and PRs to libraries like scipy,
matplotlib, pydata-sphinx-theme or numpydoc,
and try to follow xarray particularly closely to see which ArviZ developments
could be upstreamed to xarray.

#### NumFOCUS DISC committee
I volunteer for {abbr}`EDIA (Equity, Diversity, Inclusion, and Accessibility)` initiatives
spearheaded by the [NumFOCUS {abbr}`DISC (Diversity and Inclusion in Scientific Computing)` committee](https://numfocus.org/programs/diversity-inclusion) whenever I can.
Some examples are the DISC unconferences of [2023](https://numfocus.github.io/disc-unconference-2023-projects/en/intro.html)
and [2025](https://numfocus.github.io/disc-unconference-2025-projects/en/intro.html)
or the research on contributor diversification and retention.

#### Scientific Python translations
From time to time, I help translating and reviewing translations for the landing pages of
[Scientific Python](https://scientific-python.org/) projects.
Check out this [blog post](https://blog.scientific-python.org/scientific-python/translations/) if you are interested in this effort!


## Personal projects

### Oriol Unraveled
Currently, my main personal project is this blog you are reading now.
I have posted sporadically about the libraries I contribute to and
the progress on my work, and I would like to post more regularly
about both general work updates and tutorial or deep dive contents.

### Sphinx primer
I wrote and maintain a [small website](https://sphinx-primer.readthedocs.io/en/latest/)
that aims to be a first contact to sphinx for contributors of scientific open
source libraries, especially ArviZ and PyMC contributors.

I also use it as a personal reference to host useful links, tips and tricks
I recurrently need when working on sphinx generated websites.

Fun fact: I used sphinx-primer as a playground to learn how to manage translations
in sphinx, which eventually allowed me to build my personal website
(the one you are on now) with sphinx and in multiple languages!

### `oriol-personal-theme`
I also host the [sphinx theme used for this website](https://github.com/OriolAbril/oriol-personal-theme) on GitHub as a Python package.

It is an extension on top of the [PyData-Sphinx-Theme](https://pydata-sphinx-theme.readthedocs.io/en/stable/)
inspired on the [Massively theme](https://html5up.net/massively) by HTML5Up
and also with elements from the [Basically Basic](https://github.com/mmistakes/jekyll-theme-basically-basic) by Michael Rose.

I don't have any immediate plans to make it a proper theme usable by other people,
but I might consider it if there is interest and people willing to help improve
and maintain it.
