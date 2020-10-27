import React from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'
import BlogsController from '../blog/blogController'
import ManageBlog from '../blog/manageBlog'
import Header from './header'

const Layout = ( props ) => {
    return (

        <div className="container main">
            <Header />

            <Switch>
                <Route exact path="/" render={() => {return ( <Redirect to="/blogs" /> )}} />
                <Route exact path="/blogs/:slug" component={ManageBlog} />
                <Route exact path="/blogs" component={BlogsController} />
            </Switch>
        </div>
    )
}

export default Layout