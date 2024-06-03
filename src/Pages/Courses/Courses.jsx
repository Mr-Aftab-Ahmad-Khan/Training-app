import React from "react";
import CourseSlider from "../../Components/FeaturedCourses/CourseSlider";
import Styles from "./Course.module.css";
import { FaChalkboardTeacher } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { Link } from "react-router-dom";
import courses from "../../Assets/Data/Coursedetail";

const Courses = () => {
  return (
    <div>
        <h1 className={Styles.courseHead}>Our Featured Courses</h1>
      <div className={Styles.wrapper}>
        {courses.map((course) => {
          return (
            <div className={Styles.courseCard} key={course.id}>
              <div className={Styles.badge}>New</div>
              <div className={Styles.courseImg}>
                <img src={course.img} alt="Course" />
              </div>
              <div className={Styles.courseDetails}>
                <span className={Styles.courseCategory}>
                  Category: {course.Category}
                </span>
                <h4>{course.title}</h4>
                <div className={Styles.courseBottomDetails}>
                  <div className={Styles.iconContainer}>
                    <span>
                      <SlCalender /> <b> {course.duration}</b>
                    </span>
                    <span>
                      <FaChalkboardTeacher /> {course.enviroment}
                    </span>
                  </div>
                </div>
                <Link to={`/Detail/${course.id}`} className={Styles.btn}>
                  <button className={Styles.explore_btn}>
                    <span>Learn More</span>
                  </button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Courses;
