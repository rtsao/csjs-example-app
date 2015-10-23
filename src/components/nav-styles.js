var csjs = require('csjs');

var common = require('./common-styles');

var green = '#33aa22';

module.exports = csjs`

  .nav {
    border: 1px solid black;
    background-color: ${green};
  }

  .navItem extends ${common.blueText} {
    font-size: 15px;
    padding: 10px;
    color: purple;
  }

`;
