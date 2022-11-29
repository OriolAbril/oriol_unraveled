---
html_theme.sidebar_secondary.remove:
sd_hide_title: true
---

# Oriol unraveled

:::{toctree}
:hidden:

projects
about
blog
Tags <blog/tag>
Categories <blog/category>
:::

::::{div} sd-text-center sd-font-italic
A well known Catalan saying goes: "Xerrar pels descosits". It means that somebody talks too much. "xerrar" is talking and a "descosit" refers to pieces of fabric that have come undone or been unraveled. I generally do not talk too much, in fact I tend to talk too little unless we are talking about topics such as statistics or programming. I hope this blog can be a place to unravel concepts on statistics, open source and programming, allowing me to "xerrar pels descosits" in blog version.

:::{div} sd-fs-5
Get ready for some puns and let's dive in!
:::
::::

![A picture of me diving towards the sea bed while snorkeling.](images/theme_image.png)

## News

::::{grid} 1 1 2 2
:gutter: 3

:::{grid-item-card} Webinar

I will give an [online webinar](https://www.meetup.com/data-umbrella/events/289308615/)
with [Data Umbrella](https://www.dataumbrella.org/) on how to contribute to ArviZ and to open source in general.
:::
:::{grid-item-card} Working session

I will participate to [PyData Global](https://global2022.pydata.org) hosting a working session
on [interoperability within the Python Bayesian ecosystem](https://global2022.pydata.org/cfp/talk/BNUAL8/).
:::
::::

## Projects
Most of my current work is related to two community-drives open source libraries:
ArviZ and PyMC. They are both related to Bayesian modeling, but have different
and complementary goals.

:::::{grid} 1 1 2 2
::::{grid-item}
:::{div} sd-text-center sd-fs-4 sd-font-weight-bolder
{doc}`ArviZ <arviz_org:index>`
:::

The ArviZ project provides tools for Exploratory Analysis of Bayesian Models that do not depend on the inference library nor the programming language used.

That includes visualization, sampling diagnostics, model comparison, summary statistics or model checking. The ArviZ project maintains several libraries in Python and Julia.
::::
::::{grid-item}
:::{div} sd-text-center sd-fs-4 sd-font-weight-bolder
{doc}`PyMC <pymc_io:index>`
:::

PyMC is a project for probabilistic programming in Python. PyMC strives to make Bayesian modeling as simple and painless as possible, allowing users to focus on their problem rather than the methods.

The PyMC project maintains the PyMC library, the flagship of the project, as well as
extensive documentation and some smaller libraries that complement the PyMC library.
Moreover, it also organizes many activities such as [PyMCon](https://pymcon.com/).
::::
:::::


See the {ref}`projects` page for a complete list of the projects I am involved in.

## Support me

:::{include} partials/donations.md
:::

See {ref}`support_me` section for more ways to support my work.
