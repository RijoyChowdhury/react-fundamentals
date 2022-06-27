import React from 'react';

// specifying a default context value
// value can be any valid js valye type(numbers, arrays, objects)
// variabale should be 'Context' and not 'context'
// because we will be making a Component of it
const Context = React.createContext({ language: 'engish', color: 'red' });

export class LanguageStore extends React.Component {
  state = { language: 'english', color: 'red' };

  onLanguageChange = (language, color) => {
    this.setState({ language, color });
  };

  render() {
    return (
      <Context.Provider
        value={{ ...this.state, onLanguageChange: this.onLanguageChange }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default Context;
