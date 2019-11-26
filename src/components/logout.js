import React, { Component } from 'react'
import {Link} from "react-router-dom"

export default class logout extends Component {
    constructor(props){
        super(props)
        localStorage.removeItem("token");
    }
    render() {
        const alignCenter={
            width:"300px",
            height:"200px",
            border:"3px solid #ff0066",
            borderRadius:"10px",
            textAlign:"center",
            margin:"auto",
            marginTop:"40px",
        }
        const LogoutBtn={
            backgroundColor:"#ff0066",
            color:"white",
            width:"100px",
            height:"40px",
            paddingTop:"5px",
            borderRadius:"5px",
            border:"none",
            textAlign:"center",
            margin:"auto",marginTop:"30px",
        }
        const link={
            color:"white",
            
        }
        return (
            <div style={alignCenter}>
                <h1>You have been Logged Out</h1>
                <div style={LogoutBtn}><Link to="/" style={link}>Login</Link></div>
            </div>
        )
    }
}
