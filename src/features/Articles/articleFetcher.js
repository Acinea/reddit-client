import React, { useState, useEffect } from 'react';
import Article from './articles';

export function ArticleFetcher() {
    const [articles, setArticles] = useState([])
    const [subreddit, setSubreddit] = useState('wow')

    useEffect(() => {
        fetch("https://www.reddit.com/r/wow.json").then(res => {
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
    }, [subreddit])

    return(
        <div>
            {(articles != null) ? articles.map((article, index) => <Article key={index} article={article.data} />) : ''}
        </div>
    )
}