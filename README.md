# My personal site
Here you'll find the source code for [this site](https://lukasmolin.github.io/).
It's my portfolio and a way for me to keep track of my progress as a web developer. It contains a organized list of my projects and i plan to integrate it with a blog so i can use as a journal or something like that to express some thoughts about software engineering and computer science in general.\
<img src="https://img.shields.io/badge/Typescript-007ACC.svg?style=flat-square&logo=typescript&logoColor=white"></img>
<img src="https://img.shields.io/badge/React-61CDE8.svg?style=flat-square&logo=react&logoColor=white"></img>
<img src="https://img.shields.io/badge/HTML-E34F26.svg?style=flat-square&logo=html5&logoColor=white"></img>
<img src="https://img.shields.io/badge/CSS-1572B6.svg?style=flat-square&logo=css3&logoColor=white"></img>

## Roadmap

- [x] Basic website
- [x] Deploy
- [ ] Change vanila css for styled components
- [ ] Integrate with Blog/CMS

## Running the app locally

This project was created using [Create React App](https://github.com/facebook/create-react-app).
If you wish to run it simply clone it to your machine then in the project folder execute:
```
npm install
npm start
```
After that you should find the site at: [http://localhost:3000](http://localhost:3000)

## Directory structure

Css files should be located next to the component importing them and deal only with specific elements of that component using html classes.
### assets

Static assets exported as jsx/tsx elements such as SVG elements.

### components

React components used as building blocks of pages

#### components/fx

React elements used to apply animations to other elements

#### components/gui

Visual components used to build the pages.

### datasource

Stores persistent information. The content of the site itself.

#### datasource/model

Stores information of the src/model entities such as Projects or Person.

#### datasource/pages

Stores information directly used by the src/pages components such as HomePage.

### model

Its the domain modelling. It has interfaces and generic classes to be used by the rest of the application.

### pages

Are the page components to be rendered by react router

#### pages/datasourceGetters

Static functions for each page to import its relevant data for rendering

#### pages/pageComponents

React elements representing full pages
## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

* [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).
* [React documentation](https://reactjs.org/).
* [Typescript documentation](https://www.typescriptlang.org/).
