import axios from 'axios'

//can be moved to an external .env file
const baseUrl = "http://localhost:4001"


export async function loadAllBlogs () {
    try {
        const blogs = await axios.get( baseUrl + "/posts" )
        return {error: null, data: blogs}
    } catch ( error ) {
        return {error: error, data: null}
    }
}

export async function getBlogById ( id ) {
    try {
        const blog = await axios.get( baseUrl + "/posts/" + id )
        return {error: null, data: blog}
    } catch ( error ) {
        return {error: error, data: null}
    }
}

export async function getCommentsOnBlog ( id ) {
    try {
        const comments = await axios.get( baseUrl + "/posts/" + id + "/comments" )
        return {error: null, data: comments}
    } catch ( error ) {
        return {error: error, data: null}
    }
}

export async function saveComment ( comment ) {
    try {
        const comments = await axios.post( baseUrl + "/posts/" + comment.postId + "/comments", comment )
        return {error: null, data: comments}
    } catch ( error ) {
        return {error: error, data: null}
    }
}