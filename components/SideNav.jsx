import React, {Component} from 'react';

import ChannelSection from './channels/ChannelSection.jsx';


class SideNav extends Component {
  render() {
    return(
      <div className="sidenav-container">
        <ChannelSection  channels={this.props.channels} setChannel={this.props.setChannel}
        addChannel={this.props.addChannel}/>
      </div>
    )
  }
}


SideNav.propTypes = {
  channels: React.PropTypes.array.isRequired,
  addChannel: React.PropTypes.func.isRequired,
  setChannel: React.PropTypes.func.isRequired
}


export default SideNav
