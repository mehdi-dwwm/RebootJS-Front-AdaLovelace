import React from 'react';
import { Switch, Route} from 'react-router-dom';
import MyProfile from '../../profile/components/MyProfile';
import ChatUI from '../../conversations/component/ChatUI';
import { HomeScreen } from './HomeScreen';
import LoginScreen from '../../login/LoginScreen';
import { IConversation } from '../../conversations/types';
import { User } from '../../users/types';

interface AppContentProps {
    users: User[];
    connectedUser?: User;
    conversations: IConversation[];
}

class AppContent extends React.Component<AppContentProps> {
    render(){
        return (
            <Switch>
                <Route path='/conversation/:conversationId' component={() => <ChatUI conversations={this.props.conversations} users={this.props.users}/> } />
                <Route path='/profile' component={() => <MyProfile connectedUser={this.props.connectedUser} />} />
                <Route path="/login" component={LoginScreen} />
                <Route path="/" component={HomeScreen} />
            </Switch>
        )
    }
}

export default AppContent;