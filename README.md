# Getting Started with EmailService App

## Project Details

- Frontend is build using React.
- Backend is build using Flask.
- MySQL Db is running in cloud with ClearDB MySQL at Heroku.
- Flask-MySQLDB is used to communicate between DB and server.
- Sessions for login and for creating API endpoints using Flask.

# Backend

## Deployed at heroku 

Heroku - https://backend-flask-mysql.herokuapp.com/
Github - https://github.com/Chaitanyadp/EMailServiceAPI

## Created pip package emailservice being used in the backend service API

### `pip install emailservice`

# FrontEnd

## Deployed at below link

Heroku - https://react-send-mail-service.herokuapp.com/

Github - https://github.com/Chaitanyadp/React_Email_ServiceFE

## Features

- Simple UI using ReactJS, Router, Link, and Hooks.
- For styling, I have used Semantic UI for React.
- Axios-based React hooks for async HTTP request data
- Retains data and state regardless of each time component rerendering unless the config changes. 
- Automatic transforms for JSON data
- Transform request and response data

## Can be developed further (Due to time constraints I had while working on this, I haven't implemented them)

- No confirmation notification on mail being sent. 
- JWT/token based authentication can be implemented.
- Request and response interceptors can be added using Axios to handle Authorization headers with Bearer tokens.
- Add plugins to handle custom instance creation. 
- Remove vulnerabilities like XSS attacks.
- Loader for pages.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
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

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)
