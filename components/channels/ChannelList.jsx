// Include React in order to use it along with the Component class seperately.
import React, {Component} from 'react';

//Import Channel component from Channel.jsx to be used by ChannelList Component.
import Channel from './Channel.jsx';

class ChannelList extends Component{
  render(){
    const {channels} = this.props;
    return(
      <ul>{
        channels.map( chan => {
          return (
            <Channel
            channel={chan}
            setChannel={this.props.setChannel}
            />
          );
        })
      }</ul>
    )
  }
}

// .propTypes below is a way to declare everything a Component needs as an object prop then passing them to the Component. This includes the type of data it should expect and if it is required or not. To define this set static property on the Component called .propTypes.
ChannelList.propTypes = {
  // Consider what properties the child elements use.
  channels: React.PropTypes.array.isRequired,
  setChannel: React.PropTypes.func.isRequired
}

export default ChannelList
