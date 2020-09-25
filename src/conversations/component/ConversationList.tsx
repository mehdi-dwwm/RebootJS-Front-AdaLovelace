import React from 'react';
import { IConversation } from '../types';
import { List } from '@material-ui/core';
import ConversationListItem from './ConversationListItem';
import { connect } from 'react-redux';
import { IAppState } from '../../appReducer';


interface ConversationListProps {
    conversations: IConversation[];
}


class ConversationList extends React.Component<ConversationListProps>{

    render (){
        return (
            <List>
                {this.props.conversations.map((conversation, index) => <ConversationListItem conversation={conversation} key={index}/>)}
            </List>
        )
    }
}

const mapStateToProps = ({conversation} : IAppState) => ({
    conversations: conversation.list
})
export default connect(mapStateToProps)(ConversationList);