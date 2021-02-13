# Rick and Morty Universe Web Page Project

Simple Rick and Morty themed React Application which enables you to navigate through info about the universes' characters.

This web app was designed on a 24" Full HD Monitor. It was tested on a Full HD Laptop and worked fine, however if you use a Macbook (with its unconventional screen resolution) your mileage may vary (I'm too poor to obtain one).\
_And use Chrome, please._

This project was bootstrapped with [Create React Home](https://github.com/facebook/create-react-app).

## Commands

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

# Changelog

### 0.0.5

#####Fixed Breadcrumb navigation:
Active links now change their style
Links now redirect as intended

Fixed some styling on Detailed Character page\
Fixed some scaling issues on smaller screens\
Fixed web site crashing when typing in the search field while on Detailed Character page\
Added error message if no matching characters returned\
Episodes are now being fetched and displayed on Detailed Character page\
Removed annoying text selection on Pagination\
Removed some more unused code snippets\
Added all missing PropTypes

### 0.0.4

Fixed chevron icon in Select menu clipping into select div\
Centered "surf the Rick and Morty universe" text in home page\
Fixed home page padding and margin problems\
Added search icon to search field\
Fixed search field positioning\
Removed default outlines and borders

### 0.0.3

Fixed TODOs:

    Card.js:
        Removed unused props
        Removed history
    Hero.js:
        Removed unused imports
        Added PropTypes
    Pagination.js:
        Prettified code
    DetailedCharacter.js:
        Removed console.log() statements
    Home.js:
        Cleaned up imports
    consts.js:
        moved SERVER_URL variable to .env

Added date and time formatting in Detailed Character page\
Fixed issue with home page displaying only one card per row"

### 0.0.2

Changed ESLint to give warnings instead of errors on non-critical events\
Moved API URL to an environment variable\
Fixed pre-commit hook in Husky\
Fixed ESLint code errors\
Added checks for import order and console.log() presence\
Removed unused files\
Updated page name, description and icon
