# Job Application Portal API

A RESTful Node.js API that allows candidates to register, login, upload resumes, and apply to jobs.

---

## Tech Stack

- Node.js + express.js
- Mongodb with mongoose
- JWT Authentication
- Multer for file upload
- dotenv

---

## Step instructions

1. ** Clone the repository **

   ```bash
   git clone https://github.com/your-username/job-application-api.git
   cd job-application-api

   ```

2. install dependencies
   npm install

3. Set up .env file
   Create a .env file in the root:

   PORT = 5000
   MONGO_URI = your_mongodb_connection_string
   JWT_SECRET = your_secret_key

4. Run the server
   node server.js

   server will run at http://localhost:5000

5. Authentication
   Use JWT token in headers for app protected routes
   Authorization: Bearer <token>

# API Endpoints

- AUTH
  POST /auth/register -> Register User
  POST /auth/login -> login and get token

- Resume upload
  POST /resume/upload -> Upload resume
  (PDF/DOCX)
  Form-Data: key =resume, type=file

- Jobs
  GET/application -> View user's application (Requires JWT token)

# Testing

    use thunder Client or Postman for testing endpoints.
    Make sure to add Authorization: Bearer <token> in protected routes

# Sample .env

    PORT-5000
    MONGO_URI=mongodb+srv://:<db_password>@cluster0.aysftlo.mongodb.net/<database_name>?retryWrites=true&w=majority&appName=Cluster0
    JWT-SECRET=<secretkey>

# Auther

    Shobhana Damor
