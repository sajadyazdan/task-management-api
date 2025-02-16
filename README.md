# 📌 Task Management API

A RESTful API built with **Node.js**, **Express.js**, and **MySQL** to manage tasks efficiently. This API provides endpoints for creating, retrieving, updating, and deleting tasks.

## 🚀 Features

- Task CRUD operations (Create, Read, Update, Delete)
- Uses **MySQL** for structured data storage
- Follows **MVC architecture** for maintainability
- **Sequelize ORM** for database interaction
- **JWT Authentication** (future enhancement)

---

## 🏗️ Installation

### **1️⃣ Clone the Repository**

```sh
git clone https://github.com/sajadyazdan/task-management-api.git
cd task-management-api
```

### **2️⃣ Install Dependencies**

```sh
npm install
```

### **3️⃣ Set Up Environment Variables**

Create a .env file in the project root and add the following:

```
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=taskdb
PORT=5000
```

### **4️⃣ Set Up the Database**

```sh
npx sequelize-cli db:migrate
```

### **5️⃣ Start the Server**

```sh
npm start
```

By default, the API runs at http://localhost:5000.
