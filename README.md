# Table of contents

1. [React Standard README](docs/STD_REACT_README.md)
2. [Hikers Guide lines](#Hikers-Guide-lines)
   1. [Style Guides](#Style-Guides)
   2. [Code Documentation](#Code-Documentation)
   3. [Design Patterns](#Design-Patterns)


## Hikers Guide lines
The Hikers enterprise uses the following code quality standards throughout it's web projects:

#### Style Guides
* [JSX](https://github.com/airbnb/javascript/tree/master/react)
* [CSS](https://github.com/airbnb/javascript/tree/master/css-in-javascript)
* [JS](https://github.com/airbnb/javascript)

#### Code Documentation:
* [React](https://react-styleguidist.js.org/docs/documenting.html)

#### Design Patterns
For this project we use the **MVP** ─ *Model View Presenter* ─ design pattern, with the addition of **Provider** and **Reducer** files used to control states in React.

So, Just for the sake of naming things, we called it **MVP - PR** pattern. With is further explained bellow:
* M - Model: Retrieves and manipulates data, access APIS and any other action regarding data storage and fetching.

* V - View: Is a passive interface that display data and routes user commands to the presenter.

* P - Presenter: Retrieve data from model and formats it for display in the view.

* P - Provider:

* R - Reducer:
