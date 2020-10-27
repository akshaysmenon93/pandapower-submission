import React from 'react'
import WithMessageFallBack from '../common/withMessage'
import BlogPost from "./blogPost"
import {PropTypes} from 'prop-types'


const BlogList = ( {blogs, isLoading} ) => {
    return (
        <>
            { blogs.map( ( blog ) => {
                return (

                    <BlogPost blog={blog} displayLink={true} key={blog.slug} />

                )
            } )}

        </>
    )
}

BlogList.propTypes = {
    blogs: PropTypes.array, 
    isLoading: PropTypes.bool
}

export default WithMessageFallBack( BlogList )