import React from 'react';
import '../../App.css';
import './login.css';
import { loginUser } from '../../actions/userAction';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userAction from '../../actions/userAction'

function Login() {
    const [username, setUserName] = React.useState("");
    const [password, setpassword] = React.useState("");
    const [isError, setError] = React.useState(false);
    const [errorMessage, setErrorMessage] = React.useState('');

    if (isError) {
        return <Redirect to='/userlist' push={true} />
    } else {
        return (
            <div className="App">
                <div className="card">
                    <div className="card-body">
                        <div className="container">
                            <div>
                                <label for="uname"><b>Username</b></label>
                                <input type="text" className="form-control" placeholder="Enter Username" name="uname" onChange={e => setUserName(e.target.value)} required />
                            </div>
                            <div>
                                <label for="password"><b>Password</b></label>
                                <input type="password" className="form-control" placeholder="Enter Username" name="password" onChange={e => setpassword(e.target.value)} required />
                            </div>
                            <div className="button-container">
                                <button 
                                    type="submit" 
                                    onClick={() => {
                                        if(!validateLoginForm(username, password)){
                                            setError(true);
                                        } else {
                                            setErrorMessage("Please Enter Username and Password");
                                        }
                                    }} 
                                    className="btn login-button">Login</button>
                            </div>
                        </div>
                        <div>
                            {errorMessage && 
                                <p>Please Enter Username and Password</p>
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    
}

export default Login;

// function mapStateToProps(state){
//     return {
        
//     }
// }   

// function mapDispatchToProps(dispatch){
//     return {
//         actions: bindActionCreators(userAction.loginUser, dispatch)
//     }
// }

// export default connect(mapStateToProps,mapDispatchToProps)(Login);


export const validateLoginForm = (
    email,
    password
  ) => {
    if (email || password) {
      return false;
    }
  return true;
};