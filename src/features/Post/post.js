import React from 'react';
import './post.css'


export function Post(props) {
    return(
        <article className='post-container'>
            <div className='post-title'>
                <h6>Posted by {props.article.author}</h6>
                <a className="post-title-link" href={'https://www.reddit.com' + props.article.permalink} target="_blank" >
                    <h3>{props.article.title}</h3>
                </a>
                
            </div>
            <div className='post-contents'>
                <p>{props.article.selftext}</p>
                {props.article.is_video === true ? <video src={props.article.media.reddit_video.fallback_url} type="video/mp4" controls /> 
                : props.article.preview && props.article.preview.enabled === true ? <img src={props.article.url} className="post-img" alt="post-image" /> 
                : '' }
            </div>
        </article>
        )
} 

export default Post
