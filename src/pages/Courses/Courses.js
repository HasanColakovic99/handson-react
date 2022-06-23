import Header from "../../components/Header/Header";
import Section from "../../components/Section/Section";
import CourseCard from "../../components/CourseCard/CourseCard";
import {Grid} from "../../lib/style/generalStyles";

import LectureImg1 from "../../assets/images/lecture-1.jpg";
import LectureImg2 from "../../assets/images/lecture-2.jpg";
import LectureImg3 from "../../assets/images/lecture-3.jpg";
import LectureImg4 from "../../assets/images/lecture-4.jpg";
import LectureImg5 from "../../assets/images/lecture-5.jpg";
import LectureImg6 from "../../assets/images/lecture-6.jpg";
import LectureImg7 from "../../assets/images/lecture-7.jpg";
import LectureImg8 from "../../assets/images/lecture-8.jpg";
import { useEffect, useState } from "react";
import coursesMock from "../../lib/mock/courses";
import { SearchBar } from "../../components/SearchBar/SearchBarStyle";


const Courses = () => {

    const [courses, setCourses] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        setTimeout(() => {
            setCourses(coursesMock);
        }, 1000)
    }, []);

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    }

    return (
        <>
            <Header isSecondary={true} />
            <Section title={'All courses'}>
            <SearchBar placeholder={"Search"} onChange={handleSearch} />
                {courses && (
                    <Grid>
                        {courses.filter((course)=>{
                            if(searchTerm == ""){
                                return course;
                            }
                            else if(course.title.toLowerCase().includes(searchTerm.toLowerCase())){
                                return course;
                            }
                        }).map(
                            (course, index) => (
                                <CourseCard key={course.id} courseId={course.id} imgSrc={course.imgSrc} imgAlt={course.imgAlt} title={course.title} subtitle={course.subtitle}
                                />
                            )
                        )}
                    </Grid>
                )}
            </Section>
        </>
    );
}

export default Courses;