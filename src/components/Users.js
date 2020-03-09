import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapPropsToState = (state) => {
  return {
    users: state.users,
    userCount: state.users.length
  }
}

class Users extends Component {

  render() {
    return (
      <div>
        <ul>
          Users!
          {this.props.users.map( user => {
            return <li>{user.username}</li>
          })}
          {this.props.userCount}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here

// connect this component to Redux
export default connect(mapPropsToState)(Users)
