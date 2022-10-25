const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

app.use(cors());

const courses = require("./data/course.json");
const coursesFeat = require("./data/coursesFeatures.json");

app.get("/", (req, res) => {
  res.send("Course API Running");
});

app.get("/courses", (req, res) => {
  res.send(courses);
});

app.get("/courses/:id", (req, res) => {
    const id = req.params.id;
    const courseData = coursesFeat.find((n) => n.course_id === id);

    res.send(courseData);
});

app.listen(port, () => {
  console.log(" running on port", port);
});