// Include React in order to use it along with the Component class seperately.
import React, {Component} from 'react';

class ChannelForm extends Component {
  render() {
    return(
      // React has special prop called 'Ref' which allow you to assign a unique reference to a DOM element. You can then access that DOM element node with dot notation. Useful for forms and less verbose than using state. See input attr below.
      <form onSubmit={this.onSubmit.bind(this)}>
        <input type='text' ref="channel"/>
      </form>
    )
  }
  onSubmit(e){
    e.preventDefault();
    // Access the value of the input field by setting the input 'ref' attr to channel as seen above. Then reference that ref attr by setting it to a variable. Then extract that variables value (the actual input value) by setting it to another variable.
    const node = this.refs.channel;
    const channelName = node.value;
    console.log(channelName);
    this.props.addChannel(channelName);
    node.value = '';
  }
}



// .propTypes below is a way to declare everything a Component needs as an object prop then passing them to the Component. This includes the type of data it should expect and if it is required or not. To define this set static property on the Component called .propTypes.
ChannelForm.propTypes = {
  addChannel: React.PropTypes.func.isRequired
}

export default ChannelForm
