// Include React in order to use it along with the Component class seperately.
import React, {Component} from 'react';

// Import the child Components of this Component. Notice that the Channel Component is not imported
// since it is a dependency of ChannelList Component and thus already imported along with it.
import ChannelForm from './ChannelForm.jsx';
import ChannelList from './ChannelList.jsx';

// This is the outermost component of the channels section but App.jsx is the parent of all front-end components. Thus App.jsx will maintain state as is good practice.
class ChannelSection extends Component{
  render(){
    return(
      // pass the required props to the child Components.
      <section className="channel-section">
        <h1>User Name</h1>
        <ChannelList channels={this.props.channels} setChannel={this.props.setChannel} activeChannel={this.props.activeChannel}/>
        <ChannelForm addChannel={this.props.addChannel}/>
      </section>
    )
  }
}


// Functions of child Components have been passed along to this outer parent Component. The array is also passed down but not the object in Channel Component since that is being iterated over by the ChannelList Component.
ChannelSection.propTypes = {
  channels: React.PropTypes.array.isRequired,
  addChannel: React.PropTypes.func.isRequired,
  setChannel: React.PropTypes.func.isRequired,
  activeChannel: React.PropTypes.object.isRequired
}

export default ChannelSection
