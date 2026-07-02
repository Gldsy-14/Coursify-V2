import express from 'express';
import cors from 'cors';
import authRoutes from "./routes/auth.route.js";
import courseRoutes from './routes/course.route.js';
import studentRoutes from './routes/student.route.js';
import enrollmentRoutes from './routes/enrollments.route.js';

const app = express();

app.use(express.json());
app.use(cors()); // Ensure cors is initialized

// Routes
app.use('/auth', authRoutes);
app.use('/courses', courseRoutes);
app.use('/students', studentRoutes);
app.use('/enrollments', enrollmentRoutes);

app.get("/", function (req, res) {
  res.send("Helloworld")
})

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});