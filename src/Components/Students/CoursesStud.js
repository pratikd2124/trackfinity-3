import React from 'react'
import Courses from '../Courses'
import AssignCourse from './AssignCourse'

const CoursesStud = () => {
  return (
    <>
      <div class="container text-center">
        <h1>Assigned Courses</h1>
      </div>
      <hr />
      <AssignCourse />
      <div class="container text-center">
        <h1>Recommended Courses</h1>
      </div>
      <hr />
    <Courses/>
    </>
  )
}

export default CoursesStud