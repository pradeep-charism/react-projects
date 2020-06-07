# My notes for React projects

Package.json
Manifest file. Dependency management.


Create package.json
npm init

Lightweight development only node server that serves a web app, opens it in the browser, refreshes when html or javascript change, injects CSS changes using sockets, and has a fallback page when a route is not found.
npm install lite-server --save-dev
# https://www.npmjs.com/package/lite-server

npm 

npm install -g create-react-app	Create new react app
 
_npx create-react-app first-app_

_create-react-app --help	Help_

npm start	Start the application. # Start local server

npm test	  Starts the test runner.

#### compile all the React code and place it in the root of a directory somewhere, all you need to do is run the following line. Bundles the app into static files for production. This will create a build folder which will contain your app. Put the contents of that folder anywhere, and you're done!
npm run build	

----

### Hosting on github
Make sure you've exited out of your local React environment, so the code isn't currently running. First, we're going to add a homepage field to package.json, that has the URL we want our app to live on.
package.json

"homepage": "https://pradeep-charism.github.io/react-projects/",

We'll also add these two lines to the scripts property.

"scripts": {
  // ...
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}

In your project, you'll add **gh-pages** to the devDependencies.

_npm install --save-dev gh-pages_

We'll create the build, which will have all the compiled, static files.

_npm run build_

Finally, we'll deploy to gh-pages.

_npm run deploy_

And we're done! The app is now available live at https://pradeep-charism.github.io/react-projects/.

----



npm start	Starts the development server.

npm install bootstrap@4.0.0	Install 

npm install reactstrap@5.0.0	

npm install react-popper@0.9.2	

npm i axios	

manifest.json: Configure settings based on devices, width, colour

jsbin.com : online code editor for Javascript

https://babeljs.io/

https://codepen.io/pen/

https://github.com/qaifikhan/JPMC-React-Training-27Nov/blob/master/README.md


https://test-hosting-8f9bf.firebaseapp.com/index.html

https://test-hosting-8f9bf.firebaseapp.com/product/details.html?p=10

https://firebase.google.com/

https://bit.ly/jpmc-code-27nov

https://www.mockapi.io/

https://sentry.io/welcome/

https://www.nginx.com/


npm run build
npm install -g firebase-tools
firebase start
firebase init
firebase serve
firebase deploy


Edyoda.com/
https://www.edyoda.com/course/1501?episode_id=2559



