import React from 'react';
import './userList.css';
import { Link } from 'react-router-dom';

function UserList() {
  return (
    <div>
        <div>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Phone No</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>User1</td>
                        <td>9876543210</td>
                        <td>Pune</td>
                    </tr>
                    <tr>
                        <td>User2</td>
                        <td>9876543201</td>
                        <td>Pune</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div>
        <Link to={{ pathname:'/adduser'}} className='btn btn-success' >Add User</Link> 
        </div>
    </div>
  );
}

export default UserList;
