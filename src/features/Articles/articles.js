import React, { useState, useEffect } from 'react';


export function Article({article}) {
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
        <article>
            {(articles != null) ? articles.map((article, index) => <Article key={index} article={article.data} />) : ''}
            <a href={`https://www.reddit.com${articles.permalink}`} >
                <h3>articles.title</h3>
            </a>
            
        </article>
        )
} 


export default Article