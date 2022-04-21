import React from "react";
import {Table} from "react-bootstrap";
export const TableRow=(props)=>{
    return(
        <div>
             <Table border="1"> 
            {/* <thead>
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Avatar</th>



                    </tr>
                </thead> */}
<tbody>
    <tr>
        <td>{props.id}</td>
        <td>{props.first_name}</td>
        <td>{props.last_name}</td>
        <td>{props.email}</td>
        <td>{props.avatar}</td>
    </tr>
</tbody>
             </Table> 
        </div>
    )
}