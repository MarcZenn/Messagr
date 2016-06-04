// Include React in order to use it along with the Component class seperately.
import React, {Component} from 'react';

// Include the SideNav Component which carries with it all other Components. See SideNav.jsx.
import SideNav from './SideNav.jsx';

// Since App is the outermost Component, it's a good place to maintain state. So for example, the channels array from the ChannelList Component is a variable type of 'array' and we will store that in the App Component's state. BUT FIRST you need to initialize the state object, otherwise you won't be able to access it since it won't exist. To do this you must create a constructor that calls its parents objects?
class App extends Component {
  // The super keyword is used to call functions on an object's parent. You cannot use the keyword 'this' until you first call super() which calls the parents object functions. For an example reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/super
  constructor(props){
    // This initializes the state object. Otherwise we'll get an error when we try to access channels from a state object tha doesn't exist yet.
    super(props);
    this.state = {
      channels: [], // New!
      activeChannel: {} // New!
    };
  }
  render(){
    return (
      // When adding class selectors to elements for styling, you cannot use the word 'class' as it is a JS keyword. Instead you must use className.
      <section className="app">
        <section className="nav">
          <SideNav addChannel={this.addChannel.bind(this)}   setChannel={this.setChannel.bind(this)}  channels={this.state.channels} activeChannel={this.state.activeChannel}/>
        </section>
      </section>
    )
  }
  addChannel(name){
    let {channels} = this.state;
    channels.push({id:channels.length, name:name});
    this.setState({channels});
    // TODO: send to server and update data..
  }
  setChannel(activeChannel){
    this.setState({activeChannel});
    // TODO: When user selects a channel. Get all messages for that channel.
  }
}

// While the App Component is the outermost parent Component and will maintain state, it will not actually be receiving any properties (of its children or its own properties) since it wont actually be serving any functionality. Thus there is no need to definte properties to .propTypes...


/*
  | Webpack Build Process and Dev Server:
  |-------------------------------------------------------------------------
  | 1.To initiate build process run: 'webpack'
  | 2.To initiate dev server run: 'webpack-dev-server --hot --inline'
  |-------------------------------------------------------------------------
*/

export default App
