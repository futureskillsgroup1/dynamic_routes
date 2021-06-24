import Home from './pages/home/Home'
import BlogPage from './pages/blogpage/BlogPage'
import { Switch, Route } from 'react-router-dom'
import AddBlog from './pages/addBlog/AddBlog';

function App() {
  return (
    <Switch>
      <Route path='/' exact><Home /></Route>
      <Route path='/add'><AddBlog /></Route>
      <Route path='/post/:id' component={BlogPage} />
      <Route></Route>
    </Switch>
  );
}

export default App;
