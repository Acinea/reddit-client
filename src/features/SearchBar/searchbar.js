import React, {useState} from 'react'
import { Article } from '../Articles/article';

import './searchbar.css'

export function SearchBar() {
    const [searchView, setSearchView] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    
    const handleChange = (e) => {
        setSearchView(e.target.value)
    }
    const handleKeyPress = (e) => {
        if(e.keyCode === 13) {
            setSearchTerm(e.target.value);
            setSearchView('')
        }
    }
            
    return (
        <div>
            <form className="search-bar" onSubmit={e => {e.preventDefault(); }}>
                <input 
                    className="search-input"
                    type="search"
                    placeholder="Search..."
                    value={searchView}
                    onChange={handleChange}
                    onKeyDown={handleKeyPress}
                />
            </form>
            <Article className='search-results' searchTerm={searchTerm} />
        </div>
    )
}