// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import LoginPage from './components/LoginPage';
import RegistrationPage from './components/RegistrationPage';
import TeamDashboard from './components/TeamDashboard';

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={RegistrationPage} />
          <Route path="/dashboard" component={TeamDashboard} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

