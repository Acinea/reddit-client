import React, { useState, useEffect } from 'react'
import MenuIcon from '@mui/icons-material/Menu'
import './menu.css'

export function Menu({setSearchTerm}) {
    const [communities, setCommunities] = useState([]);
    const [open, setOpen] = useState('0');

    const toggleMenu = () => {
        {open === '1' ? setOpen('0') : setOpen('1')}
    }

    const clickMenu = (e) => {
        const term = (e.target.innerHTML)
        setSearchTerm(term.replace('r/', ''))
    }

    useEffect(() => {
        fetch("https://www.reddit.com/reddits" + ".json").then(res => {
            if (res.status !== 200) {
                console.log('Error');
                return;
            }
            res.json().then(data => {
                if (data !== null) {
                    setCommunities(data.data.children.map(({data}) => data))
                }
            });
        })
    }, [])


    return (
        <div className='menu-container'>
            <MenuIcon 
            className='header-menu' 
            fontSize="large"
            style={{color: '#484D45'}}    
            onClick={toggleMenu}
            />

            <div className={open === '0' ? "close-menu" : "open-menu"}>
                <h3 className="menu-title">Top Communities</h3>
                <div className="menu-options">
                    {communities.map(community => <ul onClick={clickMenu}><li className='single-item' onClick={toggleMenu}>{community.display_name_prefixed}</li></ul>)}
                </div>
            </div>
        </div>
)}

export default Menu;