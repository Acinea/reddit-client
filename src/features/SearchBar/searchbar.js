import React, {useState} from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Article } from '../Articles/article';
import { Best } from '../Homepage/Best/best';
import { Hot } from '../Homepage/Hot/hot'
import { New } from '../Homepage/New/new'
import { Top } from '../Homepage/Top/top'
import './searchbar.css'

export function SearchBar() {
    const [searchTerm, setSearchTerm] = useState('');
    const handleChange = (e) => {
        setSearchTerm(e.target.value)
    }
            
    return (
        <div>
            <form className="search-bar" onSubmit={e => {e.preventDefault(); }}>
                <input 
                    className="search-input"
                    type="search"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={handleChange}
                />
            </form>
            <div className='post-container'>
                <Routes>
                    <Route path='/' element={<Article searchTerm={searchTerm}/>} />
                    <Route path='/best' element={<Best searchTerm={searchTerm}/>} />
                    <Route path='/hot' element={<Hot searchTerm={searchTerm}/>} />
                    <Route path='/new' element={<New searchTerm={searchTerm}/>} />
                    <Route path='/top' element={<Top searchTerm={searchTerm}/>} />``
                </Routes>
            </div>
        </div>

    )
}