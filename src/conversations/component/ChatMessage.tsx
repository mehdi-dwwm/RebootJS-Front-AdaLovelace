import * as React from 'react';
import { IConversationMessage } from '../types';
import { ListItem, ListItemText, Divider, Avatar, ListItemAvatar } from '@material-ui/core';
import { connect } from 'react-redux';
import { IAppState } from '../../appReducer';
import { IProfile } from '../../profile/types';

export interface IChatMessageProps {
    message: IConversationMessage;
    emitter?: IProfile;
}

class ChatMessage extends React.Component<IChatMessageProps> {
    public render() {
        return (
            <React.Fragment>
                <ListItem alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar>{this.props.emitter?.firstname[0] || 'U'}</Avatar>
                </ListItemAvatar>
                <ListItemText secondary={`${this.props.emitter?.firstname || 'Unknown'} - ${this.props.message.createdAt}`}>
                    {this.props.message.content}
                </ListItemText>
                </ListItem>
                <Divider />
            </React.Fragment>
        );
    }
}

const mapStateToProps = ({ profile }: IAppState, { message }: { message: IConversationMessage }) => ({
    emitter: profile.list.find(user => user._id === message.emitter)
});
  
export default connect(mapStateToProps)(ChatMessage);