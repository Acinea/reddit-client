import React, { useState, useEffect } from 'react';
import Comments from '../Comments/comments'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import NotesIcon from '@mui/icons-material/Notes';
import './post.css'


export function Post(props) {
    const [comments, setComments] = useState([]);
    const [clicked, setClicked] = useState('0')
    const [commentClicked, setCommentClicked] = useState('0')
    const ups = props.article.ups
    const upVoted = () => {
        clicked === '1' ? setClicked('0') : setClicked('1')
    };
    const downVoted = () => {
        clicked === '-1' ? setClicked('0') : setClicked('-1')
    };
    const toggleComment = () => {
        commentClicked === '1' ? setCommentClicked('0') : setCommentClicked('1')
        console.log(comments)
    }

    useEffect(() => {
        fetch ('https://www.reddit.com' + props.article.permalink + '.json').then(res => {
            if (res.status !== 200) {
                console.log('Error');
                return;
            }
            res.json().then(data => {
                if (data !== null) {
                    setComments(data[1].data.children.map(({data}) => data))
                }
            })
        }
    )}, [props.article])
   
    return(
        <div className={props.article.id}>
            <article className={commentClicked === '0' ? "comments-result-hidden" : "comments-result-revealed"}>
                <div className='comments-container-header'>
                    <h4 id={commentClicked === '1' ? "active-top" : ''}>Top Comments</h4>
                    <h6 className={'close-comments-button'} onClick={toggleComment}>Close Comments</h6>
                </div>
                {comments.map(comment => <Comments comments={comment} />)} 
                <h6 className={'close-comments-button'} onClick={toggleComment}>Close Comments</h6>
            </article>
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
                        <a className="post-title-link" href={'https://www.reddit.com' + props.article.permalink} target="_blank" rel="noreferrer" >
                            <h3>{props.article.title}</h3>
                        </a>
                    </div>
                    <div className='post-contents'>
                        <p className='post-text'>{props.article.selftext}</p>
                        {props.article.is_video === true ? <video src={props.article.media.reddit_video.fallback_url} type="video/mp4" controls /> 
                        : props.article.preview && props.article.preview.enabled === true ? <img src={props.article.url} className="post-img" alt="post-contentnpm" /> 
                        : '' }
                    </div>
                    <div className="post-comments-container">
                        <div className="post-comments-button">
                            <NotesIcon fontSize='small'/>
                            <p className="comments-text" onClick={toggleComment}>{props.article.num_comments} Comments</p>
                        </div>
                    </div>
                </div>
            </article>
        </div>
        )
} 

export default Post
