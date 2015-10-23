const React = require('react');
const r = require('r-dom');

const styles = require('./nav-styles');

const Nav = ({items}) => r.ul({className: styles.nav}, items.map(NavItem));

const NavItem = ({title}) => r.li({className: styles.navItem}, title);

module.exports = Nav;

