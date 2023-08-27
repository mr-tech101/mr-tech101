import React from 'react'
import { users } from '../database/data'

type GreetProps = {
    name: string
  
}
function Greet(props:GreetProps) {
  return (
    <div>
       <table>
        <thead>
            <tr>
                <th>Id</th>
                <th>UserName</th>
                <th>Admin</th>
            </tr>
        </thead>
        <tbody>
        {
            users.map((user)=>{
               return(
                <tr>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.admin?"Yes":"No"}</td>

            </tr>
               )
                
            })
        }
        </tbody>
       </table>
    </div>
  )
}


export default Greet
