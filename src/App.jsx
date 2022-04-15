import './assets/fonts/fonts.css'
import './App.css';
import { Switch, Route, useParams } from 'react-router-dom';
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Blogs from './pages/Blog/Blogs'
import Footer from './components/Footer/Footer'
import ScrollToTop from './components/ScrollToTop';
import BlogArticle from './pages/BlogArticle/BlogArticle';
import BlogEditor from './pages/BlogEditor/BlogEditor';

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Switch>
        {/* Website Routes */}
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/about'>
          <About />
        </Route>
        <Route path='/blogs'>
          <Route exact path='/blogs'>
            <Blogs />
          </Route>
          <Route exact path='/blogs/:blogId'>
            <BlogArticle />
          </Route>
          <Route exact path='/blogs/editor/:blogId'>
            <BlogEditor />
          </Route>
        </Route>

      </Switch>

      <Footer />
    </div>
  );
}

export default App;
