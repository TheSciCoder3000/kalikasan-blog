import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import AuthProvider from './components/Auth'

ReactDOM.render(
  <AuthProvider>
    <Router>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Router>
  </AuthProvider>,
  document.getElementById('root')
);
