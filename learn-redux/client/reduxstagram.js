// let's go!
import React from 'react';

import { render } from 'react-dom';

// import css
import css from './styles/style.styl';

// import components
import App from './components/App';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';

// import react router deps
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';


// Routes the main component THEN either Index or :postID
const router = (
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={Main}>
                <IndexRoute component={PhotoGrid}></IndexRoute>
                <Route path="/view/:postId" component={Single}></Route>
            </Route>
        </Router>
    </Provider>
)

// render takes JSX and a "mounting point" => Root
render(router, document.getElementById('root'));

