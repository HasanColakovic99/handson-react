import {SingleCourse as SingeCourseWrapper, Figure, Image, Text} from "./SingleCourseStyle";

const SingleCourse = ({imgSrc, imgAlt, text}) => {
    return (
        <SingeCourseWrapper>
            <Figure>
                <Image src={imgSrc} alt={imgAlt}/>
            </Figure>
            <Text>{text}</Text>
        </SingeCourseWrapper>
    );
};

export default SingleCourse;