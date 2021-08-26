import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { GlobalStyle } from './globalStyles';
import Signup from './components/Signup';
import Login from './components/Login';
import ForgotPassword from './components/ForgotPassword';
import { AuthProvider } from './contexts/AuthContext';

function App() {
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
          <Route exact path="/" component={Hero} />
          {/* <Route exact path="/pokemon/:pokemonIndex" component={Pokemon} />
          <Route exact path="/favourites" component={Favourites} /> */}
          <Route path="/sign-up" component={Signup} isDarkThemeEnabled={isDarkThemeEnabled} />
          <Route path="/log-in" component={Login} isDarkThemeEnabled={isDarkThemeEnabled} />
          <Route path="/forgot-password" component={ForgotPassword} isDarkThemeEnabled={isDarkThemeEnabled} />
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;
