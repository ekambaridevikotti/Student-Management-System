import express from "express";
import fs from "fs";

const app = express();
const PORT = 3000;

app.use(express.json());

// Helper function to read data
const readData = () => {
  const data = fs.readFileSync("db.json", "utf-8");
  return JSON.parse(data);
};

// Helper function to write data
const writeData = (data) => {
  fs.writeFileSync("db.json", JSON.stringify(data, null, 2));
};

/* =========================
   GET ALL STUDENTS
========================= */
app.get("/students", (req, res) => {
  const data = readData();
  res.json(data.students);
});

/* =========================
   ADD NEW STUDENT
========================= */
app.post("/students", (req, res) => {
  const data = readData();
  const { name, course, year } = req.body;

  if (!name || !course || !year) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const newStudent = {
    id: Date.now(),
    name,
    course,
    year,
  };

  data.students.push(newStudent);
  writeData(data);

  res.status(201).json({
    message: "Student added successfully",
    student: newStudent,
  });
});

/* =========================
   UPDATE STUDENT
========================= */
app.put("/students", (req, res) => {
  const data = readData();
  const { id, name, course, year } = req.body;

  const studentIndex = data.students.findIndex(
    (student) => student.id === id
  );

  if (studentIndex === -1) {
    return res.status(404).json({ message: "Student not found" });
  }

  data.students[studentIndex] = {
    ...data.students[studentIndex],
    name,
    course,
    year,
  };

  writeData(data);

  res.json({
    message: "Student updated successfully",
    student: data.students[studentIndex],
  });
});

/* =========================
   DELETE STUDENT
========================= */
app.delete("/students/:id", (req, res) => {
  const data = readData();
  const studentId = Number(req.params.id);

  const filteredStudents = data.students.filter(
    (student) => student.id !== studentId
  );

  if (filteredStudents.length === data.students.length) {
    return res.status(404).json({ message: "Student not found" });
  }

  data.students = filteredStudents;
  writeData(data);

  res.json({ message: "Student deleted successfully" });
});

/* =========================
   SERVER
========================= */
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
