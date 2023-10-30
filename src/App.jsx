import Homepage from './pages/homepage/Homepage';
import Write from './pages/write/Write';
import TopBar from './components/topbar/TopBar';
import Settings from './pages/settings/Settings';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Blog from './pages/blog/Blog';
import About from './pages/about/About';
import Logout from './pages/logout/Logout';


function App() {
  const user = true;
  return (
    <Router>
      <TopBar />
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route path="/register"> {user ? <Homepage /> : <Register />}</Route>
        <Route path="/login">{user ? <Homepage /> : <Login />}</Route>
        <Route path="/write">{user ? <Write /> : <Login />}</Route>
        <Route path="/settings">{user ? <Settings /> : <Login />}</Route>
        <Route path='/blog/:id' component={Blog} />
        <Route path="/about" component={About} />
        <Route path="/logout" component={Logout} />
      </Switch>
    </Router>
  );
}

export default App;