import React, { Component } from 'react';
import { connect } from 'react-redux';

class UserHeader extends Component {
  render() {
    const { user } = this.props;
    if (!user) {
      return null;
    }
    return <div className="header">{user.name}</div>;
  }
}

// mapStateToProps gets caled with ownProps
// which has access to its own props
const mapStateToProps = (state, ownProps) => {
  const user = state.users.find((user) => user.id === ownProps.userId);
  return {
    user,
  };
};

export default connect(mapStateToProps)(UserHeader);
