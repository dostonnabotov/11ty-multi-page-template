# Eleventy Template

This is a template for a static site built with [Eleventy](https://www.11ty.dev/).

## Getting Started

1. Clone this repository
2. Run `npm install`
3. Run `npm start` to start the development server
4. Run `npm run build` to build the site

## Architecture

```
dist/
src/
├── _11ty_/
├  ├── collections/
├  ├── filters/
├── _data/
├── _includes/
├  ├── layouts/
├  ├── partials/
├── assets/
├  ├── sass/
├  ├── js/
├  ├── images/
├── pages/
├  ├── pages.json
├  ├── ...
├── posts/
├  ├── posts.json
├  ├── ...
├── index.njk
.eleventy.js
package.json
package-lock.json
...
```

## Features

- [Eleventy](https://www.11ty.dev/)
- [Sass](https://sass-lang.com/)
- [PostCSS](https://postcss.org/)
- [Prettier](https://prettier.io/)
- [ESLint](https://eslint.org/)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

## Acknowledgments

- [Eleventy Base Blog](https://github.com/11ty/eleventy-base-blog)
- [Collapsology - Folder Structure](https://github.com/collapsology/collapsology)
- [Kevin Powell - 11ty](https://www.youtube.com/watch?v=4wD00RT6d-g)
- [Webstroemp - Structuring Eleventy projects](https://www.webstoemp.com/blog/eleventy-projects-structure/)
