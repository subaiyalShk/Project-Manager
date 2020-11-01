# MERN Stack Resume Web App Template      
![ReactJS Resume Website Template](resume.gif?raw=true "ReactJS Resume Website Template")
### <a href="https://react-resume-template.herokuapp.com/">LIVE DEMO</a> 

## Description
This is a React + Node + express + mongoDB based personal resume website template. This may be abit of an over kill but I do plan on customizing the dashboard later on but for now I have given it a terminal style dashboard and login. Authentication is handled using JSONWeb tokens. This was originaly just a React based app by <a href="https://github.com/tbakerx/react-resume-template">Tim Baker</a>. Most of the componenets have been converted to functions and added some styling and animations to this project. Scroll based animations are also added in client/public/js/init.js which use jquery. This app is fully responsive and you can turn this into your own resume by modifying client/public/resumeData.json. More details on how to setup and turn it into your resume can be found below.

## Make it Your Own!
### 1. What to install 
1. Node.js install on your system <a href="https://nodejs.org/en/download/">HERE</a>
2. Nodemon to run server.js  <a href="https://nodemon.io/">HERE</a> 
3. Open terminal navigate to client folder of this project and run npm install. This will install all the dependencies.
4. Do the same thing as above but this time npm install from server directory in the project. 
5. Install MongoDB locally <a href="https://docs.mongodb.com/manual/installation/">HERE</a>

### 2. Build a Create-React-App
Spin up a react up by navigating to a directory of your choice an run the command `npx create-react-app` from your terminal. Go <a href="https://reactjs.org/docs/installation.html">HERE</a> to get started.
Once that is done `cd yourappname` and run `npm start` to test it out.
Hit ctrl+c in the terminal when you want to stop the server that the above command starts.
MAKE SURE YOU INSTALL ALL DEPENDENCIES.
### 3. Setup server
Next, download this resume template repo and copy the server folder to your project as it is. Once that is done, navigate to the server directory from your terminal and install all dependencies by running the command `npm install`.Test out the server by running the command `nodemon server.js`. If everything goes well you will see the following:
This is a secret
Listening at port 8000
Established a connection

### 4. Download the template
Once you have a React app up and running by following the steps in the above link, download my code by hitting the green "clone or download" button above and hit download zip. All you will have to do now is replace the "public" and "src" folders of your newly built app with mine that you just downloaded. If you run `npm start` now, you should see that your app renders the same as the one at the live demo link above.
### 4. Replace images and fonts
Next, you will want to replace the images, and fonts if you like, with your own. All you have to do is replace the images at public/images/header-background.jpg, public/images/testimonials-bg.jpg and public/favicon.ico with your own. <em>YOU MUST KEEP THE SAME NAMES ON THE IMAGES.</em>  
### 5. Fill in your personal info
To populate the website with all of your own data, open the public/resumeData.json file and simply replace the data in there with your own. Images for the porfolio section are to be put in the public/images/portfolio folder.
### 6. Make any styling changes you would like
Of course, all of the code is there and nothing is hidden from you so if you would like to make any other styling changes, feel free!
### 7. Enjoy your new Resume Website
When you're all done, run `npm start` again and you'll see your new personal resume website! Congratulations!


## Credits
##### Udemy Course
<a href="https://www.udemy.com/projects-in-reactjs-the-complete-react-learning-course/learn/v4/overview">Projects in ReactJS: The Complete React Learning Course by Eduonix</a>

#### HTML Design Template
<a href="https://www.styleshout.com/free-templates/ceevee/">Ceevee Template by Styleshout</a>

##### Header photo credit
<a href="https://unsplash.com/@mischievous_penguins?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge">Casey Horner</a>

##### Testimonial photo credit
<a href="https://unsplash.com/@samuelzeller?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge">Samuel Zeller</a>

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
