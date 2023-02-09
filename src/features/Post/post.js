import React from 'react';
import './post.css'


export function Post(props) {
    console.log(props.article)
    return(
        <article className='post-container'>
            <div className='post-title'>
                <a href={'https://www.reddit.com' + props.article.permalink} target="_blank" >
                    <h3>{props.article.title}</h3>
                </a>
                <h5>{props.article.author}</h5>
            </div>
            <div className='post-contents'>
                <p>{props.article.selftext}</p>
                <img src={props.article.thumbnail}  />
            </div>
        </article>
        )
} 

export default Post
