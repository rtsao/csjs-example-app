var csjs = require('csjs');

module.exports = csjs`

  .blueText {
    color: blue;
  }

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

`;
