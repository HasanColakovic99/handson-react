import './App.scss';
import Courses from './pages/Courses/Courses';
import Course from './pages/Course/Course';
import Home from './pages/Home/Home';
import ScrollToTop from './ScrollToTop';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from './pages/Register/Register';
import LogIn from './pages/LogIn/LogIn';

function App() {
  return <>
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/courses" element={<Courses />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/sign-in" element={<LogIn />}></Route>
        <Route path="/course/:id" element={<Course />}></Route>
      </Routes>
    </Router>
  </>;
}

export default App;
