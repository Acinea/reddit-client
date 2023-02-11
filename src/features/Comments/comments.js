import React, {useState} from 'react';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import './comments.css'

export const Comments = ({comments}) => {
    const [clicked, setClicked] = useState('0')
    const upVoted = () => {
        clicked === '1' ? setClicked('0') : setClicked('1')
    };
    const downVoted = () => {
        clicked === '-1' ? setClicked('0') : setClicked('-1')
    };
    return(
        <div>
            <ul className="individual-comment-container">
                <div className="comment-score">
                    <ArrowUpwardIcon className={clicked === '1' ? 'upvoted' : 'upvote'} onClick={upVoted} />
                    {comments.score}
                    <ArrowDownwardIcon className={clicked === '-1' ? 'downvoted' : 'downvote'}onClick={downVoted} />
                </div>
                <div className="comment-content">
                    <h5 className="comment-author">{comments.author}</h5>
                    <p className="comment-body">{comments.body}</p>
                </div>
            </ul>
        </div>
    )
}

export default Comments;