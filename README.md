# packages

A list of packages that fall under the [stack.gl](http://stack.gl) umbrella,
all wrapped up in a single page for you to jump around in.

## Contributing

Simply add your repository to the
[wiki list](https://github.com/stackgl/packages/wiki/Packages), and it'll
be included next time the packages site is built. Soon, this will be automatic.

Note that each category is marked up with a heading, and each list item
is mapped to a package's username/reponame on GitHub. Don't hesitate to submit
a bunch of packages at once: the more the merrier!

### Inline Examples

If your repository has an `index.html` file hosted on its `gh-pages` branch,
an iframe will be automatically inserted into the `README.md` file to display
alongisde the documentation.

If you'd like to use a different URL, or more than one iframe, simply place an
HTML comment in your `README.md` file similar to the following:

``` html
<!-- iframe: http://my-neat-demo.com -->
```

When the site updates, an iframe will be used in its place.

## Development

To get the site running locally:

``` bash
git clone git@github.com:stackgl/packages.git
cd packages
npm install
npm start
```

To update the package data:

``` bash
npm run build
```
