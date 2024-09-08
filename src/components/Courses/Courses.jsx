import React, { useState } from 'react';
import './Courses.css';
import CourseHero from '../../assets/CoursesHero.jpg';
import courses from '../../courseData'; // Adjust the path as needed
import CourseItem from './CourseItem'; // Ensure this component is set up to display individual course details

const Courses = () => {
  const [filteredCourses, setFilteredCourses] = useState(courses);
  const [displayedCourses, setDisplayedCourses] = useState(20); // Initial number of courses to show
  const [filter, setFilter] = useState('all');
  const [sort, setSort] = useState('');

  const handleFilterChange = (e) => {
    const value = e.target.value;
    setFilter(value);
    filterCourses(value, sort);
  };

  const handleSortChange = (e) => {
    const value = e.target.value;
    setSort(value);
    filterCourses(filter, value);
  };

  const filterCourses = (filter, sort) => {
    let filtered = courses;

    if (filter !== 'all') {
      filtered = filtered.filter(course => course.category === filter);
    }

    if (sort === 'priceLowHigh') {
      filtered = filtered.sort((a, b) => a.price - b.price);
    } else if (sort === 'priceHighLow') {
      filtered = filtered.sort((a, b) => b.price - a.price);
    } else if (sort === 'rating') {
      filtered = filtered.sort((a, b) => b.rating - a.rating);
    }

    setFilteredCourses(filtered);
    setDisplayedCourses(20); // Reset to 20 when filtering/sorting
  };

  const loadMoreCourses = () => {
    setDisplayedCourses(prevCount => prevCount + 15); // Load 15 more courses
  };

  return (
    <div className="courses-container">
      <div className="courses-hero">
        <img src={CourseHero} alt="Courses Hero" className="courses-hero-image" />
        <div className="courses-hero-text">
          <h1>Explore Our Comprehensive Course Collection</h1>
          <p>Welcome to our diverse course catalog, where learning meets excellence. Whether you're a beginner eager to start a new journey, an intermediate student looking to deepen your knowledge, or an advanced learner aiming to master new skills, we have something for you. Our courses are designed to cater to various interests and skill levels, ensuring a tailored educational experience. With expert instructors, practical content, and flexible learning options, you can enhance your expertise and achieve your goals. Dive in and discover the course that’s right for you—your path to success starts here!</p>
        </div>
      </div>
      
      {/* Filtering and Sorting */}
      <div className="filter-sort-container">
        <div className="filter">
          <label htmlFor="filter">Filter by:</label>
          <select id="filter" value={filter} onChange={handleFilterChange}>
            <option value="all">All Courses</option>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </select>
        </div>
        <div className="sort">
          <label htmlFor="sort">Sort by:</label>
          <select id="sort" value={sort} onChange={handleSortChange}>
            <option value="">Default</option>
            <option value="popularity">Popularity</option>
            <option value="rating">Rating</option>
            <option value="priceLowHigh">Price: Low to High</option>
            <option value="priceHighLow">Price: High to Low</option>
          </select>
        </div>
      </div>

      {/* Courses Section */}
      <div className="courses-grid">
        {filteredCourses.slice(0, displayedCourses).map((course) => (
          <CourseItem key={course.id} course={course} />
        ))}
      </div>

      {/* Load More Button */}
      {displayedCourses < filteredCourses.length && (
        <div className="load-more-container">
          <button className="load-more-button" onClick={loadMoreCourses}>Load More</button>
        </div>
      )}
    </div>
  );
}

export default Courses;
