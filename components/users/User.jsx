import React, {Component} from 'react';


class User extends Component{
  render(
    return(
      <li>
        <a onClick={this.onClick.bind(this)}></a>
      </li>
    )
  )
}


User.propTypes = {
  user : React.PropTypes.object.isRequired,
  setUser: React.PropTypes.func.isRequired,
  activeUser: React.PropTypes.object.isRequired
}
