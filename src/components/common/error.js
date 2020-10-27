import React from 'react'


const ErrorFallback = ( props ) => {
    return (
        <div className="card error">
            <p>Error ! Something went wrong. Click <a href="/">Here</a> to reload</p>
        </div>
    )
}

export default ErrorFallback