import Header from "../../components/Header/Header";
import Section from "../../components/Section/Section";
import SingleCourse from "../../components/SingleCourse/SingleCourse";

import LectureImg3 from "../../assets/images/lecture-3.jpg";

const Courses = () => {
    return (
        <>
            <Header isSecondary={true} />
            <Section actionText={'120+ Minutes'} title={'3. Version Control Systems'} buttonText={'BACK'}>
                <SingleCourse></SingleCourse>
            </Section>
        </>
    );
}

export default Courses;