// Include React in order to use it along with the Component class seperately.
import React, {Component} from 'react';

//Import Channel component from Channel.jsx to be used by ChannelList Component.
import Channel from './Channel.jsx';

class ChannelList extends Component{
  render(){
    const {channels} = this.props;
    return(
      <ul className="channel-list">{
        // Loop over the Channels [array] from .propTypes below and return a Channel Component for each element of the [array] as an <li> ([i] in this case is named 'chan'). You also need to add a unique key to sibling Channel Component. This is so that React can do optimized DOM manipulations later on and differentiate siblings. The key property is needed in siblings components so that React can do optimized DOM manipulations and differentiate between siblings.
        channels.map( chan => {
          return (
            <Channel key={chan.id} channel={chan} setChannel={this.props.setChannel} activeChannel={this.props.activeChannel} />
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
  setChannel: React.PropTypes.func.isRequired,
  activeChannel: React.PropTypes.object.isRequired
}

export default ChannelList
