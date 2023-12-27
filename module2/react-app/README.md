# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Understanding Project Structure

Node modules folder typically holds all the dependencies for the  project in this folder is should always be included in a `.gitignore`.

Public folder is for public assets. Font, images, videos, etc. Most times the assets are available with a url.

`SRC` files are bundled. so if you have assets in the src folder it gets bundled. Typically will have one entry point to the app so `main.jsx` in this case. same is true for html with `index.html`. 

`Package.json` is used to show all the dependencies and scripts used for the project.

Components may have dedicated stylesheets.
