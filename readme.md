# Phonebook REST API

An Express.js-based phonebook API with user authentication, CRUD operations for contacts, and
supporting avatar updates via multipart form-data.

## Structure:

- **/controllers** - Handles requests, interacts with models, and sends responses.
- **/helpers** - Contains utility/helper functions used across different parts of the application,
  aiding in various functionalities.
- **/middlewares** - Contains middleware functions (e.g., authentication middleware).
- **/models** - Defines database schemas and interacts with the database.
- **/public** - Serves as a temporary storage directory for user avatars before they're uploaded to
  the database. It temporarily holds user avatar images during the upload process.
- **/routes** - Defines API endpoints and routes.
- **/temp** - Another temporary storage directory used by the application for file uploads or other
  transient data. It may also be utilized for handling temporary data or file manipulation before
  final processing or storage.
- **app.js** - Entry point of the application, sets up server and middleware.
- **Dockerfile** - Configuration file containing instructions for building a Docker image for the
  application.
- **nodemon.json** - Configuration file for Nodemon, a utility that monitors changes in the
  application and automatically restarts the server during development.
- **package.json** - Contains project metadata and dependencies.
- **README.md** - Provides instructions for setting up and running the application.
- **server.js** - Server setup file, handling server configurations or starting the application.

## Functionality:

### Authentication:

- User registration, login, and logout endpoints.
- Middleware for authentication and authorization.

### Contacts Management:

- API endpoints for CRUD operations on contacts.
- Endpoints to retrieve, add, update, and delete contacts.
- Database models to manage contacts.

## Technologies Used:

- Node.js and Express for the backend.
- Database MongoDB for storing contact information.
- Authentication using JSON Web Tokens (JWT).

## Development Workflow:

### Setup:

Clone the repository.  
Install dependencies using `npm install`.

### Run Application:

Use `npm start` to start the server.  
Or use `npm run start:dev` to start the server in development mode.
