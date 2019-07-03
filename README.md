# Personal Site

Live Site at: [franciscot.me](https://franciscot.me)

## Contents

Although there is a [`package.json`](./package.json) this is not a node application. This is purely to be able to run `gulp` stuff to compress the images and compile the SASS. See [Gulp](#gulp)

## Gulp

To run `gulp` commands you need to install the dependencies:

```
# install local deps
npm install
# install gulp
npm install -g gulp
```

- `gulp compile-sass`: compiles all the sass into one CSS file and minifies the CSS
- `gulp compress-image`: compresses all the source images and puts them in assets
