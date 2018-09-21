This application was built using React.js and Redux, compiled using Webpack & Babel, and styled using SASS.

The decision to use Redux instead of passing the entire state down directly from parent to child through props or storing state in url params, was made primarily to practice using Redux, and enhance user experience. By storing the state in a reducer, after a user selects a book to view, they can navigate back to the search page and they will find themselves in the same place where they left off.

Room for improvement:
- Responsiveness on large screen could be improved.
- Code refactoring could be improved, components could be broken down into smaller ones
- Testing
- Legacy CSS has !importants which need to go

Setup
* $ npm install

Compile
* $ npm run compile

Dev
* During css editing run 'npm run watch-css'

Start
* $ npm start
(app will be served at localhost:3000)
