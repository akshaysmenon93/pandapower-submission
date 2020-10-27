import React from 'react'
import Loader from './loader'
import ErrorFallback from './error'
import {PropTypes} from 'prop-types'


// This is a higher order component that performs either one of the following:
// 1. Returns loading screen if isLoading is true and isApiError is false
// 2. Returns the error screen if isApiError is true
// 3. Returns the component passed to it if both isLoading and isApiError is false

const WithMessageFallBack = WrappedComponent => {
    return class FallbackScreen extends React.PureComponent {
        render () {
            if ( this.props.isLoading ) {
                return <Loader />
            }

            if ( this.props.isApiError && !this.props.isLoading ) {
                return <ErrorFallback />
            }

            return <WrappedComponent {...this.props} />
        }
    }
}

WithMessageFallBack.propTypes = {
    WrappedComponent: PropTypes.instanceOf( React.Component )
}

export default WithMessageFallBack