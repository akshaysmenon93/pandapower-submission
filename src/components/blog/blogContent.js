import React from 'react'
import {Link} from 'react-router-dom'

import WithMessageFallBack from '../common/withMessage'
import BlogComment from './blogComment'
import BlogPost from './blogPost'
import CommentForm from './commentForm'
import {PropTypes} from 'prop-types'


const BlogContent = ( {content, comments, onChange, onSubmit, newComment, errors} ) => {


    return (
        <div className="blog">
            
            <Link className="back" to="/">
                <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-arrow-left" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
                </svg>

                Back
            </Link>

            <BlogPost blog={content} displayLink={false} />

            <div className="comments">
                <h1>Comments</h1>
                <hr className="comments__separator"></hr>

                <div className="comments__body">
                    {   comments.length > 0 ?
                        comments.map( ( comment ) => {
                            return (
                                <BlogComment comment={comment.comment} subComments={comment.subComments} key={comment.comment.id} />
                            )
                        } ) : <p>There are no comments on this blog yet.</p>
                    }
                </div>

            </div>

            <CommentForm onChange={onChange} onSubmit={onSubmit} newComment={newComment} errors={errors} />

        </div>
    )
}

BlogContent.propTypes = {
    content: PropTypes.object, 
    comments: PropTypes.array, 
    onChange: PropTypes.func, 
    onSubmit: PropTypes.func, 
    newComment: PropTypes.object, 
    errors: PropTypes.object
}

export default WithMessageFallBack( BlogContent )