import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, withRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import { GlobalStyle } from './globalStyles';
import Signup from './components/Signup';
import Login from './components/Login';
import ForgotPassword from './components/ForgotPassword';
import { AuthProvider } from './contexts/AuthContext';
import Details from './components/Details';
import Page404 from './components/Page404';

const App = () => {
  const [isDarkThemeEnabled, setIsDarkThemeEnabled] = useState(false);

  const toggleState = () => {
    setIsDarkThemeEnabled((prevState) => !prevState);
  };

  return (
    <Router>
      <GlobalStyle />
      <AuthProvider>
        <Navbar isDarkThemeEnabled={isDarkThemeEnabled} toggleState={toggleState} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/sign-up" component={Signup} isDarkThemeEnabled={isDarkThemeEnabled} />
          <Route path="/log-in" component={Login} isDarkThemeEnabled={isDarkThemeEnabled} />
          <Route path="/forgot-password" component={ForgotPassword} isDarkThemeEnabled={isDarkThemeEnabled} />
          <Route path="/404" component={Page404} />
          <Route exact path="/:id" component={Details} />
          <Route component={Page404} />
        </Switch>
      </AuthProvider>
    </Router>
  );
};

export default withRouter(App);
