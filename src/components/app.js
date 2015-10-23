const React = require('react');
const r = require('r-dom');

const Nav = require('./nav');

module.exports = React.createClass({

  getInitialState() {
    return {
      items: [
        {title: 'home'},
        {title: 'woo'},
        {title: 'blah'}
      ]
    }
  },

  render() {
    return (
      r.div([
        r(Nav, {items: this.state.items})
      ])
    );
  }

});
