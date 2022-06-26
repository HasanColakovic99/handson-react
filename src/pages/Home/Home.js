import { useEffect, useState } from 'react';
import CourseCard from '../../components/CourseCard/CourseCard';
import Header from '../../components/Header/Header';
import Landing from '../../components/Landing/Landing';
import Section from '../../components/Section/Section';
import Testimonial from '../../components/Testimonial/Testimonial';
import { useNavigate } from "react-router-dom";
import {Grid, Main} from "../../lib/style/generalStyles";
import coursesMock from "../../lib/mock/courses";
import Loader from "../../components/Loader/Loader";

const Home = () => {
    const [courses, setCourses] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setCourses(coursesMock);
            setIsLoading(false);
        }, 1000)
    }, []);

    let navigate = useNavigate();
    const coursesPage = () => {
        navigate('courses');
    }

    return (
        <>
            <Header />
            <Main>
                <section>
                    <Landing />
                </section>

                <Section actionText={'Learn something new'} title={'Open new possibilites'} buttonText={"More courses"} callback={coursesPage}>
                    {isLoading === true ? <Loader /> : (
                    <Grid>
                        {courses.map(
                            (course, index) => (
                                index <= 3 && 
                                <CourseCard key={course.id} courseId={course.id} imgSrc={course.imgSrc} imgAlt={course.imgAlt} title={course.title} subtitle={course.subtitle}
                                />
                            )
                        )}
                    </Grid>
                    )}
                </Section>
                <Section isTestimonial={true} isHeadingVisible={false}>
                    <Testimonial />
                </Section>
            </Main>
        </>
    );
}

export default Home;