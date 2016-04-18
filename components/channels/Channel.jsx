// Include react in order to use it along with the Component class seperately.
import React, {Component} from 'react';

// Components should get everything they need (functionality) passed to it as an object property. See .propTypes syntax below.
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

// .propTypes below is a way to declare everything a Component needs as an object then passing it to the Component. This includes the type of data it should expect and if it is required or not. To define this set static property on the Component. call it propTypes..
Channel.propTypes = {
  channel: React.PropTypes.object.isRequired,
  setChannel: React.PropTypes.func.isRequired
}


export default Channel
