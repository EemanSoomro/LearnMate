import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import courses from '../../courseData';
import './CourseDetails.css';

const CourseDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate(); // Import useNavigate
  const course = courses.find((course) => course.id === parseInt(id));

  if (!course) {
    return <div>Course not found</div>;
  }

  const handleEnrollClick = () => {
    // Navigate to the dashboard page
    navigate('/dashboard');
  };

  return (
    <div className="course-details-wrapper">
      <div className="course-details-container">
        <h1>{course.name}</h1>
        <img src={course.image} alt={course.name} className="course-details-image" />
        <p><strong>Price:</strong> ${course.price.toFixed(2)}</p>
        <p><strong>Rating:</strong> {course.rating} ★</p>
        <p><strong>Description:</strong> {course.description}</p>
        <p><strong>Syllabus:</strong> {course.syllabus}</p>
        <p><strong>Instructor:</strong> {course.instructor}</p>
        <div className="student-reviews">
          <h2>Student Reviews:</h2>
          {course.reviews && course.reviews.length > 0 ? (
            <ul>
              {course.reviews.map((review, index) => (
                <li key={index}>
                  <p><strong>{review.name}:</strong> {review.comment}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p>No reviews yet.</p>
          )}
        </div>
        <button className="enroll-button" onClick={handleEnrollClick}>Enroll Now</button>
      </div>
    </div>
  );
};

export default CourseDetails;
