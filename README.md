# [stack.gl/packages](http://stack.gl/packages/)

This is where we keep all of our packages' documentation for safe keeping and discoverability, both inside the [stackgl organisation](https://github.com/stackgl) and out.

This branch is responsible for downloading data from the GitHub API using [ecosystem-docs](https://github.com/hughsk/ecosystem-docs), transforming it into a nice format and presenting it on the frontend.

The built output can be found on the [gh-pages branch](https://github.com/stackgl/packages/tree/gh-pages) of this repository.

## Adding a package

Simply add your repository's GitHub repository to [the list in the wiki](https://github.com/stackgl/packages/wiki/Packages).

## Build your own list

This repository has been designed to be easily forkable for other ecosystems to take advantage of, with the hopes of more flexibility becoming available in the future.

First off: if you're just interested in the syncing behaviour you should check out [ecosystem-docs](https://github.com/hughsk/ecosystem-docs).

Otherwise:

1. Fork the repository and clone it to your machine.
1. Update `config.js` to alter variables specific to your project, such as the logo content or packages list URL. (There's a bit of JSX in there right now. Sorry!)
1. Update `intro.md` to change the content of the intro page.
1. Install the dependencies using `npm install`. This will likely prompt you for your GitHub username and password.
1. Start the app by running `npm start` and visiting `http://localhost:3000/` when ready.
1. Whenever you want to update the list, run `npm run sync`.
1. Once you're ready to deploy, run `npm run deploy` to build the site and and push it to GitHub pages.
1. Enjoy! :sparkles:
