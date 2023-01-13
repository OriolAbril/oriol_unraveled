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

#### xarray-einstats
I started this smaller [library](https://einstats.python.arviz.org) to externalize and package many tricks
on executing NumPy/Scipy/Dask functions on xarray objects.

ArviZ already depends on it so it is easier for example to use summary statistics
for circular variables, and it might be used more extensively to allow a
better integration of ArviZ stats and diagnostics with xarray.

#### CZI EOSS grant
I am currently acting as coordinator for the ArviZ part of an Essential
Open Source Software (EOSS) grant from the Chan Zuckerberg Initiative (CZI):
[Bayesian Open Source Software for Biomedicine: Stan, ArviZ and PyMC3](https://chanzuckerberg.com/eoss/proposals/bayesian-open-source-software-for-biomedicine-stan-arviz-and-pymc3/).

Thanks to this grant, we have been able to both book dedicated team from
team members and hire external help to improve both Python and Julia
ArviZ libraries, improve the documentation, explore refactoring avenues
and ease the maintenance cost.

The experiments I have uploaded to [xrtist](https://xrtist.readthedocs.io/en/latest/),
showcasing potential refactorings of the plots module in ArviZ are an example of such work.

---

### PyMC

::::{sidebar}
:::{image} https://raw.githubusercontent.com/pymc-devs/brand/main/pymc/pymc_logos/PyMC.svg
:::
::::

The {doc}`PyMC project <pymc_io:index>` is a project for probabilistic programming in Python.
PyMC strives to make Bayesian modeling as simple and painless as possible,
allowing users to focus on their problem rather than the methods.

I am core contributor and council member of PyMC. Similarly to ArviZ,
I also contribute to multiple libraries and initiatives within the project.
However, in PyMC I try to focus much more on documentation and community efforts,
coding much less than what I do at ArviZ.

#### PyMC example gallery
I am one of the main maintainers and curators of the [PyMC example gallery](https://www.pymc.io/projects/examples/en/latest/gallery.html)
(everything within the "Examples" navigation bar section).

I started focusing on the example gallery in 2020, when I coordinated
the participaiton of PyMC in both [GSoD](https://developers.google.com/season-of-docs/docs/2021/participants) and [Outreachy](https://www.outreachy.org/).
During 2020, we defined the new look and updated many notebooks to it
together with [Martina Cantaro](https://linktr.ee/martinacantaro)
and [Abhipsha Das](https://chiral-carbon.github.io/).

And we have continued maintaining and improving the example gallery
within the PyMC team since then.

#### PyMCon
I am currently helping organize the [PyMCon Webseries](https://pymcon.com/) as an advisor.

I was also a Diversity Chair in [PyMCon 2020](https://pymc-devs.github.io/pymcon//).

#### PyMC Data Umbrella working sessions
I also helped organize the [PyMC Data Umbrella working sessions](https://pymc-data-umbrella.xyz/en/latest).
So far we have organized two series of working sessions in [Feb 2022](https://pymc-data-umbrella.xyz/en/latest/2022-02_sprint/organizers/index.html) and [July 2022](https://pymc-data-umbrella.xyz/en/latest/2022-07_sprint/sprint_parties/organizers.html),
which have been quite successful and helped several people join the PyMC team.

We are currently working on translating the sprint website! Join the efforts on
[transifex](https://explore.transifex.com/pymc/data-umbrella-sprints-website/)!

#### PyMC Discourse
Last but not least, I also try to answer questions about PyMC, ArviZ, visualization,
model comparison... at the [PyMC Discourse](https://discourse.pymc.io/).

---

### Other
I also try to contribute to other libraries, specially within the PyData ecosystem.
I have made some contributions as both issues and PRs to libraries like scipy,
matplotlib, pydata-sphinx-theme or numpydoc,
and try to follow xarray particularly closely to see which ArviZ developments
could be upstreamed to xarray.

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

It is an extension on top of the [PyData-Sphinx-Theme](https://pydata-sphinx-theme.readthedocs.io/en/stable/) inspired on the [Massively theme](https://html5up.net/massively) by HTML5Up.

I don't have any immediate plans to make it a proper theme usable by other people,
but I might consider it if there is interest and people willing to help improve
and maintain it.
