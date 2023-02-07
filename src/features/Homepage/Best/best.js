import React, { useState, useEffect } from 'react';
import ArticleHelper from '../../Articles/articleHelper';

export function Best(props) {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        fetch("https://www.reddit.com/r/" + props.searchTerm + "/best.json").then(res => {
            if (res.status != 200) {
                console.log('Error');
                return;
            }
            res.json().then(data => {
                if (data != null) {
                    setArticles(data.data.children);
                }
            });
        })
    }, [props.searchTerm])

    return(
        <div className='post-container'>
            {(articles != null) ? articles.map((article, index) => <ArticleHelper key={index} article={article.data} />) : ''}
        </div>
    )
}

