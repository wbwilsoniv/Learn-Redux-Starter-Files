// let's go!
import React from 'react';

import { render } from 'react-dom';

// import css
import css from './styles/style.styl';

// import components
import Main from './components/Main';

// render takes JSX and a "mounting point" => Root
render(<Main/>, document.getElementById('root'));

