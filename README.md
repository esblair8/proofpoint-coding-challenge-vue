# proofpoint-coding-challenge-vue-app
## Project setup
#### Install dependencies 
###### Note you wil need a version of node installed as well as npm
#
```
npm install
```

#### Compiles and hot-reloads for development
```
npm run serve
```

#### Compiles and minifies for production
```
npm run build
```

#### Lints and fixes files
```
npm run lint
```

#### Run unit tests
```
npm run test:unit
```

## Sentence validation function
###### The function that peforms the validations is exported from src/validator/index.js
###### It will run the various sub validation (imported from seperate files)based on an object with the following configuration:
# 
#
| Attribute      | Type    | Default | Description                                                             |
|----------------|---------|---------|-------------------------------------------------------------------------|
| capital-letter | Boolean | true    | validate the first character is a capital letter                        |
| full-stop      | Boolean | true    | validate the sentence ends with a a full stop                           |
| quotes         | Boolean | true    | validate there is an even number of quotation marks (single and double) |
| numbers        | Boolean | true    | validates integers below 13 are spelled long form                       |

## Front End Implementation Details
###### The front end is is a single page application (SPA) written with the VueJS front end framework
###### which make use of a component style architecure (similar to react)
###### and makes use of directives (similar to Angular)
###### It makes use of Vuex for state management where necessary and VueRouter for client side routing

## Tests 
###### Tests are run using Jest and vue-test-utils (for vue components) and can be found in the tests folder. (run tests with the above command)
