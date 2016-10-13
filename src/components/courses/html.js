import React, { Component } from 'react';

import Course from './course';
import CourseList from '../../data/courses';

class HTML extends Component {
  render() {
    let courseList = CourseList.HTML;
    let courses = courseList.map((course) => {
      return <Course title={course.title}
                     desc={course.description}
                     img={course.img_src}
                     key={course.id} />
    }); 
    return (
      <div>
        <ul>
          {courses}    
        </ul>
      </div>
    );
  }
}

export default HTML;