import './assets/fonts/fonts.css';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/ScrollToTop';
import SignUp from './pages/SignUp/SignUp';
import LogIn from './pages/LogIn/LogIn';
import { useRef } from 'react';
import { useAuth } from './components/Auth';
import WebApp from './pages/WebApp/WebApp';
import store from './redux/store';
import { Provider } from 'react-redux'

function App() {
  const appRef = useRef(null)
  
  const { currentUser, pending } = useAuth()
  
  return (
    <div className="App">
      <ScrollToTop />
      <Switch>
        {/* Website Routes */}
        <Route exact path='/'>
          <div className="home-scroll-container" ref={appRef} data-scroll-container>
            <Home appRef={appRef} currentUser={currentUser} />
            <Footer />
          </div>
        </Route>
        <Route exact path='/about'>
          <About />
          <Footer />
        </Route>
        <Route exact path='/signup'>
          <SignUp />
        </Route>
        <Route exact path='/login'>
          <LogIn />
        </Route>
        <Route path='/app'>
          <Provider store={store}>
            {currentUser || pending  ? <WebApp /> : <Redirect to='/' /> }
          </Provider>
        </Route>

      </Switch>

    </div>
  );
}

export default App;
