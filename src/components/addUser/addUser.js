import React from 'react';
import '../../App.css';
// import './login.css';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';

function AddUser() {
    const [username, setUserName] = React.useState("");
    const [number, setNumber] = React.useState("");
    const [address, setAddress] = React.useState('');
    const [userType, setUserType] = React.useState('');

    return (
        <div className="App">
            <div className="card">
                <div className="card-body">
                    <div className="container">
                        <div>
                            <label for="name"><b>User Name</b></label>
                            <input type="text" className="form-control" placeholder="Enter Name" name="name" onChange={e => setUserName(e.target.value)} required />
                        </div>
                        <div>
                            <label for="number"><b>Phone Number</b></label>
                            <input type="number" className="form-control" placeholder="Enter Phone Number" name="number" onChange={e => setNumber(e.target.value)} required />
                        </div>
                        <div>
                            <label for="address"><b>Address</b></label>
                            <input type="text" className="form-control" placeholder="Enter Address" name="address" onChange={e => setAddress(e.target.value)} required />
                        </div>
                        <div>
                            <label for="sel1">Select UserType:</label>
                            <select class="form-control" id="userType" onChange={e => setUserType(e.target.value)}>
                                <option value="admin">Admin</option>
                                <option value="normal">Normal</option>
                            </select>                            
                        </div>
                        <div className="button-container">
                            <button 
                                type="submit" 
                                onClick={()=>{
                                    if(ValidateUser()){
                                        alert("New User Added Successfully");
                                    }
                                    
                                }}
                                className="btn btn-info">Add User</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );    
}

export default connect()(AddUser); 

export const ValidateUser = () => {
    return true;
}