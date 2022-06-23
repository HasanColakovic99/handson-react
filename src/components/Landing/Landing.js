import Button from "../Button/Button";
import LandingImg from "../../assets/images/landing.jpg";
import { Link } from "react-router-dom";
import {Landing as LandingWrapper, Image, Overlay, OverlayPrimary, OverlaySecondary, Content, ContentInner, Title, Subtitle} from "./LandingStyle";

const Landing = () => {
    return (
        <LandingWrapper>
            <Image src={LandingImg} alt="Landing image"/>
            <Overlay>
                <OverlayPrimary />
                <OverlaySecondary />
            </Overlay>
            <Content>
                <ContentInner>
                    <Title>Learn what matters, Speck Academy powered by FOI</Title>
                    <Subtitle>Make a turnaround in your career or upgrade your current skill set
                        with
                        knowledge-based lessons from IT practice.</Subtitle>
                    <Link to="/courses">
                        <Button modifiers={['landing']}>Explore courses</Button>
                    </Link>
                </ContentInner>
            </Content>
        </LandingWrapper>
    );
}

export default Landing;