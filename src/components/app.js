const React = require('react');
const styles = require('./common-styles');
const hyperstyles = require('hyperstyles');
const h = hyperstyles(React.createElement, styles);

const Nav = require('./nav');

module.exports = () =>

  h('div', null,
    h('div.blueText', 'asdf!'),
    h(Nav, {items: [
      {title: 'home'},
      {title: 'woo'},
      {title: 'blah'}
    ]})
  );
