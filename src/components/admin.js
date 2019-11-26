import React, { Component } from 'react'
import {Link} from "react-router-dom"
import Details from "../components/detail"

export default class admin extends Component {
    state={
        a:[],
        data:"",
      }
     getdetails=async(e)=>{
       //e.preventDefault();
       const apidata= await fetch(`https://api.myjson.com/bins/1dlper`);
       const data= await apidata.json()
       let a= Object.keys(data);
       console.log(a);
       console.log(data[110])
       this.setState({
         a:a,
         data:data,
       })
     } 
     componentDidMount(){
         this.getdetails(); 
    }
     sum=(e)=>{
       console.log(e);
       //<p>{this.state.data[resdata].marks.s1}</p>
       console.log(this.state.data[110].marks,"kt::")
       var sum = 0;
       for( var el in e ) {
        if( e.hasOwnProperty( el ) ) {
          sum += parseFloat( e[el] );
        }
      }
      return sum;
     }

    render() {
        const card = {
            width:"270px",
            height:"200px",
            border:"3px solid green",
            borderRadius:"10px",
            backgroundColor:"red;",
            float:"left",
            FontSize:"15px",
            margin:"20px",
            paddingTop:"20px",
        };
        const floatL={
            width:"100px",
            float:"left",
            marginLeft:"10px",
        };
        const logoutButton={
            width:"80px",
            height:"35px",
            borderRadius:"7px",
            backgroundColor:"#b30000",
            textAlign:"center",
            float:"right",
            margin:"20px 40px 0 0",
            paddingTop:"4px",

        }
        const link={
            color:"white",
        }
        const dashboard={
            float:"left",
            paddingTop:"8px",
            marginLeft:"20px",
        }
        const navbar={
            height:"70px",
            width:"100%",
            backgroundColor:"#595959",
            color:"white",
        }
        const navButton={
            color:"red",float:"left",

        }
        const search={
            width:"300px",
            height:"50px",
            border:"2px solid #ff0066",
            outline:"none",
            borderRadius:"8px",
            margin:"10px 0 0 30px",
            float:"left,"
        }
        return (
            <div>
                <div style={navbar}>
                    <h1 style={dashboard}>DASHBOARD</h1>
                    <div style={navButton}><input type="text" style={search} onChange={this.sortedName}/></div>
                    <div style={navButton}></div>
                    <div style={logoutButton}><Link to="/logout" style={link}>Logout</Link></div>
                </div>
                <div>
                {this.state.a.map((resdata)=>{
                return ( 
                    <Link to={{
                        pathname: `/detail`, 
                        query:{thing: this.state.data[resdata].marks},
                        total:{total:this.sum(this.state.data[resdata].marks)},
                        rollno:{rollno:resdata},
                        name:{name:this.state.data[resdata].name},
                        class:{class:this.state.data[resdata].class}
                      }}>   
                        <div  key={resdata} style={card} >
                            <label style={floatL}>Roll NO.:</label>
                            <p>{resdata}</p>

                            <label style={floatL}>Name :</label>
                            <p>{this.state.data[resdata].name}</p>

                            <label style={floatL}>Total Marks:</label>
                            <p> {this.sum(this.state.data[resdata].marks)}</p>
                            
                            
                        </div></Link>
                        );
                    }           
                )
                }   
                </div> 
            </div>
        )
    }
}
