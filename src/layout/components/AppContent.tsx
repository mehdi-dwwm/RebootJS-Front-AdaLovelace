import React from 'react';
import { Switch, Route} from 'react-router-dom';
import MyProfile from '../../profile/components/MyProfile';
import ChatUI from '../../conversations/component/ChatUI';
import { HomeScreen } from './HomeScreen';
import LoginScreen from '../../login/LoginScreen';

class AppContent extends React.Component {
    render(){
        return (
            <Switch>
                <Route path='/conversation/:conversationId' component={ ChatUI } />
                <Route path='/profile' component={MyProfile} />
                <Route path="/login" component={LoginScreen} />
                <Route path="/" component={HomeScreen} />
            </Switch>
        )
    }
}

export default AppContent;