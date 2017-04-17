This application was built using React.js and Redux, compiled using Webpack & Babel, and styled using SASS.

The decision to use Redux instead of passing the entire state down directly from parent to child through props, was made primarily to enhance user experience. By storing the state in a reducer, after a user selects a book to view, they can navigate back to the search page and they will find themselves in the same place where they left off.

Notes:
- Responsiveness on large screen could be improved.
- Code refactoring could be improved, components could be broken down into smaller ones 

Setup
* $ npm install

Compile
* $ npm run compile

Dev
* During css editing run 'npm run watch-css'

Start
* $ npm start
