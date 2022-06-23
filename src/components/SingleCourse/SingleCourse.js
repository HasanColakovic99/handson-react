import "./SingleCourse.scss";

import LectureImg3 from "../../assets/images/lecture-3.jpg";

const SingleCourse = ({imgSrc, imgAlt, text}) => {
    return (
        <div className="SingleCourse">
            <figure className="SingleCourse-Figure">
                <img className="SingleCourse-Img" src={imgSrc} alt={imgAlt} />
            </figure>
            <p className="SingleCourse-Text">
                {text}
            </p>
        </div >
    );
};

export default SingleCourse;