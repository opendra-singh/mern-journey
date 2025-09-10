# 📝 Node.js Express To-Do API

A simple CRUD API built with **Node.js** and **Express** that manages to-do tasks.  
Data is stored in a local `data.json` file.

---

## 🚀 Features
- Add new tasks
- Update existing tasks
- Delete tasks
- Fetch all tasks
- Input validation using custom middlewares
- Centralized error handling

---

## 🛠️ Tech Stack
- Node.js
- Express
- fs/promises

---

## 📂 Project Structure
.
├── index.js # Main entry point
├── middlewares.js # Input validation
├── data.json # Storage file
└── README.md


---

## 📌 API Endpoints

### Fetch all tasks
**GET /**  
Returns all tasks stored in `data.json`.

---

### Add a new task
**POST /add/tasks**  
**Body (JSON or x-www-form-urlencoded):**
```json
{
  "task": "Buy groceries",
  "done_by": "2025-09-12"
}

Update a task

PUT /update/tasks
Body (JSON or x-www-form-urlencoded):

{
  "id": 1,
  "task": "Buy milk",
  "done_by": "2025-09-13"
}

Delete a task

DELETE /delete/tasks
Body (JSON or x-www-form-urlencoded):

{
  "id": 1
}

▶️ Getting Started

Clone this repo:

git clone https://github.com/your-username/todo-node.git
cd todo-node


Install dependencies:

npm install


Run the app:

node index.js


Test endpoints using Postman
 or cURL
.

🔮 Future Improvements

Switch from data.json to a database (MongoDB, PostgreSQL, or SQLite).

Add proper logging (Winston, Morgan).

Use RESTful routes (/tasks/:id instead of /update/tasks).

Add authentication and user management.

Write unit tests with Jest.