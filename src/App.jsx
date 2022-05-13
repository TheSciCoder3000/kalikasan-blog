import { useRef } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import { Provider } from 'react-redux'

import store from './redux/store';
import { useAuth } from './components/Auth';

import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Footer from './components/Footer/Footer';
import SignUp from './pages/SignUp/SignUp';
import LogIn from './pages/LogIn/LogIn';
import WebApp from './pages/WebApp/WebApp';

import './assets/fonts/fonts.css';
import './App.css';


// Main App Component
function App() {
  const appRef = useRef(null)
  
  const { currentUser, pending } = useAuth()
  
  return (
    <div className="App">
      <ScrollToTop />
      <Switch>
        {/* Website Routes */}
        <Route exact path='/'>
          <LocomotiveScrollProvider
            options={{
              smooth: true
            }}
            watch={[]}
            containerRef={appRef}>
              <div ref={appRef} className="home-scroll-container" data-scroll-container>
                <Home currentUser={currentUser} authPending={pending} />
                <Footer data-scroll-section />
              </div>
          </LocomotiveScrollProvider>
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
