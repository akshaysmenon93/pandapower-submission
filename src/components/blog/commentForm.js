import React from 'react'
import TextArea from '../common/textArea'
import TextInput from '../common/textInput'
import {PropTypes} from 'prop-types'

const CommentForm = ( {newComment, onChange, onSubmit, errors} ) => {
    return (
        <div>
            <h1 className="title">Kindly leave your thoughts below</h1>
            <form onSubmit={onSubmit} className="commentForm">

                <TextInput name="user" label="Name" placeholder="Enter your name" value={newComment.user} onChange={onChange} error={errors.user} />

                <TextArea name="content" label="Comment" onChange={onChange} placeholder="Enter your comment" value={newComment.content} error={errors.content} />


                <div className="control">
                    <button type="submit" className="btn button-primary ">Save</button>
                </div>

            </form>
        </div>
    )
}

CommentForm.propTypes = {
    newComment: PropTypes.object, 
    onChange: PropTypes.func, 
    onSubmit: PropTypes.func, 
    errors: PropTypes.object
}

export default CommentForm