import { lazy } from 'react';
import { BrowserRouter as Routes, Route, Switch } from 'react-router-dom';
import Login from './pages/Login';

const Login = lazy(() => import('./pages/Login'));

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/login' component={Login} />
      </Switch>
    </Router>
  );
}

export default App;
