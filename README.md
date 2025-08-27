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

   PORT=5000
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET_KEY= your_secret_key

4. Run the server
   node server.js

   server will run at http://localhost:5000
   Render (example): https://job-application-api-4.onrender.com

5. Authentication
   Use JWT token in headers for app protected routes
   Authorization: Bearer <token>

# API Endpoints

# Example (Register):

{
"name": "Shobhana",
"email": "shobhana@example.com",
"password": "123456"
}

# Example (Login Response):

{
"token": "your_jwt_token_here"
}

# Resume Upload

POST /resume/upload → Upload resume (PDF/DOCX only)

# Request:

Headers: Authorization: Bearer <token>

Body (form-data):

Key: resume (type: file)

# Response:

{
"message": "Resume upload successfully",
"path": "uploads/1724827123-resume.pdf"
}

# Jobs

GET /application → View user’s job applications (Requires JWT)

POST /jobs → Create job (Admin/Auth)

POST /jobs/apply/:jobId → Apply for a job (Requires JWT)

# Testing

Use Thunder Client / Postman to test:

1.Register user → POST /auth/register

2.Login user → POST /auth/login (copy token)

- Add token in headers → Authorization: Bearer <token>

3.Upload resume → POST /resume/upload

4.Apply for job → POST /jobs/apply/:jobId

5.view application ->GET /applications

# Sample .env

    PORT-5000
    MONGODB_URI=mongodb+srv://:<db_password>@cluster0.aysftlo.mongodb.net/<database_name>?retryWrites=true&w=majority&appName=Cluster0
    JWT_SECRET_KEY=<secretkey>

# Auther

    Shobhana Damor
    Fresher MERN Stack Developer | Passionate about Node.js & Backend Development
