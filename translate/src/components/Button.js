import React from 'react';
import LanguageContext from '../context/LanguageContext';

class Button extends React.Component {
  // it has to be called contextType
  static contextType = LanguageContext;
  render() {
    switch (this.context.language) {
      case 'english':
        this.text = 'Submit';
        break;
      case 'dutch':
        this.text = 'Indienen';
        break;
      case 'hindi':
        this.text = 'प्रस्तुत';
        break;
      default:
        this.text = 'Submit';
    }
    return <button className="ui primary button">{this.text}</button>;
  }
}

// another way of hooking up the contextType
// Button.contextType = LanguageContext;

export default Button;
