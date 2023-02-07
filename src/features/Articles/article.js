import React, { useState, useEffect } from 'react';
import ArticleHelper from './articleHelper';

export function Article(props) {
    const [articles, setArticles] = useState([])

    useEffect(() => {
        fetch("https://www.reddit.com/r/" + props.searchTerm + ".json").then(res => {
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
        <div>
            {(articles != null) ? articles.map((article, index) => <ArticleHelper key={index} article={article.data} />) : ''}
        </div>
    )
}