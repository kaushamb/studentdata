import React, { Component } from 'react'
import {Redirect} from "react-router-dom"

export default class login extends Component {
    constructor(props){
    super(props)
    const token=localStorage.getItem("token")
    let loggedIn=true;
    if(token==null){
        loggedIn=false;
    }
    this.state={
        username:"",
        password:"",
        loggedIn
    }
    this.onchange = this.onchange.bind(this);
    this.submitform= this.submitform.bind(this) 
}
    onchange(e){
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    submitform(e){
        e.preventDefault();
        const {username , password}=this.state;
        if(username==="A"||password==="B"){
            localStorage.setItem("token","thisisauthtoken")
            this.setState({
                loggedIn:true,
            })
        }

    }
    render() {
        if(this.state.loggedIn){
            return <Redirect to="/admin"/>
        }
        const form={
            width:"300px",
            height:"300px",
            margin: "auto",
            border:"2px solid red",
            borderRadius:"10px",
            marginTop:"100px",
            textAlign:"center",
            color:"white"
        }
        const login={
            backgroundColor:"#ff0066",

        }
        const inputAlignment={
            borderRadius:"1px",
            margin:"10px",
            border:"none",
            borderBottom:"1px solid grey"
        }
        const submitButton={
            backgroundColor:"#ff0066",
            color:"white",
            width:"100px",
            height:"40px",
            marginTop:"30px",
            borderRadius:"5px",
            border:"none",
        }
        return (
            <div>
                
                <form onSubmit={this.submitform} style={form}>
                   <h1 style={login}>Login</h1>
                   <input style={inputAlignment} type="text" placeholder="user name" name="username" value={this.state.usename} onChange={this.onchange}/>
                   <br/>
                   <input style={inputAlignment} type="password" placeholder="password" name="password" value={this.state.password} onChange={this.onchange}/>
                   <br/>
                   <input style={inputAlignment,submitButton} type="submit" />                
                </form>
            </div>
        )
    }
}
