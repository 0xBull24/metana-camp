# Styling a react app

## Normal CSS

Just import a normal CSS file and make changes to the css file based on classes and ids.
Not recommended as this files can grow abnormally large and hard to maintain. 

## Local scoping

This method allows smaller chunks of css code to be applied. Typically done per component level. Modules are very specific in naming convention as `[componentName].module.css` anything else will not be noticed and may cause some confusion. See `CssModules.jsx`.

## Styled components

Styled components (SC) or emotions are packages used for this kind of styling. SC allows for styles to be created at the component level - no separate css file for the component. SC can be installed with `npm install styled-components`. CSS in JS makes the code a little less performant since JS has to be processed in order to load the css

## Utility Lib

Tools like tailwind css allow css to be written inline with elements and helps to define css quicker. More use with the library will help to learn faster. Getting started with tailwind is [here](https://tailwindcss.com/docs/installation)

