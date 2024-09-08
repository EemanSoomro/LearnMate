import React from 'react';
import './UserDashboard.css';

const UserDashboard = () => {
  // Mock data for enrolled courses
  const enrolledCourses = [
    { id: 1, name: 'React for Beginners', progress: 80 },
    { id: 2, name: 'Advanced JavaScript', progress: 60 },
  ];

  return (
    <div className="dashboard-wrapper">
      <div className="dashboard-container">
        <h1 className="dashboard-title">User Dashboard</h1>

        <div className="enrolled-courses-section">
          <h2 className="section-title">Enrolled Courses</h2>
          <div className="course-cards">
            {enrolledCourses.map(course => (
              <div key={course.id} className="course-card">
                <h3 className="course-name">{course.name}</h3>
                <div className="progress-bar">
                  <div 
                    className="progress-fill" 
                    style={{ width: `${course.progress}%` }}
                  ></div>
                </div>
                <p className="course-progress">Progress: {course.progress}%</p>
              </div>
            ))}
          </div>
        </div>

        <div className="profile-settings-section">
          <h2 className="section-title">Profile Settings</h2>
          <button className="settings-button">Edit Profile</button>
          <button className="certificates-button">View Certificates</button>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
