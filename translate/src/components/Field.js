import React from 'react';
import LanguageContext from '../context/LanguageContext';

// using Consumer component instead of this.context
// required for pulling values from multiple contexts
class Field extends React.Component {
  renderText(language) {
    switch (language) {
      case 'english':
        return 'Name';
      case 'dutch':
        return 'Naam';
      case 'hindi':
        return 'नाम';
      default:
        return 'Name';
    }
  }
  renderTextStyle(value) {
    return (
      <h3 style={{ color: value }}>
        <LanguageContext.Consumer>
          {({ language }) => this.renderText(language)}
        </LanguageContext.Consumer>
      </h3>
    );
  }
  render() {
    return (
      <div className="ui field">
        <LanguageContext.Consumer>
          {({ color }) => this.renderTextStyle(color)}
        </LanguageContext.Consumer>
        <input />
      </div>
    );
  }
}

export default Field;
