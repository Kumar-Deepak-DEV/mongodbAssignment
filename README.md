# 🚀 MongoDB Assignment

Welcome to the **MongoDB Assignment** repository! This project demonstrates basic CRUD operations using **Node.js**, **Express.js**, and **MongoDB** as part of semester coursework.

---

## 📂 Repository Structure

The repository contains a single server application for managing user data.

```
mongodbAssignment/
├── server_assign/        # 👥 User Management API
│   ├── index.js
│   ├── package.json
│   └── .gitignore
└── README.md
```

---

## 📋 Assignment Overview

| # | Folder | Project Name | Description | Port | Status |
|:--|:-------|:-------------|:------------|:-----|:-------|
| 1 | `server_assign` | 👥 User Management API | RESTful API to manage user records with MongoDB | 3000 | ✅ Completed |

---

## 🛠️ Assignment Details

### 1. 👥 User Management API (`/server_assign`)

A RESTful API for managing user data stored in MongoDB.

**Tech Stack:** Node.js · Express.js · MongoDB · Mongoose

**Features:**
- 📋 List all users
- 🆔 Fetch a specific user by ID
- ➕ Add a single user
- ➕➕ Add multiple users
- ✏️ Update a user (PATCH)
- ✏️ Update a user (PUT)
- 🗑️ Delete a user

**API Endpoints:**

| Method | Endpoint | Description |
|:-------|:---------|:------------|
| `GET` | `/` | Basic health check |
| `GET` | `/users` | Retrieve all users |
| `GET` | `/user/:id` | Fetch a user by ID |
| `POST` | `/adduser` | Add a single user |
| `POST` | `/addusers` | Add multiple users |
| `PATCH` | `/patch-user/:id` | Update a user partially |
| `PUT` | `/put-user/:id` | Update a user fully |
| `DELETE` | `/delete-user/:id` | Delete a user |

**Sample User Schema:**
- `_id`: Number
- `name`: String
- `city`: String
- `membership`: String

---

## 🚀 Getting Started

1. Navigate to the `server_assign` folder.
2. Install dependencies: `npm install`
3. Ensure MongoDB is running and update the connection string in `index.js` if needed.
4. Start the server: `npm start` or `node index.js`

The server will run on port 3000 by default.


---

## 📝 License

This project is for **educational purposes only**.

---

<div align="center">
  Developed with ❤️ by <a href="https://github.com/Kumar-Deepak-DEV">Deepak Kumar</a>
</div>