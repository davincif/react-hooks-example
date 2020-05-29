![hikers-logo](./docs/assets/logo_hikers_960x360.png)

# Table of contents

1. [React Standard README](docs/STD_REACT_README.md)
2. [Hikers Code Quality](#Hikers-Code-Quality-Guide-Lines)
3. [Style Guides](#Style-Guides)
4. [Code Documentation](#Code-Documentation)
5. [Design Patterns](#Design-Patterns)
6. [Dev Tips](#Dev-Tips)
   1. [EditorConfig](#editorconfig-logo-EditorConfig)
   2. [Settings Sync](#Settings-Sync-logo-Settings-Sync)
7. [Linters and Dev Tools](#Linters-and-Dev-Tools)
   1. [ESLint](#ESLint)
   2. [ESLint on Save](#ESLint-on-Save)
   3. [Stylelint](#Stylelint)


# Hikers' Code Quality Guide Lines
The Hikers team uses the following code quality standards throughout it's web projects:


## Style Guides
* [JSX](https://github.com/airbnb/javascript/tree/master/react): The AirBnB style guide for React.
* [CSS](https://github.com/stylelint/stylelint-config-standard): since there's no good css lint for AirBnB, we decided to go with the stylelint standard.
* [JS](https://github.com/airbnb/javascript): The AriBnB Style Guide for pure JavaScript.


## Code Documentation:
* [React](https://react-styleguidist.js.org/docs/documenting.html)


## Design Patterns
For this project we use the **MVP** ─ *Model View Presenter* ─ design pattern, with the addition of **Provider** and **Reducer** files used to control states in React.

So, Just for the sake of naming things, we called it **MVP - PR** pattern. With is further explained bellow:

- **M - Model**: Retrieves and manipulates data, access APIS and any other action regarding data storage and fetching.

- **V - View**: Everything regarding UI and each interations logic it may have with the user, never directly communicating with the model itself.

- **P - Presenter**: Where lies any business inteligence and any logic related with acting updon the data (models) or the UI (views).

  exemple from [TouchGFX](https://support.touchgfx.com/docs/development/ui-development/software-architecture/model-view-presenter-design-pattern/): ![um teste louco](docs/assets/mvp.png)

  **NOTE**: the comunication between views and models are made exclusively through the producer; furthermore, while the producer can actively change the state of both models and views, these will interact back with the producer from an event paradigm.

  Although all that comes back to function calling, maintaining this difference in mind can be arguably useful.

- **P - Provider**:

- **R - Reducer**:


## Dev Tips

- #### ![editorconfig-logo](./docs/assets/editorconfig_logo.png) [EditorConfig](https://editorconfig.org/)
  It's available for a fairly good amount of editor and tries to unify some settings. That comes in handy when trying to unify the code style of a whole team while still respecting each person's preferences.

  Check it out for [VSCode](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig), [Atom](https://atom.io/packages/editorconfig) and [Sublime](https://packagecontrol.io/packages/EditorConfig)

  See [.editorconfig](./.editorconfig).

- #### ![Settings-Sync-logo](./docs/assets/Settings_Sync_logo.png) [Settings Sync](https://marketplace.visualstudio.com/items?itemName=Shan.code-settings-sync)

  Available **only for VSCode**, this extensions allows you to sync all your settings, including themes and other extentions to your GitHub account as a Gist allowing you to safely and easly move all your development environment to another computer.

  We don't know any package with this quality yet for Atom or Sublime. However it's not that big of a deal since you can simply save all your configuration files yourself and download them whenever you need.

## Linters and Dev Tools

- #### ESLint
  [ESLint](https://eslint.org/) is already configured, see [.eslintrc.yml](./.eslintrc.yml) for detail.

  There're also a couple of ignored files. See [.eslintignore](./.eslintignore) to know them.

  Use the command ```npm run eslint``` to check whether there is a problem in yours .js and .jsx files.

  Use ```npm run eslint:fix``` to fix them.

  **Note that not all problens are autofixable!**

- #### ESLint on Save
  On **VSCode** you need to install this [linter](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) and add the following lines to your *setting.json* conf file:
  ```json
  "editor.formatOnSave": true,
    "[javascript]": {
      "editor.codeActionsOnSave": {
        "source.fixAll": true
      },
    },
  ```

  This setting will allow you to lint and fix you file everytime to save it.

  As not all programmers likes this behavior, that's entirely up to you to adop or not this step.

- #### Stylelint
  [Stylelint](https://stylelint.io/) is already configured, see our [.eslintrc.yml](./.eslintrc.yml) for detail.

  Use the command ```npm run stylelint``` to check whether there is a problem in yours .csss files.

  Use ```npm run stylelint:fix``` to fix them.

  **Note that not all problens are autofixable!**

  **Note2:** A downside of this approach in comparison to the Eslint one is that here the lint rules are set manually in the config file, and not by some plugin. So along with more independency, it also comes with far worse documentation on the metter. Beyond that, forcing us to go trough the Stylelint docs to find out some rule to mach any particular necessity we might have.

- #### Stylelint on Save
  On **VSCode**, just like before, you need to install this [linter](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint) and add the following lines to your *setting.json* conf file:
  ```json
  "editor.formatOnSave": true,
    "[css]": {
      "editor.codeActionsOnSave": {
        "source.fixAll": true
      },
    },
  ```

:brazil:
