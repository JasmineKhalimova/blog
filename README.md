# Bloggs

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.0.

## To run client 

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## To run server

Run `json-server --watch api/db.json --port 9001` for a json server. Navigate to `http://localhost:9001/`.

## To run server and client concurrently

npm start

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

# PACKAGES USED

- Using concurrently to start and run serve and client same time
    npm install concurrently 

- Additional CSS libaries Boostrap 4 for addicitional css 
    npm install --save bootstrap
    
- Notes
Users can view comments for a blog post - Only single commenents
Users can add a comment to a blog post - Its working and sending to the json server however its not remianing in the browser
