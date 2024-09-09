import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Courses from "./Pages/Course";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Footer from "./Components/Footer";
// import EducatorDashboard from "./Pages/EducatorDashboard";
import StudentDashboard from "./Components/Student/StudentProfile.jsx";
import CourseDetail from "./Pages/CourseDetail";
import VerifyOTP from "./Components/VerifyAccount";
import Educators from "./Pages/Educator";
import EducatorProfileDetail from "./Pages/EducatorProfileDetail.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/student_dashboard" element={<StudentDashboard />} />
        {/* <Route path="/educator_dashboard" element={<EducatorDashboard />} /> */}
        <Route path="/forgot-password" element={<VerifyOTP />} />
        <Route path="/verification" element={<VerifyOTP />} />
        <Route path="/courses/:id" element={<CourseDetail />} />
        <Route path="/educators" element={<Educators />} />
        <Route
          path="/educator_detail/:id"
          element={<EducatorProfileDetail />}
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
