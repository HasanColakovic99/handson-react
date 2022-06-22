import './App.scss';
import Courses from './pages/Courses/Courses';
import Course from './pages/Course/Course';
import Home from './pages/Home/Home';
import ScrollToTop from './ScrollToTop';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return <>
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/courses" element={<Courses />}></Route>
        <Route path="/course" element={<Course />}></Route>
      </Routes>
    </Router>
  </>;
}

export default App;
