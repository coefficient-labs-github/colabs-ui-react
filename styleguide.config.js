const path = require('path');
const docgen = require('react-docgen');
const docgenTypescript = require('react-docgen-typescript');

module.exports = {
  title: 'colabs-ui-react',
  showSidebar: true,
  version: '1.0.0',
  styleguideDir: 'docs/',
  styleguideComponents: {
    StyleGuideRenderer: path.join(
      __dirname,
      'src/styleguide/StyleGuideRenderer'
    ),
    Wrapper: path.join(__dirname, 'src/styleguide/Wrapper'),
  },
  propsParser: (filePath, source, resolver, handlers) => {
    const { ext } = path.parse(filePath);
    return ext === '.tsx'
      ? docgen.parse(filePath, source, resolver, handlers)
      : docgenTypescript.parse(source, resolver, handlers);
  },
};
