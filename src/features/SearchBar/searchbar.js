import React, {useState} from 'react'
import { Article } from '../Articles/article';
import { Best } from '../Homepage/Best/best';
import './searchbar.css'

export function SearchBar() {
    const [searchTerm, setSearchTerm] = useState('');
    const handleChange = (e) => {
        setSearchTerm(e.target.value)
    }

    return (
        <form className="search-bar" onSubmit={e => {e.preventDefault(); }}>
            <input 
                className="search-input"
                type="search"
                placeholder="Search..."
                value={searchTerm}
                onChange={handleChange}
            />
            {<Article searchTerm={searchTerm} />}
            {<Best searchTerm={searchTerm} />}
        </form>
    )
}