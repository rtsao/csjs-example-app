const React = require('react');
const ReactDOM = require('react-dom');

const App = React.createFactory(require('./components/app'));

const node = document.body.appendChild(document.createElement('div'));

ReactDOM.render(App(), node);
