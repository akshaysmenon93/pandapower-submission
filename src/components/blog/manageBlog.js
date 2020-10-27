import React, {useEffect, useState} from 'react'
import BlogContent from './blogContent'
import {getCommentsOnBlog, saveComment} from "../../api/blogsApi"
import {validateCommentForm} from "../common/formValidation"
import {useLocation} from 'react-router-dom'

const ManageBlog = ( props ) => {

    const [ content, setContent ] = useState( {} )
    const [ comments, setComments ] = useState( [] )
    const [ loading, setLoading ] = useState( false )
    const [ formError, setFormError ] = useState( {} )
    const [ apiError, setApiError ] = useState( false )

    const [ newComment, setNewComment ] = useState( {
        id: null,
        postId: null,
        parent_id: null,
        user: "",
        date: null,
        content: ""
    } )

    let location = useLocation()

    useEffect( () => {
        setContent( location.state )
        getComments( location.state.id )
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [] )


    async function getComments ( id ) {
        setLoading( true )
        const comm = await getCommentsOnBlog( id )
        if ( comm.error ) {
            setLoading( false )
            setApiError( true )
        } else {
            sortComments( comm.data.data )
        }
    }

    function sortComments ( comments ) {
        const sortedComments = []
        for ( var i = 0; i < comments.length; i++ ) {
                if(comments[i].parent_id == null){
                    const temp = {
                    comment: comments[ i ],
                    subComments: []
                }

                for ( var j = 0; j < comments.length; j++ ) {
                    if ( comments[ j ].parent_id === comments[ i ].id ) {
                        temp.subComments.push( comments[ j ] )
                    }
                }
                sortedComments.push( temp )
            }
        }
        setComments( sortedComments )
        setLoading( false )
    }

    function handleCommentChange ( {target} ) {
        setNewComment( prevComment => ( {
            ...prevComment, [ target.name ]: target.value
        } ) )
    }

    function handleCommentSubmit ( event ) {
        event.preventDefault()

        const _errors = validateCommentForm( newComment )
        setFormError( _errors )

        if ( Object.keys( _errors ).length > 0 ) {
            return
        }

        const payload = Object.assign( {}, newComment, {
            id: Math.floor( Math.random() * 100 ),
            date: generateDate(),
            postId: location.state.id
        } )

        saveForm( payload )

    }

    async function saveForm ( payload ) {
        const save = await saveComment( payload )

        if ( save.error ) {
            alert( 'Unable to save comment ! Please try again' )
        } else {
            getComments( location.state.id )
            setNewComment( {
                id: null,
                postId: null,
                parent_id: null,
                user: "",
                date: null,
                content: ""
            } )
        }
    }

    function generateDate () {
        let today = new Date()

        let date = ( "0" + today.getDate() ).slice( -2 )

        let month = ( "0" + ( today.getMonth() + 1 ) ).slice( -2 )

        let year = today.getFullYear()

        // prints date in YYYY-MM-DD format
        return year + "-" + month + "-" + date
    }

    return (
        <BlogContent content={content} comments={comments} isLoading={loading} onChange={handleCommentChange} onSubmit={handleCommentSubmit} newComment={newComment} errors={formError} isApiError={apiError} />
    )
}

export default ManageBlog