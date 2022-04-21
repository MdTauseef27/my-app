import React, { useState } from "react";
import {Table,Button} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
export const Home=()=>{
    const [users,setUsers]=useState([]);
    function getData(){
        fetch("https://reqres.in/api/users").then(res=>res.json()).then(data=>{
            setUsers(data.data)
        })
    }
    getData();
    return(
        <div>
            
             <Table border="1" striped hover bordered>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Avatar</th>



                    </tr>
                    </thead>
                
          <tbody>
                  
                    {
                        
                        users.map((user)=>{
                            return(
                                <tr>
                                    <td>{user.id}</td>
                                    <td>{user.first_name}</td>
                                    <td>{user.last_name}</td>
                                    <td>{user.email}</td>
                                    <td><img src={user.avatar} /></td>
                                </tr>
                                    )
                         })
                    }
                 </tbody>
                 </Table>
        </div>
    )
}