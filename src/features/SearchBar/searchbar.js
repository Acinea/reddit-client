import React, {useState, useEffect} from 'react'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Article } from '../Articles/article';

import './searchbar.css'

export function SearchBar() {
    const [searchView, setSearchView] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const [height, setHeight] = useState(0)
    
    const handleChange = (e) => {
        setSearchView(e.target.value)
    }
    const handleKeyPress = (e) => {
        if(e.keyCode === 13) {
            setSearchTerm(e.target.value);
            setSearchView('')
        }
    }
   const handleScroll = () => {
    const position = window.pageYOffset;
    setHeight(position)
   }

   useEffect(() => {
    window.addEventListener('scroll', handleScroll, {passive: true});
    return () => {
        window.removeEventListener('scroll', handleScroll)
    }
   })
    const scrollToTop = () => {
        window.scrollTo ({
            top:0,
            behavior:'smooth'
        })
        console.log(height)
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
            <div className={height > 100 ? "scroll-to-top-visible" : "scroll-to-top-hidden"}>
                <KeyboardArrowUpIcon onClick={scrollToTop} fontSize='large' />
            </div>
            <Article className='search-results' searchTerm={searchTerm} />
        </div>
    )
}