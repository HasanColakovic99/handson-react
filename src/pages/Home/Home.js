import { useEffect, useState } from 'react';
import CourseCard from '../../components/CourseCard/CourseCard';
import Header from '../../components/Header/Header';
import Landing from '../../components/Landing/Landing';
import Main from '../../components/Main/Main';
import Section from '../../components/Section/Section';
import Testimonial from '../../components/Testimonial/Testimonial';
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";
import {Grid} from "../../lib/style/generalStyles";
import coursesMock from "../../lib/mock/courses";

const Home = () => {

    const navigate = useNavigate();

    const [courses, setCourses] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            setCourses(coursesMock);
        }, 1000)
    }, []);

    return (
        <>
            <Header />
            <Main>
                <section>
                    <Landing />
                </section>

                <Section actionText={'Learn something new'} title={'Open new possibilites'} buttonText={'More courses'}>
                    {courses && (
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

                <Section modifiers={['testimonials']} isHeadingVisible={false}>
                    <Testimonial />
                </Section>
            </Main>
        </>
    );
}

export default Home;