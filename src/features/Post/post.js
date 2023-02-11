import React from 'react';
import { useState } from 'react';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import './post.css'


export function Post(props) {
    const [clicked, setClicked] = useState('0')
    const ups = props.article.ups
    const upVoted = () => {
        clicked === '1' ? setClicked('0') : setClicked('1')
    }
    const downVoted = () => {
        clicked === '-1' ? setClicked('0') : setClicked('-1')
    }
    

    return(
        <article className='post-container'>
            <div className="votes-container">
                <div className="upvote">
                    <ArrowUpwardIcon className={clicked === '1' ? 'upvoted' : 'upvote'} onClick={upVoted} />
                </div>
                <p className='votes-text'>{clicked === '0' ? ups : clicked === '1' ? ups + 1 : clicked === '-1' ? ups - 1 : ups}</p>
                <ArrowDownwardIcon className={clicked === '-1' ? 'downvoted' : 'downvote'}onClick={downVoted} />
            </div>
            <div className="post">
                <div className='post-title'>
                    <h6>Posted by {props.article.author}</h6>
                    <a className="post-title-link" href={'https://www.reddit.com' + props.article.permalink} target="_blank" >
                        <h3>{props.article.title}</h3>
                    </a>
                </div>
                <div className='post-contents'>
                    <p>{props.article.body}</p>
                    {props.article.is_video === true ? <video src={props.article.media.reddit_video.fallback_url} type="video/mp4" controls /> 
                    : props.article.preview && props.article.preview.enabled === true ? <img src={props.article.url} className="post-img" alt="post-image" /> 
                    : '' }
                </div>
            </div>
        </article>
        )
} 

export default Post
