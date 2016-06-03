// Include react in order to use it. Also include React's Component class seperately (optional) to use it.
import React, {Component} from 'react';

// Components (Object Class) should get everything they need (functionality) passed to it as an object property. See .propTypes syntax below.
class Channel extends Component {
  render(){
    const {channel} = this.props; // Pull the channel object from .propTypes into a constant(a read only variable).
    return(
      <li>
        <a onClick={this.onClick.bind(this)}>
          {channel.name}
        </a>
      </li>
    )
  }
  onClick(e){
    e.preventDefault();
    // Pull in setChannel and Channel out of .propTypes below into their own constants(read only variables) so you can use them.
    const {setChannel, channel} = this.props;
    setChannel(channel);
  }
}

// .propTypes is a static property on the Component Class and is a way to declare everything a Component needs as an object which then gets inherited by the Component. This includes the type of data it should expect and if it is required or not. It also sheds light on how the componnet should be used. 
Channel.propTypes = {
  channel: React.PropTypes.object.isRequired,
  setChannel: React.PropTypes.func.isRequired
}


export default Channel
