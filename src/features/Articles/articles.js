import React, { useState, useEffect } from 'react';
import axios from 'axios'

export function Article({article}) {
    const [articles, setArticles] = useState([])
    const [subreddit, setSubreddit] = useState('wow')

    useEffect(() => {
        axios.get("https://reddit.com/r/wow.json")
            .then(res => {
                setArticles(res.data.data.children)
            })
            .catch(error => {
                console.log(`failed due to ${error}`)
            })
    }, [subreddit])
    return(
        <article>
            <div className = 'posts-container'>
                {(articles.length != null) ? articles.map((article,index) => <Article key={index} article={article.data} /> ) : ""} 
            </div> 
            <a href={`https://www.reddit.com${article.permalink}`} target="blank">
                <h3>{article.title}</h3>
            </a>
        </article>
    )
}

export default Article