#Itap User List Task

## Getting Started

Steps to run `itap_task` application

## Installation

git clone `clone url`

cd into cloned folder
cd itap_task

`yarn install`
(It will install required dependencies and link modules internally.)

## Folder Structure

After creation, your project should look like this:

```
mayaedu-subscription/
  README.md
  node_modules/
  yarn.lock
  package.json
  .env
  .eslinitrc.json
  src/
    apis/
    components/
    views/
    App.jsx
    index.jsx
    index.css
    index.html
```

## Available scripts

To start application in development environment.

`yarn start`
Runs the app in the development mode. Open `http://localhost:3000` to view it in the browser.

`yarn run build`
Builds the app for production to the `build` folder

## Warning

We are also pushing the .env file to git for testing purposes otherwise its not advisable to push these kind of sensitive files to git
