import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import FCourses from './components/FCourses/FCourses';
import Title from './components/Title/Title';
import Testimonials from './components/Testimonials/Testimonials';
import Footer from './components/Footer/Footer';
import Courses from './components/Courses/Courses'; 
import Contact from './components/Contact/Contact';
import CourseDetails from './components/CourseDetails/CourseDetails';
import AboutUs from './components/AboutUs/AboutUs'; 
import UserDashboard from './components/UserDashboard/UserDashboard';



const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
          
            <Hero />
            <div className="container">
              <Title subTitle='Top Courses' title='For You to Explore' />
              <FCourses />
              <Title subTitle='TESTIMONIALS' title='What Student Says' />
              <Testimonials />
            
            </div>
          </>
        } />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:id" element={<CourseDetails />} />
        <Route path="/about" element={<AboutUs />} />

        <Route path="/contact" element={<Contact />} />
        <Route path="/dashboard" element={<UserDashboard />} />

       
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
