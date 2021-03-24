import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Login = lazy(() => import('./pages/Login'));

function App() {
  return (
    <Router>
      <Suspense fallback={<p>Loadin ...</p>}>
        <Switch>
          <Route path='/login' component={Login} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
