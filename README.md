# EveMark

A brief description of the project and its purpose.

## Getting Started Backend

EveMark Backend makes use of the expressjs framework, which is a Node.js-based back end web application framework for building RESTful APIs. 

Backend features include creating/reading/updating/deleting/authenticating the user with JWT tokens. We also used authorizations to improve server security. It also allows users to create/read/update/delete events stored on our MongoDB database at last mongodb. 
the app features uploading images and hosting them on cloudinary, as well as sending emails to participants via our dashboard using mailgun.

### Installing

After cloning the project, you need to install all the dependencies with you favourite package manager:
```sh
yarn 
//or
npm install

```
## Configuring environment variables

you need to add .env file to the project and add the appropriate values.
To get your Api keys go to https://cloudinary.com and https://www.mailgun.com

```sh
AUTH_SECRET=
PORT=3001
CLOUDINARY_URL=
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
MAILGUN_API_KEY=
MAILGUN_DOMAIN=

```



## Running the project
To run the project in the development environment, use the following command
```sh
yarn dev

```

To run the project in the production environment, use the following command
```sh
yarn start

```

