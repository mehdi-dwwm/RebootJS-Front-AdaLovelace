import { connect } from '../api/socket_methods';
import { IAppState } from '../appReducer';
import { IConversationMessage } from '../conversations/types';
import { UpdateConversationMessage } from '../conversations/action/updateConversationMessage';

export function makeStartSocket() {
    return (dispatch: any, getState: () => IAppState) => {
        const socket = connect();

        socket.on('connect', () => {
            console.log('Received user connection');
        });

        socket.on('chat-message', (message: IConversationMessage) => {
            dispatch(UpdateConversationMessage(message))
        })
    }
}