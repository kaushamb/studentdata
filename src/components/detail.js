import React, { Component } from 'react'
import {Link} from "react-router-dom"
import { thisExpression } from '@babel/types';


export default class detail extends Component {
    state={
        f:[],
        total:0,
    }
    componentDidMount(){
        console.log(this.state.f,"cc");
        this.setState({
            f:this.props.location.query.thing,
            total:this.props.location.total.total,
        })
    }
    render() {
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
        const subjectLabel={
            float:"left",

        }
        const detail={
            width: "270px",
            minHeight:"270px",
            border:"3px solid #ff0066",
            margin:"auto",
            marginTop:"30px",
            borderRadius:"10px",
            padding: "20px",

        }
        return (
            <div>
                <div style={LogoutBtn}><Link to="/admin" style={link}>Back</Link></div>
                <div style={detail}>
                  <h5 style={subjectLabel}>Roll No. :</h5> 
                  <h5>{this.props.location.rollno.rollno}</h5> 
                  <h5 style={subjectLabel}>Class :</h5>
                  <h5>{this.props.location.class.class}</h5>
                  <h5 style={subjectLabel}>Name :</h5>
                  <h5>{this.props.location.name.name}</h5>
                   
                {Object.keys(this.state.f).map((obj, i) => {
                return (
                      <div key={i}>
                            <h5 style={subjectLabel}>SUBJECT {i+1} MARKS : </h5>
                            <p>{this.state.f[obj]}</p>
                      </div>
                    )})}
                            <h5 style={subjectLabel}>Total :</h5>
                            <p>{this.state.total}</p>
            </div>
            </div>
        )
    }
}
