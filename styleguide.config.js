const path = require('path');

module.exports = {
  title: 'colabs-ui-react',
  showSidebar: true,
  version: '1.0.0',
  styleguideComponents: {
    StyleGuideRenderer: path.join(
      __dirname,
      'src/styleguide/StyleGuideRenderer'
    ),
    // Wrapper: path.join(__dirname, 'src/styleguide/Wrapper'),
  },
};
