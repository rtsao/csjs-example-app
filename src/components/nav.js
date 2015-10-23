const React = require('react');
const r = require('r-dom');

const styles = require('./nav-styles');

const Nav = ({items}) => r.ul({className: styles.nav}, items.map(NavItem));

const NavItem = ({title}) => r.li({className: styles.navItem}, title);

var Nav2 = React.createClass({
  render() {
    return r.ul({className: styles.nav}, this.props.items.map(NavItem));
  }
})

module.exports = Nav;

console.log(styles);
console.log(require('csjs/get-css')(styles));
