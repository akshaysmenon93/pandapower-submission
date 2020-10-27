import React from 'react'
import {Link, useRouteMatch} from 'react-router-dom'
import {PropTypes} from 'prop-types'


const BlogPost = ( {blog, displayLink} ) => {
    let {path} = useRouteMatch()

    return (
        <div className="card blog-card" >
            <div className="blog-card__body">
                <h3 className="blog-card__title">{blog.title}</h3>
                <h4 className="blog-card__subtitle text-muted">{blog.description}</h4>
                <p className="blog-card__content">{blog.content}</p>
                <div className="blog-card__footer">
                    <div className="blog-card__footer-data">
                        <h4>{blog.author}</h4>
                        <h5>{blog.publish_date}</h5>
                    </div>
                    {displayLink ?
                        <Link className="blog-card__footer-link"
                            to={
                                {pathname: `${ path }/${ blog.slug }`, state: blog} //we can also pass in id as the param, but to encourage SEO friendly routing, I have used the slug. This means that directly using the url to access the blog would result in an error. To solve this, we would require an api to fetch blogs by slug instead of id
                            } >
                            View blog
                         </Link> : null}
                </div>
            </div>
        </div >
    )
}

BlogPost.propTypes = {
    blog: PropTypes.object, 
    displayLink: PropTypes.bool
}

export default BlogPost