#OpenSpace E2 HW
Molly Carmody, Kaitlyn McCarthy, Timmy Huang

##Overview
This project is for the E2 assignment of our CS 290 course. The assignment seeks to test and apply our learning from a class lesson React.js. In this project, we developed a website that hosts a series of favorite shows. Each show image can be clicked, to redirect to a page detailing more info about the show, or favorited, by clicking the heart icon below the picture.
##Running
###Dependencies
1. npm install --save react-star-ratings
2. npm install react-bootstrap bootstrap
3. npm install react-router-dom
4. npm install jquery popper.js

to run: Navigate to the project folder and run npm start


##Structure
The React component structure is as follows:
-App
--Headbar (navigation bar maintained at top of every page)
--Collection (collection of shows)
---Item (each show)
--Details (details about specific show)


## Features Included
###react Router
To navigate from the Collections component to the specific details page for a show, we use react router. When you click on the image of the show, the details component is loaded with the specific detail passed in as props for that show.

###Favoriting
In order to enhance our application, we decided to implement a "favorite" feature. Under each image is a heart icon. When clicked, the "favorite" state of the item toggles, thereby changing the color of the heart icon between white and red. Multiple items can be favorited and unfavorited.

###css
We also decided to add some css to make the page more appealing as well as drive a bit of user interaction. When a user hovers over the image icons, they grow. This was intended to encourage the user to click the image and understand it as an "option", leading to another page. Also, when the user hovers over both the image and the icon, the cursor type changes.

###Bootstrap and StarRatings
To expedite the development process, we used Bootstrap and StarRatings. StarRatings allows you to show a custom number of stars (out of a total defined rating). We used this on our details page for each of the items/shows.  








This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

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
