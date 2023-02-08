import React from 'react';


export function ArticleHelper(props) {
    
    return(
        <article>
            <a href={'https://www.reddit.com' + props.article.permalink} target="_blank" >
                <h3>{props.article.title}</h3>
            </a>
            <p>{props.article.selftext_html}</p>   
        </article>
        )
} 

export default ArticleHelper
