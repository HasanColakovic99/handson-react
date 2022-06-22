import "./Landing.scss";
import Button from "../Button/Button";
import LandingImg from "../../assets/images/landing.jpg";
import { useNavigate, Link } from "react-router-dom";

const Landing = () => {

    const navigate = useNavigate();

    return (
        <div className="Landing">
            <img className="Landing-Img" src={LandingImg} alt="Landing image" />
            <div className="Landing-Overlay">
                <div className="Landing-OverlayPrimary"></div>
                <div className="Landing-OverlaySecondary"></div>
            </div>
            <div className="Landing-Content">
                <div className="Landing-ContentInner">
                    <h1 className="Landing-Title">Learn what matters, Speck Academy powered by FOI</h1>
                    <p className="Landing-Subtitle">Make a turnaround in your career or upgrade your current skill set
                        with
                        knowledge-based lessons from IT practice.</p>
                    <Link to="/courses">
                        <Button modifiers={['landing']}>Explore courses</Button>
                    </Link>

                </div>
            </div>
        </div>
    );
}

export default Landing;