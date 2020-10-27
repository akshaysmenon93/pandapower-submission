import React, {useEffect, useState} from 'react'

import BlogList from './blogList'
import {loadAllBlogs} from "../../api/blogsApi"

const BlogsController = ( props ) => {

    const [ blogs, setBlogs ] = useState( [] )
    const [ loading, setLoading ] = useState( false )
    const [ apiError, setApiError ] = useState( false )

    useEffect( () => {
        getAllBlogs()
         // eslint-disable-next-line
    }, [] )

    async function getAllBlogs () {
        setLoading( true )
        const data = await loadAllBlogs()
        if ( data.error ) {
            setLoading( false )
            setApiError( true )
        } else {
            setBlogs( sortByDate(data.data.data) )
            setLoading( false )
        }
    }

    function sortByDate(blogs){
        return blogs.sort((record1, record2)=>{
            return(
                new Date(record1.date) - new Date(record2.date)
            )
        })
    }

    return (
        <div className="blog-list">
            <BlogList blogs={blogs} isLoading={loading} isApiError={apiError} />
        </div>
    )
}

export default BlogsController