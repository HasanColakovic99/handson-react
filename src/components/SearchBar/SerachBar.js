import {SearchBar} from "./SearchBarStyle";


const SearchBar = ({placeholder, onChange, disabled}) => {
    return (
        <>
            <SearchBar placeholder={placeholder} onChange={onChange} disabled={disabled}/>
        </>
    );
}

export default SearchBar;