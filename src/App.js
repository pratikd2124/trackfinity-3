import React from 'react';
import {
  BrowserRouter as Router,
  Route, Routes,
} from "react-router-dom";
import Navbar from "./Components/Navbar";
import Drawer from "./Components/Drawer";
import Courses from "./Components/Courses";
import Layout from './pages/Layout';
// import Graph from "./Components/Graph";
import Login from './pages/Login'
import HomeDashStud from './Components/Students/HomeDashStud'
import HomeDashTeach from './Components/Teachers/HomeDashTeach'
import HomeDashUnv from './Components/University/HomeDashUnv'
import CoursesTeach from './Components/Teachers/CoursesTeach'
import Dashboard from './pages/Dashboard'
import RegisterStud from './Components/Students/RegisterStud';
import Registerteach from './Components/Teachers/Registerteach';
import RegisterUni from './Components/University/RegisterUni';

import './App.css';
import Homecard from './pages/Homecard';
import Timeline from './Components/Timeline';
import StudentList from './Components/University/StudentList';
import CoursesStud from './Components/Students/CoursesStud';
import SubjectList from './Components/University/SubjectList';
import ShowTest from './Test/StudentApplyTest/ShowTest';
import ViewTest from './Test/CreateTest/ViewTest';
import Notification from './Components/Notification';
import Register from './Components/Register';
import AddTest from './Test/CreateTest/AddTest'
import DoTest from './Test/StudentApplyTest/DoTest'
import ApplyTest from './Test/StudentApplyTest/ApplyTest'
import ScoreTest from './Test/StudentApplyTest/ScoreTest'


function App() {
  return (
    <>
      <Router>
        <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Homecard key={Math.random()} />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="student-register" element={<RegisterStud />} />
            <Route path="teacher-register" element={<Registerteach />} />
            <Route path="university-register" element={<RegisterUni />} />
            <Route path="career" element={<Timeline />} />
            
            
          <Route path="studdashboard" element={<Dashboard key={Math.random()} />} >
              <Route index element={<HomeDashStud key={Math.random()} />} />
              <Route path="courses" element={<CoursesStud key={Math.random()} />} />   
              <Route path="exams" element={<ShowTest key={Math.random()} />} />   
              <Route path="Notices" element={<Notification key={Math.random()} />} />   
              <Route path="dotest" element={<DoTest key={Math.random()} />} />
              <Route path="applytest" element={<ApplyTest key={Math.random()} />} />
              <Route path="scoretest" element={<ScoreTest key={Math.random()} />} />


              
          </Route>
          <Route path="teachdashboard" element={<Dashboard key={Math.random()} />} >
            <Route index element={<HomeDashTeach key={Math.random()} />} />
            <Route path="courses" element={<CoursesTeach key={Math.random()} />} />
            <Route path="exams" element={<ViewTest key={Math.random()} />} />   
            <Route path="addtest" element={<AddTest key={Math.random()} />} />
               
          </Route>
          <Route path="orgdashboard" element={<Dashboard key={Math.random()} />} >
              <Route index element={<HomeDashUnv key={Math.random()} />} />
              <Route path="studentlist" element={<StudentList key={Math.random()} />} />
            <Route path="subjectlist" element={<SubjectList key={Math.random()} />} />
              
              
          </Route>
        </Route>
          {/* <Route path="/student/tracking" element={<Graph />} /> */}
          
            {/* <Route path="/doctor/login" element={<Logindoc />} /> */}
            
      </Routes>
    </Router>
    </>
  );
}

export default App;
