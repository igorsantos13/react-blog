import Home from './components/Home';
import Navbar from './components/Navbar';
import Create from './components/Create';
import './index.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BlogDetails from './components/BlogDetails';
import NotFound from './components/NotFound';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/create'>
          <Create />
        </Route>
        <Route path='/blogs/:id'>
          <BlogDetails />
        </Route>
        <Route path='*'>
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
