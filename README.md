
# Student Management System – CRUD Using Express

This project is a simple **Student Management System backend** built using **Node.js** and **Express (ES Modules)**.
It performs **CRUD (Create, Read, Update, Delete)** operations on student data stored in a `db.json` file.

The project demonstrates file-based data persistence using the **Node.js `fs` module**.

---

## 📁 Project Structure

```
student-management-system/
├── index.js
├── db.json
├── package.json
├── package-lock.json
└── node_modules/ (ignored)
```

---

## 🚀 Getting Started

### 1️⃣ Initialize the Project

```bash
npm init -y
```

### 2️⃣ Install Dependencies

```bash
npm install express
```

### 3️⃣ Run the Server

```bash
node index.js
```

Server runs on:

```
http://localhost:3000
```

---

## 🧑‍🎓 Student Data Structure

```json
{
  "id": 1,
  "name": "Rahul",
  "course": "Computer Science",
  "year": 2
}
```

---

## 📌 API Endpoints

### 🔹 GET /students

Fetch all students from `db.json`.

**Response:**

```json
[
  {
    "id": 1,
    "name": "Rahul",
    "course": "Computer Science",
    "year": 2
  }
]
```

---

### 🔹 POST /students

Add a new student.

**Request Body:**

```json
{
  "id": 2,
  "name": "Anita",
  "course": "Mechanical",
  "year": 3
}
```

**Response:**

```json
{
  "message": "Student added successfully"
}
```

---

### 🔹 PUT /students

Update an existing student using `id`.

**Request Body:**

```json
{
  "id": 2,
  "year": 4
}
```

**Response:**

```json
{
  "message": "Student updated successfully"
}
```

**Error Response (If not found):**

```json
{
  "message": "Student not found"
}
```

---

### 🔹 DELETE /students/:id

Delete a student by ID.

**Example:**

```
DELETE /students/2
```

**Response:**

```json
{
  "message": "Student deleted successfully"
}
```

**Error Response:**

```json
{
  "message": "Student not found"
}
```

---

## 💾 Data Persistence

* Student data is stored in `db.json`
* Uses Node.js **fs module**
* Data remains saved even after server restarts

---

## 🛠️ Technologies Used

* Node.js
* Express.js
* ES Modules
* File System (`fs`)
* JSON file storage

---

## 🧪 Testing

* All APIs tested using **Postman**
* Verified complete CRUD flow:

  * Create student
  * Read students
  * Update student
  * Delete student

---

## ❌ Ignored Files

* `node_modules` (excluded using `.gitignore`)


---

## ✅ Conclusion

This project demonstrates a complete CRUD backend using Express and file-based storage, helping understand routing, data persistence, and API development in Node.js.
