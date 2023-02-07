import React, {useState} from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './searchbar.css'

export function SearchBar() {
    const [searchTerm, setSearchTerm] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    /*const handleKeyPress = (event) => {
        if(event.keyCode === 13) {
            event.preventDefault();
            dispatch(loadSearchResults(searchTerm))
            .then(()=> navigate(`/search/${searchTerm}`))
            .then(()=> setSearchTerm(''));
        }
    }*/

    const handleChange = (e) => {
        setSearchTerm(e.target.value)
    }

    return (
        <form className="search-bar">
            <input 
                className="search-input"
                type="search"
                placeholder="Search..."
                value={searchTerm}
                onChange={handleChange}
                //onKeyDown={handleKeyPress}
            />
        </form>
    )
}