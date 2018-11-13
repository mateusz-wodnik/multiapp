# Task management and maps application

## Description
This project is a tasks management PWA for mobile devices, that allows user to create and save tasks and related places.
Map is created with Mapbox GL JS library and vector tiles from openMapTiles.  
Application is able to work completely offline (excluding Google Places and OpenWeather service) after downloading to mobile device ('through save to screen'). It is possible thanks to IndexedDB which is used to store tasks data and Mapbox GL JS which was customized to serve offline stored tiles. 

## Important files
* `public/custom-service-worked.js` - custom service worker (application is not using service worker provided by CRA by default)
* `public/static/wroclaw` - map tiles (refactored `.mbtiles` database to 'normal' folder structure)
* `src/modules` - reusable, independent components
* `src/components` - main application components
* `src/_utils` - utilities
* `src/APIS` - external APIS handlers

## Features in development
* server side API that serves live MPK buses and trams position (application at the moment is using prepared JSON files to display MPK layer)

## Build setup
This app was developed using:
* ES6
* CRA
* Service workers
* React.js
* Mapbox GL JS
* OpenMapTiles
* SASS (original syntax)
* CSS Modules
* HTML5

```bash
# To install dev-dependencies, just go to the root folder and run
yarn install

# To run dev version run
yarn start

# To build production version run
yarn build
```
