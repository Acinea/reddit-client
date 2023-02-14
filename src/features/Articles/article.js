import React, { useState, useEffect } from 'react';
import Post from '../Post/post';
import './article.css'
import { useLocation } from 'react-router-dom';

export function Article(props) {
    const [articles, setArticles] = useState([]);
    const location = useLocation();
    const filteredLocation = location.pathname.replace('/reddit-client', '')

    useEffect(() => {
        fetch("https://www.reddit.com/r/" + props.searchTerm + filteredLocation + ".json").then(res => {
            if (res.status !== 200) {
                console.log('Error');
                return;
            }
            res.json().then(data => {
                if (data !== null) {
                    setArticles(data.data.children);
                }
            });
        })
    }, [props.searchTerm, location])

    return(
        <div className='search-results'>
            {(articles != null) ? articles.map((article, index) => <Post key={index} article={article.data} searchTerm={props.searchTerm} />) : ''}
        </div>
    )
}