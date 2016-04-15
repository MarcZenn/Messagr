// Include React in order to use it along with the Component class seperately.
import React, {Component} from 'react';

class ChannelForm extends Component {
  render() {
    return(
      // React has special prop called Refs which allow you to assign a unique reference to a DOM element. You can then access that DOM element node with dot notation. Useful for forms and less verbose than using state.
      <form>
        <input type='text'/>
      </form>
    )
  }
}



// .propTypes below is a way to declare everything a Component needs as an object prop then passing them to the Component. This includes the type of data it should expect and if it is required or not. To define this set static property on the Component called .propTypes.
ChannelForm.propTypes = {
  addChannel: React.PropTypes.func.isRequired
}
