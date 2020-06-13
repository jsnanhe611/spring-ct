import React from 'react';
import Login from './components/login/login';
import UserList from './components/userList/userList';
import AddUser from './components/addUser/addUser'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route exact path="/" component = {Login}/>
          <Route path="/userlist" component={UserList} />
          <Route path="/adduser" component={AddUser} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
