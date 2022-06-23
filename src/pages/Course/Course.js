import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import Section from "../../components/Section/Section";
import SingleCourse from "../../components/SingleCourse/SingleCourse";
import coursesMock from "../../lib/mock/courses";

const Courses = () => {

    const {id} = useParams();
    const [courses, setCourses] = useState(null);
    const [course, setCourse] = useState(null);

    useEffect(() => {
        setCourses(coursesMock);
    }, []);

    useEffect(() => {
        courses && setCourse(...courses.filter(course => course.id === parseInt(id)));
    }, [courses, id])


    return (
        <>
            <Header isSecondary={true} />
            {course && 
                <Section actionText={course.subtitle} title={course.title} buttonText={'BACK'}>
                    <SingleCourse imgSrc={course.imgSrc} imgAlt={course.imgAlt} text={course.text}></SingleCourse>
                </Section>
            }
        </>
    );
}

export default Courses;