export function validateCommentForm ( comment ) {
    let errors = {}

    if ( comment.user.length === 0 ) {
        errors.user = "Please enter your name"
    }

    if ( comment.content.length === 0 ) {
        errors.content = "Please enter your comment"
    }

    return errors
}