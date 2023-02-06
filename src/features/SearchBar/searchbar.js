import React, {useState} from 'react'
import './searchbar.css'

export function SearchBar() {


    return (
        <form className="search-bar">
            <input 
                className="search-input"
                type="search"
                placeholder="Search..."
                //value={searchTerm}
                //onChange={handleChange}
                //onKeyDown={handleKeyPress}
            />
        </form>
    )
}