# EveMark

A brief description of the project and its purpose.

## Getting Started Backend

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Installing

After cloning the project, you need to install all the dependencies with you favorate package manager:
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

