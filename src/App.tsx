import React from 'react';
import './App.css';

import { AppState } from './store';
import { connect} from 'react-redux'

import { SystemState } from "./store/system/types"
import { ChatState } from './store/chat/types'

import { sendMessage, getMessages } from './store/chat/actions';


interface AppProps {
  chat: ChatState,
  system: SystemState,
  sendMessage: typeof sendMessage,
  getMessages: any
}


class App extends React.Component<AppProps> {

  async componentDidMount() {
    await this.props.getMessages();
    await this.props.sendMessage({
      user: 'Rodney',
      message: "Hi, How cna I help you?",
      timeStamp: new Date().getTime()
    })


  }

  render() {
    return (
      <div className="App">
        test
      </div>
    );
  }

}

const mapStateToProps = (state: AppState) => ({
  system: state.system,
  chat: state.chat
});

export default connect(mapStateToProps, { sendMessage, getMessages })(App);
