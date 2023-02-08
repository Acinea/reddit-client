import React, {useState} from 'react'
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom'
import { Article } from '../Articles/article';
import { Best } from '../Homepage/Best/best';
import { Hot } from '../Homepage/Hot/hot'
import { New } from '../Homepage/New/new'
import { Top } from '../Homepage/Top/top'
import './searchbar.css'

export function SearchBar() {
    const [searchView, setSearchView] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const handleChange = (e) => {
        setSearchView(e.target.value)
    }
    const handleSubmit = (e) => {
        setSearchTerm(e.target.value)
    }
    const handleKeyPress = (e) => {
        if(e.keyCode === 13) {
            setSearchTerm(e.target.value)
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
                    onSubmit={handleSubmit}
                />
            </form>
            <div className='post-container'>
                <Article searchTerm={searchTerm}/>
            </div>
        </div>
    )
}