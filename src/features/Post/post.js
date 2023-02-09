import React from 'react';
import './post.css'


export function Post(props) {
    return(
        <article className='post-container'>
            <div className='post-title'>
                {/*<h6>Posted by {props.article.author}</h6>*/}
                {/*<a href={'https://www.reddit.com' + props.article.permalink} target="_blank" rel="noreferrer">
                    <h3>{props.article.title}</h3>
                </a>*/}
                <h6>Posted by Author</h6>
                <h3>Title</h3>
            </div>
            <div className='post-contents'>
                {/*<p>{props.article.selftext}</p>*/}
                <p>Text</p>
                {/*<img src={props.article.thumbnail}  />*/}
            </div>
        </article>
        )
} 

export default Post
