import React from 'react';
import LanguageContext from '../context/LanguageContext';

class LanguageSelector extends React.Component {
  onChange = (language, color) => {
    this.context.onLanguageChange(language, color);
  };
  render() {
    return (
      <div>
        <h2>Select a language:</h2>
        <i
          className="flag us"
          onClick={() => this.onChange('english', 'red')}
        />
        <i className="flag nl" onClick={() => this.onChange('dutch', 'blue')} />
        <i
          className="flag in"
          onClick={() => this.onChange('hindi', 'green')}
        />
      </div>
    );
  }
}

LanguageSelector.contextType = LanguageContext;

export default LanguageSelector;
