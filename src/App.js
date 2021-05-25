import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import './App.css';
import ClassComponent from './components/ClassComponent';
import { FunctionalComponent } from './components/FunctionalComponent';
import NotFound from './components/NotFound';
import { routes } from './constants';
import Character from './pages/character';
import Main from './pages/main';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <nav>
          <Link to={routes.index}>Characters</Link>
          <Link to={routes.class}>Class</Link>
          <Link to={routes.function}>Function</Link>
        </nav>
        <Switch>
          <Route path={routes.index} component={Main} exact />
          <Route path={routes.character} component={Character} exact />
          <Route path={routes.class} component={ClassComponent} exact />
          <Route path={routes.function} component={FunctionalComponent} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
