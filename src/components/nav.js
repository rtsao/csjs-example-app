const React = require('react');
const hyperstyles = require('hyperstyles');

const styles = require('./nav-styles');
const h = hyperstyles(React.createElement, styles);

module.exports = Nav;

function Nav({items}) {
  return h('ul.nav', items.map(NavItem));
}

function NavItem({title}, i) {
  return h('li.navItem', {key: i}, title);
}
