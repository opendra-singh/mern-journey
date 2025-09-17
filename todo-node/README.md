# 📝 Node.js Express To-Do API

A simple CRUD API built with **Node.js** and **Express** for managing to-do tasks.  
Tasks are stored in a local `data.json` file.

---

## 🚀 Features

- Add new tasks (`POST /add/tasks`)
- Update existing tasks (`PUT /update/tasks`)
- Delete tasks (`DELETE /delete/tasks`)
- Fetch all tasks (`GET /`)
- Request counting and rate limiting middleware
- Input validation middleware for all endpoints
- Centralized error handling

---

## 🛠️ Tech Stack

- Node.js
- Express
- fs/promises

---

## 📂 Project Structure

```
mern-journey/todo-node/
├── controllers/         # Route handlers (business logic)
│   └── tasksController.js
├── matric/              # Metrics and rate limiting
│   └── matriculation.js
├── middlewares/         # Validation and error handling
│   ├── errThrowing.js
│   └── validations.js
├── models/              # Data access layer
│   └── tasksModel.js
├── routes/              # API routes
│   └── tasks.js
├── data.json            # Storage file for tasks
├── index.js             # Main entry point
├── package.json         # Dependencies
└── README.md            # Project documentation
```

---

## 📌 API Endpoints

### Fetch all tasks
**GET /**  
Returns all tasks stored in `data.json`.

### Add a new task
**POST /add/tasks**  
**Body:**
```json
{
  "task": "Buy groceries",
  "done_by": "2025-09-12"
}
```

### Update a task
**PUT /update/tasks**  
**Body:**
```json
{
  "id": 1,
  "task": "Buy milk",
  "done_by": "2025-09-13"
}
```

### Delete a task
**DELETE /delete/tasks**  
**Body:**
```json
{
  "id": 1
}
```

### Request Count
**GET /requests**  
Returns the total number of requests received.

---

## 🧩 Middlewares

- **Validation:** Ensures required fields and correct types for each endpoint ([middlewares/validations.js](mern-journey/todo-node/middlewares/validations.js)).
- **Error Handling:** Centralized error responses ([middlewares/errThrowing.js](mern-journey/todo-node/middlewares/errThrowing.js)).
- **Rate Limiting & Request Counting:** Limits requests per IP and counts total requests ([matric/matriculation.js](mern-journey/todo-node/matric/matriculation.js)).

---

## ▶️ Getting Started

1. **Install dependencies:**
   ```sh
   npm install
   ```

2. **Run the app:**
   ```sh
   node index.js
   ```

3. **Test endpoints:**  
   Use Postman or cURL to interact with the API.

---

## 🔮 Future Improvements

- Switch from `data.json` to a database (MongoDB, PostgreSQL, etc.)
- Add proper logging (Winston, Morgan)
- Use RESTful routes (`/tasks/:id`)
- Add authentication and user management
- Write unit tests with Jest

---

## 📖 Reference

See [controllers/tasksController.js](mern-journey/todo-node/controllers/tasksController.js), [routes/tasks.js](mern-journey/todo-node/routes/tasks.js), and [middlewares/validations.js](mern-journey/todo-node/middlewares/validations.js)