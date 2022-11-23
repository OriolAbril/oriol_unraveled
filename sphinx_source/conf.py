# Configuration file for the Sphinx documentation builder.
#
# This file only contains a selection of the most common options. For a full
# list see the documentation:
# https://www.sphinx-doc.org/en/master/usage/configuration.html

# -- Project information -----------------------------------------------------

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
    "sphinxext.rediraffe",
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
]

# -- Options for extensions

nb_execution_mode = "auto"
nb_execution_excludepatterns = ["*.ipynb"]
myst_enable_extensions = ["colon_fence", "deflist", "dollarmath", "amsmath"]

intersphinx_mapping = {
    "arviz": ("https://python.arviz.org/en/latest/", None),
    "mpl": ("https://matplotlib.org/stable/", None),
    "numpy": ("https://numpy.org/doc/stable/", None),
    "pymc": ("https://www.pymc.io/projects/docs/en/stable/", None),
    "pymc-examples": ("https://www.pymc.io/projects/examples/en/latest/", None),
    "scipy": ("https://docs.scipy.org/doc/scipy/", None),
    "xarray": ("https://docs.xarray.dev/en/stable/", None),
}

blog_baseurl = "https://oriolabrilpla.cat"
blog_title = "Oriol unraveled"
blog_path = "blog"
blog_authors = {
    "oriol": ("Oriol Abril Pla", "https://oriolabrilpla.cat"),
}
blog_default_author = "oriol"
fontawesome_included = True

notfound_urls_prefix = ""

rediraffe_redirects = {
    "blog/tags/index.md": "blog/tag.md",
    "blog/categories/index.md": "blog/category.md",
}

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

ogp_site_url = "https://oriolabrilpla.cat"
ogp_use_first_image = False

# -- Options for HTML output -------------------------------------------------

# The theme to use for HTML and HTML Help pages.  See the documentation for
# a list of builtin themes.
#
html_theme = "oriol_personal_theme"
# Add any paths that contain custom static files (such as style sheets) here,
# relative to this directory. They are copied after the builtin static files,
# so a file named "default.css" will overwrite the builtin "default.css".

html_theme_options = {
    "show_nav_level": 2,
    "navbar_start": ["navbar-logo"],
}
html_context = {
    "github_user": "oriolabril",
    "github_repo": "oriol_unraveled",
    "github_version": "main",
    "doc_path": ".",
    "default_mode": "light",
}

# html_logo = "images/logo.jpg"
html_favicon = "images/favicon.ico"

html_static_path = ["images"]
# html_css_files = ["custom.css"]
html_title = "Oriol unraveled"

html_sidebars = {
    "blog/tag": [
        "tagcloud.html",
        "sidebar-nav-bs.html",
    ],
    "blog/category": [
        "categories.html",
        "sidebar-nav-bs.html",
    ],
    "blog/archive": [
        "archives.html",
        "sidebar-nav-bs.html",
    ],
    "blog/*": [
        "postcard.html",
        "sidebar-nav-bs.html",
    ],
    "blog": ["sidebar-nav-bs.html"],
    "[!blog]**": ["sidebar-nav-bs.html"],
}
