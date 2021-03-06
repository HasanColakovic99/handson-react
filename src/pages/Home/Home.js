import React from 'react';
import CourseCard from '../../components/CourseCard/CourseCard';
import Grid from '../../components/Grid/Grid';
import Header from '../../components/Header/Header';
import Landing from '../../components/Landing/Landing';
import Main from '../../components/Main/Main';
import Section from '../../components/Section/Section';
import Testimonial from '../../components/Testimonial/Testimonial';
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";

import LectureImg1 from '../../assets/images/lecture-1.jpg';
import LectureImg2 from '../../assets/images/lecture-2.jpg';
import LectureImg3 from '../../assets/images/lecture-3.jpg';
import LectureImg4 from '../../assets/images/lecture-4.jpg';

const Home = () => {

    const navigate = useNavigate();

    return (
        <>
            <Header />
            <Main>
                <section>
                    <Landing />
                </section>
                <Section actionText={'Learn something new'} title={'Open new possibilites'} buttonText={<Button click={navigate('courses')} modifiers={['heading', 'outline']}>More courses</Button>}>
                    <Grid>
                        <CourseCard
                            imgSrc={LectureImg1}
                            imgAlt={'Introduction'}
                            title={'1. Introduction'}
                            subtitle={'60 Minutes'}
                        />
                        <CourseCard
                            imgSrc={LectureImg2}
                            imgAlt={'HTML & CSS'}
                            title={'2. HTML & CSS'}
                            subtitle={'120+ Minutes'}
                        />
                        <CourseCard
                            imgSrc={LectureImg3}
                            imgAlt={'Version Control System'}
                            title={'3. Version Control System'}
                            subtitle={'120+ Minutes'}
                        />
                        <CourseCard
                            imgSrc={LectureImg4}
                            imgAlt={'Advanced CSS'}
                            title={'4. Advanced CSS'}
                            subtitle={'120+ Minutes'}
                        />
                    </Grid>
                </Section>
                <Section modifiers={['testimonials']} isHeadingVisible={false}>
                    <Testimonial />
                </Section>
            </Main>
        </>
    );
}

export default Home;