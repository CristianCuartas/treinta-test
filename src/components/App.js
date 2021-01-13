import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import AuthProvider from '../contexts/AuthContext';
import Signup from './login/Signup'
import Login from './login/Login';
import ForgotPassword from './login/ForgotPassword';
import PrivateRoute from './routes/PrivateRoute';
import Dashboard from './dashboard';
import Profile from './profile';
import AboutTreinta from './infoTreinta';
import BusinessMap from './businessMap';
import test from './businessMap/test'
import Page404 from './pages';

function App() {
  return (
      <Router>
        <AuthProvider>
          <Switch>
            <PrivateRoute exact path="/" component={Dashboard}/>
            <PrivateRoute exact path="/profile" component={Profile}/>      
            <PrivateRoute exact path="/about-treinta" component={AboutTreinta}/>      
            <PrivateRoute exact path="/business-map" component={BusinessMap}/>                  
            <Route exact path="/signup" component={Signup}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/forgot-password" component={ForgotPassword}/>
            <Route path="/" component={Page404}/>
          </Switch>
        </AuthProvider>
      </Router>
  );
}

export default App;
