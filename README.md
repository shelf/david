david
=====

A theme for the [pelican](https://github.com/getpelican/pelican) blog engine.

A number of additional variables can be set for this theme. Most of these relate to the sidebar.

`GOOGLEFONTS` - Use Google Web Fonts if True, else use local fonts.css. Might as well use Google unless your site is to be hosted offline.

`LINKS` - Blogroll. List of items in format `[['name', 'uri'], ... ]`

`SITES` - These hyperlinks pop up in the topbar, ahead of the blog's pages. I use these to link to other sites I operate, for instance.

`SOCIAL` - A list of social links in the same format.

`GITHUB_USER` - Github username. Displays a github badge in the sidebar if set.

`USERPIC` - Absolute path to a profile image for the sidebar, if set.

`SITELOGO` - Absolute path to a small image. Renders in the topbar. Suitable for logos.

`ABOUT` - Raw html string for the About paragraph in the sidebar.

`BANNER` - Absolute path to a banner image. Uses `./theme/static/banner.jpg` if unset.

`FAVICON` - Absolute path to a favicon. Defaults to
|filename|/static/favicon.ico if unset.
