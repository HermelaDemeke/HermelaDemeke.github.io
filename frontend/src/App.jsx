import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';

const App = () => {
    return (
        <Router>
            <div>
                <Navbar />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/terms" component={Terms} />
                    <Route path="/privacy" component={Privacy} />
                </Switch>
            </div>
        </Router>
    );
};

export default App;