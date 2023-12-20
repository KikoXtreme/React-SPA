# `Live Demo Link:` [Weather App](https://KikoXtreme.github.io/React-SPA/)

# React SPA Form

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## React Test Validation Form Fields

This is a Single Page Application (SPA) project. \
The project is one page and contains most common HTML input fields. \
All fields have to be validated in order to be sent to a post bin service.

## Form Inputs

Username (text) \
Email (email) \
Password (password) \
Age (number) \
Gender (dropdown) \
Date (date) \
Time (time) \
File (file) \
Radio button (radio) \
Checkbox (checkbox)

## Validation

If the field is valid a green bar is shown between the icon (fontawesome) and the input field. \
If the field is not valid the bar is red and a red text is shown below with the specific field requirement. \
The last field is checkbox with Terms and Conditions and if it is not checked the Submit button is disabled.

Username - Username must be between 3 and 10 characters \
Email - At least 3 characters, @ symbol, gmail, yahoo or abv, dot(.) and ending with bg or com \
Password - Password must be at least 3 characters long \
Age - User must be at least 18 years old\
Gender - Dropdown field with 2 options (Male/Female) \
Date - Date is only required as a validation \
Time - Time is only required as a validation \
File - Upload user picture or avater, it is not mandatory\
Radio button - Only one option is available (user/guest) \
Checkbox - Is you don't check the field, the Submit button is disabled and you can't submit the form. 

## Submition

The submition was sent to post bin service: Webhook.site \
Test Url: https://webhook.site/ee43433e-f646-4057-8cde-c75a788321dc

## Create React App and Available Scripts

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.