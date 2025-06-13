# VibeStream Backend

This repository contains the backend for a YouTube-like platform built with Node.js, Express, MongoDB/Mongoose, and JavaScript. It provides functionality for user authentication, channel creation, video uploads, likes, comments, and personalized feeds.

---

## Table of Contents

* [Features](#features)
* [Technologies](#technologies)
* [Setup & Installation](#setup--installation)
* [Environment Variables](#environment-variables)
* [Running the Server](#running-the-server)
* [API Documentation](#api-documentation)

  * [Authentication](#authentication)
  * [Channels](#channels)
  * [Videos](#videos)
  * [Comments](#comments)
  * [Feed](#feed)
* [Postman Collection](#postman-collection)
* [Folder Structure](#folder-structure)
* [Contributing](#contributing)
* [License](#license)

---

## Features

* User registration & login with JWT authentication
* Secure password hashing using bcrypt
* Create and manage channels
* Upload videos (file handling with Multer and Cloudinary storage)
* Like/unlike videos
* Comment on videos
* Generate personalized feeds

---

## Technologies

* **Node.js** & **Express**: HTTP server and routing
* **JavaScript** : programming language
* **MongoDB** & **Mongoose**: Database and ODM
* **Multer**: Handling multipart/form-data for file uploads
* **Cloudinary**: Cloud-based media storage
* **JWT**: JSON Web Tokens for authentication
* **bcrypt**: Password hashing
* **Postman**: API testing

---

## Setup & Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Adarshused/vibeStream_backend.git
   cd youtube-clone-backend
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Configure environment variables**
   Create a `.env` file in the root directory and add the following (see [Environment Variables](#environment-variables)):

   ```env
   PORT=8000
   CORS_ORIGIN = *
   ACCESS_TOKEN_SECRET=<your-access-token>
   REFRESH_TOKEN_SECRET=<your-refresh-token>
   REFRESH_TOKEN_EXPIRY=<your-refresh-token-exp>
   ACCESS_TOKEN_EXPIRY=<your-access-token-exp>
   MONGO_URI=<your-mongodb-connection-string>
   JWT_SECRET=<your-jwt-secret>
   CLOUDINARY_CLOUD_NAME=<cloudinary-cloud-name>
   CLOUDINARY_API_KEY=<cloudinary-api-key>
   CLOUDINARY_API_SECRET=<cloudinary-api-secret>
   ```

---

## Environment Variables

| Variable                | Description                                |
| ----------------------- | ------------------------------------------ |
| `PORT`                  | Port on which the server runs (e.g., 8000) |
| `MONGO_URI`             | MongoDB connection string                  |
| `JWT_SECRET`            | Secret key for signing JWT tokens          |
| `CLOUDINARY_CLOUD_NAME` | Your Cloudinary cloud name                 |
| `CLOUDINARY_API_KEY`    | Your Cloudinary API key                    |
| `CLOUDINARY_API_SECRET` | Your Cloudinary API secret                 |

---

## Running the Server

* **Development** (with automatic reloads):

  ```bash
  npm run dev
  ```

* **Production**:

  ```bash
  npm run build
  npm start
  ```

---

## API Documentation

All endpoints are prefixed with `/api`.

### Authentication

| Method | Endpoint             | Description              | Protected |
| ------ | -------------------- | ------------------------ | --------- |
| POST   | `/api/v1/users/register` | Register a new user      | No        |
| POST   | `/api/v1/users/login`    | Authenticate and get JWT | No        |

### Channels

| Method | Endpoint                   | Description          | Protected |
| ------ | -------------------------- | -------------------- | --------- |
| POST   | `under process`            | Create a new channel | Yes       |
| GET    | `under process`            | Get channel details  | No        |

### Videos

| Method | Endpoint                        | Description                              | Protected |
| ------ | ------------------------------- | ---------------------------------------- | --------- |
| POST   | `under process`            | Upload a new video (Multer + Cloudinary) | Yes       |
| GET    | `under process`            | Get video metadata and URL               | No        |
| POST   | `under process`            | Like or unlike a video                   | Yes       |
| GET    | `under process`            | Get comments for a video                 | No        |

### Comments

| Method | Endpoint                        | Description              | Protected |
| ------ | ------------------------------- | ------------------------ | --------- |
| POST   | `under process`                 | Add a comment to a video | Yes       |

### Feed

| Method | Endpoint    | Description                 | Protected |
| ------ | ----------- | --------------------------- | --------- |
| GET    | `under process`| Get personalized video feed | Yes       |

---

## Postman Collection

Import the Postman collection `vibeStream.postman_collection.json` (included in `/postman` folder) to explore and test all endpoints.

---

## Folder Structure

```
├── src                       # Source files
│   ├── controllers           # Route handlers
│   ├── middlewares           # Auth, error handling, file upload
│   ├── models                # Mongoose schemas
│   ├── routes                # Express routers
│   ├── services              # Business logic, Cloudinary integration
│   ├── utils                 # Helpers (JWT, bcrypt wrappers)
│   ├── types                 # TypeScript type definitions
│   └── app.js                # Express app setup
├── .env.example             # Example environment variables
├── package.json
├── tsconfig.json
└── README.md                # This file
```

---

## Contributing

Contributions are welcome! Please open issues or submit pull requests for bug fixes and enhancements.

---

## License

This project is licensed under the MIT License. See `LICENSE` for details.

---

## Acknowledgements

* Inspired by YouTube
* Thanks to libraries: Express, Mongoose, Multer, Cloudinary, JWT, bcrypt
