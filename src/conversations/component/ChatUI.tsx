import React, { Fragment } from 'react';
import { match, withRouter } from 'react-router-dom';
import { patchConversationSeen, sendMessage } from '../../api/methods';
import AttendeesList from './AttendeesList';
import { IConversation } from '../types';
import ChatInput from './ChatInput';
import ChatMessages from './ChatMessages';
import history from '../../history';


interface ChatUIState {
  conversation?: IConversation;
}

interface ChatUIProps {
  match: match< {conversationId: string }>;
  location: any;
  history: any;
  conversations: IConversation[];
}

class ChatUI extends React.Component<ChatUIProps, ChatUIState>{
  constructor(props: ChatUIProps){
    super(props);
    this.state = {};
  }

  conversationSeen = () => {
    if(this.state.conversation) {patchConversationSeen(this.state.conversation._id)}
  }

  // temporaire pour avoir une conversation dans le state
  // TODO Ne pas faire plusieurs appel. Remonter l'appel dans la hierarchie de composants
  componentDidMount(){
    const conversations = this.props.conversations;
    const conversationId = this.props.match.params.conversationId;
    let conversation = conversations.find(conv => conv._id === conversationId)
    if(!conversation) {
      const target = new URLSearchParams(this.props.location.search).get('target')
      if(!target) { return history.push('/') }
      conversation = {
        _id: conversationId,
        messages: [],
        unseenMessages: 0,
        updatedAt: new Date(),
        targets: [
          target
        ]
      }
    }
    this.setState({conversation: conversation})
  }

  doSendMessage = async (message: string) => {
    const { conversation } = this.state;
    if(conversation) {
      const sentMessage = await sendMessage(conversation._id, conversation.targets, message);
      this.setState({
        conversation: {
          ...conversation,
          messages: [...conversation.messages, sentMessage]
        }
      })
    }
  }


  render(){
    return <Fragment>
      <h1>Chat</h1>
        { this.state.conversation ? <Fragment>
          <ChatMessages conversationSeen={this.conversationSeen} messages={this.state.conversation.messages}/>
          <ChatInput doSendMessage={this.doSendMessage} conversationId={this.state.conversation._id}/>
          <AttendeesList targets={this.state.conversation?.targets}/>
        </Fragment> : <h1>Impossible de trouver la conversation</h1> }
      </Fragment>
      
  }
}

export default withRouter(ChatUI);