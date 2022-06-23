import TestimonialImg from '../../assets/images/testimonial.jpg';
import {Testimonial as TestimonialWrapper, Figure, Image, Content, Text, Quotation} from "./TestimonialStyle";
 
const Testimonial = () => {
    return (
        <TestimonialWrapper>
            <Figure>
                <Image src={TestimonialImg} alt="Testimonialka"/>
            </Figure>
            <Content>
                <Text>
                    <Quotation>"</Quotation>
                    At the academy, I learned how to apply technology in practice.
                    Frontend education was demanding, it required a lot of time.
                    Upon completion, I got my first job as a developer.
                    <Quotation>"</Quotation>
                </Text>
            </Content>
        </TestimonialWrapper>
    );
}

export default Testimonial;