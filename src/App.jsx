import './assets/fonts/fonts.css'
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Blogs from './pages/Blog/Blogs'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          {/* Website Routes */}
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/about'>
            <About />
          </Route>
          <Route path='/blogs'>
            <Blogs />
          </Route>

        </Switch>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
