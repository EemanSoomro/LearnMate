import React from 'react';
import { Link } from 'react-router-dom';
import './CourseItem.css';

const CourseItem = ({ course }) => {
  return (
    <Link to={`/courses/${course.id}`} className="course-item-link">
      <div className="course-item">
        <img src={course.image} alt={course.name} className="course-item-image" />
        <h3 className="course-item-name">{course.name}</h3>
        <p className="course-item-description">{course.description}</p>
        <p className="course-item-price">${course.price.toFixed(2)}</p>
        <p className="course-item-rating">Rating: {course.rating} ★</p>
      </div>
    </Link>
  );
};

export default CourseItem;
