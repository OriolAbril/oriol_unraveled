# Configuration file for the Sphinx documentation builder.
#
# This file only contains a selection of the most common options. For a full
# list see the documentation:
# https://www.sphinx-doc.org/en/master/usage/configuration.html

import os

# -- Project information -----------------------------------------------------

language = os.environ.get("WEBSITE_LANGUAGE", "en")
locale_dirs = ["../locales"]
gettext_uuid = True
gettext_compact = False

project = "Oriol unraveled"
author = "Oriol Abril Pla"
copyright = f"2019, {author}"
version = ""
release = ""


# -- General configuration ---------------------------------------------------

extensions = [
    "sphinx.ext.intersphinx",
    "sphinx.ext.mathjax",
    "myst_nb",
    "sphinx_copybutton",
    "sphinx_design",
    "ablog",
    "sphinxext.opengraph",
    "sphinx_codeautolink",
    "notfound.extension",
    # "sphinxext.rediraffe",
]

# List of patterns, relative to source directory, that match files and
# directories to ignore when looking for source files.
# This pattern also affects html_static_path and html_extra_path.
exclude_patterns = [
    "Thumbs.db",
    ".DS_Store",
    ".ipynb_checkpoints",
    "build",
    "jupyter_execute",
    "README.md",
    "partials/*",
]

# -- Options for extensions

ogp_site_url = f"https://oriolabrilpla.cat/{language}"
ogp_use_first_image = True


nb_execution_mode = "auto"
nb_execution_excludepatterns = ["*.ipynb"]
myst_enable_extensions = ["colon_fence", "deflist", "dollarmath", "amsmath"]

intersphinx_mapping = {
    "arviz": ("https://python.arviz.org/en/latest/", None),
    "arviz_org": (f"https://www.arviz.org/{language}/latest/", None),
    "mpl": ("https://matplotlib.org/stable/", None),
    "numpy": ("https://numpy.org/doc/stable/", None),
    "pymc": ("https://www.pymc.io/projects/docs/en/stable/", None),
    "pymc_io": ("https://www.pymc.io", None),
    "pymc-examples": ("https://www.pymc.io/projects/examples/en/latest/", None),
    "scipy": ("https://docs.scipy.org/doc/scipy/", None),
    "xarray": ("https://docs.xarray.dev/en/stable/", None),
}

blog_baseurl = ogp_site_url
blog_title = project
blog_path = "blog"
blog_authors = {
    "oriol": ("Oriol Abril Pla", ogp_site_url),
}
blog_default_author = "oriol"
post_show_prev_next = False
post_auto_image = 1
fontawesome_included = True

notfound_urls_prefix = f"/{language}/"

def remove_catalogs(app):
    """
    This removes the tag, category and archive pages so ablog rewrites them.
    They need to be present initially for the toctree and sidebar to work.
    """

    app.env.project.docnames -= {"blog", "blog/tag", "blog/category", "blog/archive"}
    yield "blog", {}, "layout.html"

def setup(app):
    """
    Add extra steps to sphinx build
    """

    app.connect("html-collect-pages", remove_catalogs, 100)

# -- Options for HTML output -------------------------------------------------

# The theme to use for HTML and HTML Help pages.  See the documentation for
# a list of builtin themes.
#
html_theme = "oriol_personal_theme"
# Add any paths that contain custom static files (such as style sheets) here,
# relative to this directory. They are copied after the builtin static files,
# so a file named "default.css" will overwrite the builtin "default.css".

html_theme_options = {
    "use_edit_page_button": False,
    "icon_links": [
        {
            "name": "GitHub",
            "url": "https://github.com/OriolAbril",
            "icon": "fa-brands fa-github",
            "type": "fontawesome",
        },
        {
            "name": "Twitter",
            "url": "https://twitter.com/OriolAbril",
            "icon": "fa-brands fa-twitter",
            "type": "fontawesome",
        },
        {
            "name": "Mastodon",
            "url": "https://toot.cat/@oriolabril",
            "icon": "fa-brands fa-mastodon",
            "attributes": {"rel": "me"},
        },
        {
            "name": "Atom Feed",
            "url": f"{ogp_site_url}/blog/atom.xml",
            "icon": "fa-solid fa-rss",
            "type": "fontawesome",
        },
    ],
    "show_toc_level": 2,
    "secondary_sidebar_items": ["ablog/postcard", "page-toc", "searchbox"],
    "switcher": {
        "json_url": "https://raw.githubusercontent.com/OriolAbril/oriol_unraveled/sphinx/switcher.json",
        "version_match": language,
    },
}
html_context = {
    "github_user": "oriolabril",
    "github_repo": "oriol_unraveled",
    "github_version": "main",
    "doc_path": ".",
    "default_mode": "light",
    "language": language,
}

if language == "en":
    html_context.update(
        {
            "homepage_intro": r"""
<p>I am a software engineer, statistician and physicist in the making.<br>
I believe in interdisciplinary collaboration and open science.<br>
Therefore, I contribute to open source software and try to publish my research as OSS packages.</p>
<p>My goal is to use this blog to<br>
promote open and reproducible research practices,<br>
share open source software and talk about my projects and experiences.</p>"""
        }
    )
elif language == "ca":
    html_context.update(
        {
            "homepage_intro": r"""
<p>Sóc un programador, estadístic i físic en construcció.<br>
Crec en la col·laboració interdisciplinar i la ciència oberta.<br>
Per tant, contribueixo a llibreries de programari lliure i intento publicar la meva feina.</p>
<p>El meu objectiu és utilitzar aquest blog per<br>
promoure pràctiques de recerca obertes i reproduibles,<br>
compartir programari lliure i parlar sobre els meus projectes i experiències.</p>"""
        }
    )

# html_logo = "images/logo.jpg"
html_favicon = "images/favicon.ico"

html_static_path = ["images"]
# html_css_files = ["custom.css"]
html_title = project

html_sidebars = {"**": []}
