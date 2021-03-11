import React from 'react'
import { Link } from 'react-router-dom'
export default class Error extends React.Component {
    render(){
        return(
            <>
            <h1>ERROR :: 404</h1>
            <h3>PAGE NOT FOUND</h3>
            <p><Link to="/"> Go Back... </Link></p>
            </>
        )
    }
}
