import Header from "../../components/Header/Header";
import Section from "../../components/Section/Section";
import CourseCard from "../../components/CourseCard/CourseCard";
import {Grid} from "../../lib/style/generalStyles";
import { useEffect, useState } from "react";
import coursesMock from "../../lib/mock/courses";
import { SearchBar } from "../../components/SearchBar/SearchBarStyle";
import Loader from "../../components/Loader/Loader";


const Courses = () => {

    const [courses, setCourses] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const [isDisabled, setIsDisabled] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setCourses(coursesMock);
            setIsLoading(false);
            setIsDisabled(false);
        }, 2000)
    }, []);

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    }

    return (
        <>
            <Header isSecondary={true} coursesActive/>
            <Section title={'All courses'}>
            <SearchBar placeholder={"Search"} onChange={handleSearch} disabled={isDisabled} />
            {isLoading === true ? <Loader /> :                    
                <Grid>
                    {courses.filter((course)=>{
                        if(searchTerm === ""){
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
                </Grid>}
            </Section>
        </>
    );
}

export default Courses;