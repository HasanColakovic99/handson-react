import { ThreeDots } from  'react-loader-spinner'
import { LoaderWrapper } from "./LoaderStyle";

const Loader = () => {
    return (
        <LoaderWrapper>
            <ThreeDots
                color = "#bf3939"
                height = {120} 
                width = {120} 
            />
        </LoaderWrapper>
    );

}

export default Loader;