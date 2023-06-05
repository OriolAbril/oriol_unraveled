---
html_theme.sidebar_secondary.remove:
sd_hide_title: true
og:image: _static/estendard_web_min.png
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

:::{grid-item-card} Workshop on uncertainty visualization

I will lead a workshop on uncertainty visualization at
[PyData BCN](https://pybcn.org/events/pydatabcn/pydatabcn_2023/).

We will go over different types of visualizations like histograms,
KDEs, quantile dotplots or ECDF plots their interpretation and use-cases.

+++
Jun 10, 2023
:::

:::{grid-item-card} Webinar

I gave an online webinar with [Data Umbrella](https://www.dataumbrella.org/)
on how to contribute to ArviZ and to open source in general,
covering both social and technical aspects and doing a PR live during the webinar.

The video is [available on YouTube](https://www.youtube.com/watch?v=457ZTes4xOI),
go check it out!
+++
Nov 29, 2022
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
